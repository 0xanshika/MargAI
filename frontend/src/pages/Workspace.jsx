import Sidebar from "../Sidebar";
import ChatWindow from "../ChatWindow";
import "./Workspace.css";

function Workspace() {
  return (
    <div className="workspace">
      <Sidebar />
      <ChatWindow />
    </div>
  );
}

export default Workspace;