import React, { useState } from "react";
import "./index.css";
import logo from "../images/logo/logo.png";
import wavebg from "../images/images/login_bg.png"; // ✅ import background image
import { useNavigate, Link } from "react-router-dom"; // ✅ Import Link

export default function Login() {
  const [input1, onChangeInput1] = useState("");
  const [input2, onChangeInput2] = useState("");
  const navigate = useNavigate();

  return (
    <div className="view" style={{ backgroundImage: `url(${wavebg})` }}>
      <div className="column">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo-image" />
        </div>

        <input
          placeholder="Enter email or username"
          value={input1}
          onChange={(event) => onChangeInput1(event.target.value)}
          className="input"
        />

        <input
          placeholder="Password"
          value={input2}
          onChange={(event) => onChangeInput2(event.target.value)}
          className="input2"
          type="password"
        />

        <button className="button" onClick={() => alert("Pressed!")}>
          <span className="text2">LOGIN</span>
        </button>

        <span className="text3">
          <span className="text3-label">Don’t have an account?</span>{" "}
          <span
            className="signup-link"
            onClick={() => navigate("/register")}
            style={{ cursor: "pointer", textDecoration: "underline" }}
          >
            Sign Up Now!
          </span>
        </span>

        {/* ✅ Forgot Password is now a proper link */}
        <Link to="/Code_verification" className="text4">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
}
