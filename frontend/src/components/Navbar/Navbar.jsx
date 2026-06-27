import "./Navbar.css";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="chatnavbar">
      <div className="logo">
        <div className="logoIcon">✦</div>
        <h2>मार्ग AI</h2>
      </div>

      <ul className={`navLinks ${menuOpen ? "active" : ""}`}>
        <li><a href="#features">Features</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#usecases">Use Cases</a></li>
        <li><a href="#footer">Help Center</a></li>

        {/* Mobile auth buttons */}
        <li className="mobileCTA">
          {!isLoggedIn ? (
            <div className="mobileAuthBtns">
              <Link to="/signup">
                <button className="mobileStartBtn">Sign Up</button>
              </Link>
            </div>
          ) : (
            <button className="mobileStartBtn" onClick={handleLogout}>
              Logout
            </button>
          )}
        </li>
      </ul>

      <div className="navRight">
        

        {!isLoggedIn ? (
          <div className="desktopAuthBtns">

            <Link to="/signup" className="startLink">
              <button className="startBtn">Sign Up</button>
            </Link>
          </div>
        ) : (
          <button className="startBtn" onClick={handleLogout}>
            Logout
          </button>
        )}

        <button
          className="menuBtn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;