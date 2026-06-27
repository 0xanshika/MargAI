import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiUser, FiMail, FiLock, FiArrowRight } from "react-icons/fi";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
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
      const response = await fetch("http://localhost:8080/api/auth/signup", {
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
        <h2>Create your account</h2>
        <p className="login-subtitle">
          Start your smarter learning journey today
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="login-form">
          {/* Name */}
          <div className="login-field">
            <label>Full Name</label>
            <div className="login-input-wrap">
              <FiUser className="login-input-icon" />
              <input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>

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
            <label>Password</label>
            <div className="login-input-wrap">
              <FiLock className="login-input-icon" />
              <input
                type="password"
                name="password"
                placeholder="Create a strong password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="login-sign-btn">
            <span>Create Account</span>
            <FiArrowRight />
          </button>
        </form>

        {/* Bottom */}
        <div className="login-bottom-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </div>
      </div>
    </div>
  );
}

export default Signup;