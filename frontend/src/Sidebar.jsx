import "./Sidebar.css";
import { useContext, useEffect, useState } from "react";
import { MyContext } from "./MyContext";
import {v1 as uuid} from "uuid";

function Sidebar(){
    const {allThreads, setAllThreads, currThreadId, setNewChat, setPrompt, setReply, setCurrThreadId, setPrevChats} = useContext(MyContext);
    const [mobileOpen, setMobileOpen] = useState(false);
    const user = JSON.parse(localStorage.getItem("user")) || {};
const userName = user?.name || "Guest User";

    const getAllThreads = async () =>{
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/thread`);
            const res = await response.json();
            const filteredData = res.map(thread => ({threadId: thread.threadId, title: thread.title}));
            console.log(filteredData);
            setAllThreads(filteredData);
        } catch(err){
            console.log(err);
        }
    };

    useEffect(() => {
        getAllThreads();
    }, []);

    const createNewChat = () =>{
        setNewChat(true);
        setPrompt("");
        setReply("");
        setCurrThreadId(uuid());
        setPrevChats([]);
    }

    const changeThread = async (newThreadId) => {
        setCurrThreadId(newThreadId);

        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/thread/${newThreadId}`);
            const res = await response.json();
            console.log(res);
            setPrevChats(res);
            setNewChat(false);
            setReply("");

        }catch(err){
            console.log(err);
        }
    }

    const deleteThread = async (threadId) =>{
        try{
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/thread/${threadId}`, {
                method: "DELETE"
            });
            const res = await response.json();
            console.log(res);

            // ✅ update UI instantly
            setAllThreads(prev => prev.filter(t => t.threadId !== threadId));

            if(threadId === currThreadId){
                createNewChat();
            }

        }catch(err){
            console.log(err);
        }
    }

    return (
    <>
        <div
            className="mobileMenuBtn"
            onClick={() => setMobileOpen(true)}
        >
            <i className="fa-solid fa-bars"></i>
        </div>

        {
            mobileOpen &&
            <div
                className="sidebarOverlay"
                onClick={() => setMobileOpen(false)}
            />
        }

        <section
            className={`sidebar ${mobileOpen ? "sidebarOpen" : ""}`}
        >
            {/* new chat button */}
            <div className="sidebarTop">
                <div
                    className="closeSidebar"
                    onClick={() => setMobileOpen(false)}
                >
                    <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="brand">
                    <div className="brandLogo">
                        ✦
                    </div>

                    <span>मार्ग AI</span>
                </div>

                <button className="newChatBtn" onClick={createNewChat}>
                    <i className="fa-solid fa-plus"></i>
                    New Chat
                </button>

            </div>

            <div className="recentTitle">
                Recent Chats
            </div>

            {/* history */}
            <ul className="history">
                {
                    allThreads?.map((thread, idx) => (
                        <li key={idx} onClick={() => changeThread(thread.threadId)}
                        className={thread.threadId === currThreadId ? "highlighted" : ""}>
                            
                            {thread.title}
                            <i 
                                className="fa-solid fa-trash-can"
                                onClick={(e) => {
                                    e.stopPropagation(); 
                                    deleteThread(thread.threadId);
                                }}
                            ></i>
                            
                        </li>
                    ))
                }
            </ul>

            {/* sidebar user */}
<div className="sign">
  <div className="signAvatar">
    {userName.charAt(0).toUpperCase()}
  </div>

  <div className="signInfo">
    <h4>{userName}</h4>
    <p>Free Plan</p>
  </div>
</div>
        </section>
    </>
    );
}

export default Sidebar;