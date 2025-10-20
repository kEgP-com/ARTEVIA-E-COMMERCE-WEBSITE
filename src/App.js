import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Register from "./pages/LoginPage/Register";
import ForgotPassword from "./pages/LoginPage/ForgotPassword";
import CodeVerification from "./pages/LoginPage/Code_verification"; 

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/Code_verification" element={<CodeVerification />} /> {/* ✅ new route */}
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Router>
  );
}
