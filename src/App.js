import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import CodeVerification from "./pages/LoginPage/Code_verification";
import CartPage from "./pages/MainPage/CartPage";
import OrderPage from "./pages/MainPage/OrderPage";
import AccountPage from "./pages/MainPage/AccountPage";
import Homepage from "./pages/MainPage/Homepage";
import Footer from "./components/footer"; 
export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/code-verification" element={<CodeVerification />} />


      <Route path="/homepage" element={<Homepage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/account" element={<AccountPage />} />
      <Route path="/footer" element={<Footer />} /> 
  
    </Routes>
  );
}
