import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiMail, FiLock, FiArrowRight } from "react-icons/fi";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));
      navigate("/workspace");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo-row">
          <div className="login-logo-icon">✦</div>
          <h1>मार्ग AI</h1>
        </div>

        {/* Heading */}
        <h2>Welcome back</h2>
        <p className="login-subtitle">
          Sign in to continue your learning journey
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Email */}
          <div className="login-field">
            <label>Email</label>
            <div className="login-input-wrap">
              <FiMail className="login-input-icon" />
              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="login-field">
            <div className="login-label-row">
              <label>Password</label>
            </div>

            <div className="login-input-wrap">
              <FiLock className="login-input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Sign In */}
          <button type="submit" className="login-sign-btn">
            <span>Sign In</span>
            <FiArrowRight />
          </button>
        </form>

        

        {/* Bottom */}
        <div className="login-bottom-text">
          Don’t have an account? <Link to="/signup">Sign up</Link>
        </div>
      </div>

      {/* Back Home */}
      <div className="login-back-home">
        <Link to="/">← Back to home</Link>
      </div>
    </div>
  );
}

export default Login;