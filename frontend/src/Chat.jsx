import "./Chat.css";
import { useContext, useState, useEffect } from "react";
import { MyContext } from "./MyContext";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

function Chat() {

    const {
        newChat,
        prevChats,
        reply,
        setPrompt
    } = useContext(MyContext);
    const [latestReply, setLatestReply] = useState("");

    useEffect(() => {
        if (!reply) {
            setLatestReply("");
            return;
        }

        const content = reply.split(" ");
        let idx = 0;

        const interval = setInterval(() => {
            setLatestReply(content.slice(0, idx + 1).join(" "));
            idx++;

            if (idx >= content.length) clearInterval(interval);
        }, 40);

        return () => clearInterval(interval);

    }, [reply]);
    const handleSuggestion = (text) => {
    setPrompt(text);

    const input = document.querySelector(".chatInput input");

    if(input){
        input.focus();
    }
};

    return (
        <>
            {newChat && (
                <div className="welcome">

                    <div className="welcomeIcon">
                        ✦
                    </div>

                    <h1>How can I help you today?</h1>

                    <p>
                        Ask me anything about studying, coding, or productivity.
                    </p>

                    <div className="suggestions">

                        <div
                            className="suggestionCard"
                            onClick={() => handleSuggestion("Summarize my notes on photosynthesis")}
                        >
                            Summarize my notes on photosynthesis
                        </div>
                        <div
                            className="suggestionCard"
                            onClick={() => handleSuggestion("Explain recursion with examples")}
                        >
                            Explain recursion with examples
                        </div>

                        <div
                            className="suggestionCard"
                            onClick={() => handleSuggestion("Create a study plan for my exams")}
                        >
                            Create a study plan for my exams
                        </div>

                        <div
                            className="suggestionCard"
                            onClick={() => handleSuggestion("Generate project ideas for my portfolio")}
                        >
                            Generate project ideas for my portfolio
                        </div>
                    </div>

                </div>
            )}

            <div className="chats">

                {prevChats?.slice(0, -1).map((chat, idx) => (
                    <div
                        key={idx}
                        className={chat.role === "user" ? "userDiv" : "gptDiv"}
                    >
                        {chat.role === "user" ? (
                            <p className="userMessage">{chat.content}</p>
                        ) : (
                            <div className="gptMessage">
                                <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                    {chat.content}
                                </ReactMarkdown>
                            </div>
                        )}
                    </div>
                ))}

                {/* Typing animation */}
                {prevChats.length > 0 && (
                    <div className="gptDiv" key="typing">
                        <div className="gptMessage">
                            <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
                                {latestReply || prevChats?.[prevChats.length - 1]?.content}
                            </ReactMarkdown>
                        </div>
                    </div>
                )}

            </div>
        </>
    );
}

export default Chat;