from fastapi import FastAPI, Request
from fastapi.responses import StreamingResponse
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from typing import Optional
import os
import markdown

from langchain_community.llms import Ollama
from langchain.chains import RetrievalQA
from langchain_community.vectorstores import FAISS
from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.document_loaders import DirectoryLoader, UnstructuredMarkdownLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler
from sse_starlette.sse import EventSourceResponse

app = FastAPI(title="Ollama + RAG API (Markdown + Streaming)")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Replace with the allowed origin(s)
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

VECTORSTORE_DIR = "faiss_index"
DOCS_PATH = "docs/"

# Embedding and LLM setup
embeddings = OllamaEmbeddings(model="mistral")


def load_documents():
    #text_loader = DirectoryLoader(DOCS_PATH, glob="**/*.txt")
    #md_loader = DirectoryLoader(DOCS_PATH, glob="**/*.md", loader_cls=UnstructuredMarkdownLoader)
    md_loader = DirectoryLoader(DOCS_PATH, glob="**/*.md", loader_cls=UnstructuredMarkdownLoader)
    return  md_loader.load()


def get_vectorstore():
    if os.path.exists('faiss_index/index.faiss'):
        return FAISS.load_local('faiss_index', embeddings, allow_dangerous_deserialization=True)

    # Create the FAISS index if it doesn't exist
    documents = load_documents()
    splitter = RecursiveCharacterTextSplitter(chunk_size=500, chunk_overlap=50)
    docs = splitter.split_documents(documents)

    vectorstore = FAISS.from_documents(docs, embeddings)
    vectorstore.save_local('faiss_index')  # Save the index to the specified directory
    return vectorstore


vectorstore = get_vectorstore()
retriever = vectorstore.as_retriever()


class Query(BaseModel):
    question: str
    context: Optional[str] = None


@app.post("/ask")
def ask_question(query: Query):
    llm = Ollama(model="mistral")
    qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
    response = qa_chain.run(query.question)
    return {"answer": response}


@app.post("/stream")
async def stream_response(query: Query):
    def event_generator():
        llm = Ollama(
            model="mistral",
            callbacks=[StreamingStdOutCallbackHandler()]
        )
        qa_chain = RetrievalQA.from_chain_type(llm=llm, retriever=retriever)
        response = qa_chain.run(query.question)
        yield {"data": response}

    event_source = EventSourceResponse(event_generator())
    event_source.ping_interval = 600 #ping every 10 mins
    return event_source
