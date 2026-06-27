import "./ChatWindow.css";
import Chat from "./Chat";
import { MyContext } from "./MyContext";
import { useContext, useState ,useEffect } from "react";
import {ScaleLoader} from "react-spinners";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
function ChatWindow(){
    const {
        prompt,
        setPrompt,
        reply,
        setReply,
        currThreadId,
        prevChats,
        setPrevChats, 
        setNewChat
    } = useContext(MyContext);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef();
    const navigate = useNavigate();

    const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
    };

    const getReply = async ()=>{
        setLoading(true);
        setNewChat(false);
        console.log("message", prompt, "threadId", currThreadId )
        const options = {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                message: prompt,
                threadId: currThreadId
            })
        }
        try{
            const response = await fetch(`{import.meta.env.VITE_API_URL}/api/chat`, options);
            const res = await response.json();
            console.log(res);
            setReply(res.reply);

        }catch(err){
            console.log(err);
        }
        setLoading(false);
    }

    // Append newchat to prevois chat thats whay we use react use effect
    useEffect(() => {
        if (reply) {
            setPrevChats(prev => [
                ...prev,
                { role: "user", content: prompt },
                { role: "assistant", content: reply }
            ]);
        }

        setPrompt("");
    }, [reply]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return(
        
        <div className="chatWindow">
            <div className="navbar">
  <div className="navLeft">
    <div className="navLogo">✦</div>
    <span>मार्ग AI</span>
  </div>

  <div className="navRight">
    <button
      className="navIconBtn"
      onClick={() => navigate("/")}
      title="Home"
    >
      <i className="fa-solid fa-house"></i>
    </button>

    <div
      className="userIconDiv"
      ref={dropdownRef}
      onClick={() => setIsOpen((prev) => !prev)}
    >
      <button className="navIconBtn" title="Settings">
        <i className="fa-solid fa-gear"></i>
      </button>

      {isOpen && (
        <div className="dropdown">
          <button className="dropDownItem logout" onClick={handleLogout}>
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
            LogOut
          </button>
        </div>
      )}
    </div>
  </div>
</div>
            <Chat />
            <div className="loaderContainer">
                {loading && (
                    <ScaleLoader color="#7c5cff" loading={loading} />
                )}
            </div>

            <div className="chatInput">
                <div className="inputBox">
                    <input placeholder="Ask Anything"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter'? getReply() : ''}
                    ></input>
                    <div id="submit" onClick={getReply}> <i className="fa-solid fa-paper-plane"></i></div>
                </div>
                
                <p className="info">MargAI can make mistakes. Check important info. See Cookie Preferences.</p>

            </div>
        </div>
       
    )
}

export default ChatWindow;