import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import CodeVerification from "./pages/LoginPage/Code_verification";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-verification" element={<CodeVerification />} />
    </Routes>
  );
}
