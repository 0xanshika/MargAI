import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { v1 as uuid } from "uuid";

import { MyContext } from "./MyContext";

import LandingPage from "./pages/LandingPage";
import Workspace from "./pages/Workspace";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState("");
  const [currThreadId, setCurrThreadId] = useState(uuid());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);

  const providerValues = {
    prompt,
    setPrompt,

    reply,
    setReply,

    currThreadId,
    setCurrThreadId,

    prevChats,
    setPrevChats,

    newChat,
    setNewChat,

    allThreads,
    setAllThreads,
  };

  return (
    <MyContext.Provider value={providerValues}>
      <Routes>
        <Route path="/" element={<LandingPage />} />

        <Route
          path="/workspace"
          element={
              <ProtectedRoute>
                  <Workspace />
              </ProtectedRoute>
          }
      />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </MyContext.Provider>
  );
}

export default App;