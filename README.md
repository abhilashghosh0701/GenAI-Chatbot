### GenAI Chatbot - Context tunning of LLMs to train SAF documents

### This pythong is used to train mistral model(locally hosted) on SAF documents. It uses the Ollama API to interact with the model.
FastAPI is used to create API and ReactJS is used to create web interface.

### Requirements:
 - Ollama API (https://ollama.com/)
 - Python 3.11.13
 - LLM model: mistral

### Install dependencies
```bash
pip install -r requirements.txt
```

### Run the REST API
```bash
uvicorn main:app --reload
```
### Run the web interface
```bash
cd ui
npm install && npm run dev
```