import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

function App() {
    const [messages, setMessages] = useState(() => {
        const savedMessages = localStorage.getItem("messages");
        return savedMessages
            ? JSON.parse(savedMessages)
            : [{ role: "bot", text: "Welcome to Yunex Chat Assistance! Ask me anything." }];
    });
    const [question, setQuestion] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);

    useEffect(() => {
        localStorage.setItem("messages", JSON.stringify(messages));
    }, [messages]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMsg = { role: "user", text: question };
        setMessages((prev) => [...prev, newMsg]);
        setQuestion("");
        setIsStreaming(true);

        const responseMsg = { role: "bot", text: "" };
        setMessages((prev) => [...prev, responseMsg]);

        try {
            const response = await fetch("http://localhost:8000/stream", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ question }),
            });

            const reader = response.body.getReader();
            const decoder = new TextDecoder("utf-8");
            let finalText = "";

            while (true) {
                const { done, value } = await reader.read();
                if (done) break;

                const chunk = decoder.decode(value, { stream: true });
                finalText += chunk;

                setMessages((prev) =>
                    prev.map((msg, i) =>
                        i === prev.length - 1 ? { ...msg, text: finalText } : msg
                    )
                );
            }
        } catch (error) {
            console.error("Streaming failed", error);
        } finally {
            setIsStreaming(false);
        }
    };

    useEffect(() => {
        if (isStreaming) {
            console.log("Reconnecting after reload...");
        }
    }, [isStreaming]);

    return (
        <div style={{ height: "100vh", width: "80%", display: "flex", flexDirection: "column", fontFamily: "Arial", justifyContent: "center" }}>
            <h2 style={{ textAlign: "center", margin: "1rem 0" }}>🧠 Yunex Chat Assistance</h2>
            <div
                style={{
                    flex: 1,
                    border: "1px solid #ccc",
                    padding: "1rem",
                    overflowY: "scroll",
                    backgroundColor: "#f9f9f9",
                }}
            >
                {messages.map((msg, i) => (
                    <div key={i} style={{ marginBottom: "1rem" }}>
                        <strong>{msg.role === "user" ? "🧑 You" : "🤖 YuBot"}:</strong>
                        <ReactMarkdown
                            remarkPlugins={[remarkGfm]}
                            children={msg.text}
                            components={{
                                code({ node, inline, className, children, ...props }) {
                                    const match = /language-(\w+)/.exec(className || "");
                                    return !inline && match ? (
                                        <SyntaxHighlighter
                                            style={oneDark}
                                            language={match[1]}
                                            PreTag="div"
                                            {...props}
                                        >
                                            {String(children).replace(/\n$/, "")}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code
                                            className={className}
                                            style={{ backgroundColor: "#eee", padding: "2px 4px" }}
                                            {...props}
                                        >
                                            {children}
                                        </code>
                                    );
                                },
                            }}
                        />
                    </div>
                ))}
            </div>

            <form
                onSubmit={handleSubmit}
                style={{
                    display: "flex",
                    padding: "1rem",
                    borderTop: "1px solid #ccc",
                    backgroundColor: "#fff",
                }}
            >
                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    style={{ flex: 1, padding: "0.5rem", marginRight: "0.5rem" }}
                    placeholder="Ask something..."
                    disabled={isStreaming}
                />
                <button type="submit" disabled={!question || isStreaming} style={{ padding: "0.5rem" }}>
                    Send
                </button>
            </form>
        </div>
    );
}

export default App;