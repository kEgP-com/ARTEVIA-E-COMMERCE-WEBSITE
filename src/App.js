import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import CodeVerification from "./pages/LoginPage/Code_verification";
import CartPage from "./pages/MainPage/CartPage";
import OrderPage from "./pages/MainPage/OrderPage";
import AccountPage from "./pages/MainPage/AccountPage";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-verification" element={<CodeVerification />} />
      <Route path="/code-verification" element={<CodeVerification />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/account" element={<AccountPage />} />
    </Routes>
  );
}
