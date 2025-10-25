import React, { useState } from "react";
import "../../css/login.css";
import logo from "../../images/logo/logo.png";
import wavebg from "../../images/images/login_bg.png"; 
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; 

export default function Login() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const navigate = useNavigate();

  return (
    <div className="view" style={{ backgroundImage: `url(${wavebg})` }}>
      <div className="column">
        {/* Logo */}
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        {/* Email/Username */}
        <input
          placeholder="Enter email or username"
          value={input1}
          onChange={(event) => setInput1(event.target.value)}
          className="input"
        />

        {/* Password with eye toggle */}
        <div className="password-container">
          <input
            placeholder="Password"
            value={input2}
            onChange={(event) => setInput2(event.target.value)}
            className="input2 password-input"
            type={showPassword ? "text" : "password"}
          />
          <span
            className="eye-icon"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        {/* Login Button */}
        <button className="button" onClick={() => alert("Pressed!")}>
          <span className="text2">LOGIN</span>
        </button>

        {/* Sign Up link */}
        <span className="text3">
          <span className="text3-label">Don’t have an account?</span>{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/customer/register")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Sign Up Now!
          </span>
        </span>

        {/* Forgot Password */}
        <Link to="/customer/code-verification" className="text4">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}
