import React, { useState } from "react";
import "../../css/Register.css";
import wavebg from "../../images/images/login_bg.png";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa"; // ✅ Import circle icons

export default function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSignUp = () => {
    if (!agreed) {
      alert("You must agree to the Terms of Service and Privacy Policy!");
      return;
    }
    alert("Sign up clicked!");
  };

  return (
    <div className="contain">
      {/* Inject important inline styles */}
      <style>{`
        .checkmark {
          cursor: pointer !important;
          transition: transform 0.2s ease-in-out !important;
        }
        .checkmark:hover {
          transform: scale(1.1) !important;
        }
      `}</style>

      <div className="view" style={{ backgroundImage: `url(${wavebg})` }}>
        <div className="column">
          {/* Header */}
          <div className="column2">
            <span className="text">Create an account</span>
            <span className="text7">Enter your email to sign up!</span>
          </div>

          {/* Input fields */}
          <input
            placeholder="email@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="input"
          />
          <input
            placeholder="enter password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            className="input2"
          />
          <input
            placeholder="confirm password"
            type="password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="input3"
          />

          {/* Sign-up button */}
          <button className="button" onClick={handleSignUp}>
            <span className="text3">Sign up with email</span>
          </button>

          {/* Divider */}
          <div className="row-view">
            <div className="box"></div>
            <span className="text4">or continue with</span>
            <div className="box"></div>
          </div>

          {/* Google button */}
          <button
            className="row-view2"
            onClick={() => alert("Continue with Google clicked!")}
          >
            <img
              src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/F1ShiVRMEg/9qn8hf2e_expires_30_days.png"
              className="image"
              alt="Google logo"
            />
            <span className="text6">Google</span>
          </button>


          <div className="column3">
            <div className="terms-container" onClick={() => setAgreed(!agreed)}>
              {agreed ? (
                <FaCheckCircle
                  size={50}
                  color="#000"
                  className="checkmark"
                />
              ) : (
                <FaRegCircle
                  size={50}
                  color="#555"
                  className="checkmark"
                />
              )}
              <span className="text5">
                By clicking continue, you agree to our{" "}
                <a href="#">Terms of Service</a> and{" "}
                <br />
                <a href="#">Privacy Policy</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
