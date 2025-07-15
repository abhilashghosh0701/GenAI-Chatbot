import { useState } from "react";

function App() {
    const [messages, setMessages] = useState([]);
    const [question, setQuestion] = useState("");
    const [isStreaming, setIsStreaming] = useState(false);

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

                const chunk = decoder.decode(value);
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

    return (
        <div style={{ padding: "2rem", fontFamily: "Arial" }}>
            <h2>🧠 Ollama RAG Chat</h2>
            <div
                style={{
                    border: "1px solid #ccc",
                    padding: "1rem",
                    height: "400px",
                    overflowY: "scroll",
                    marginBottom: "1rem",
                }}
            >
                {messages.map((msg, i) => (
                    <div key={i} style={{ marginBottom: "1rem" }}>
                        <strong>{msg.role === "user" ? "🧑 You" : "🤖 Bot"}:</strong>
                        <p>{msg.text}</p>
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit}>
                <input
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    style={{ width: "80%", padding: "0.5rem" }}
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
