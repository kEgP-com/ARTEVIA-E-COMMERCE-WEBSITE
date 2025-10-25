import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import App from "./App"; // Customer App
import AdminApp from "./AdminApp"; // Admin App

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Customer Routes */}
        <Route path="/customer/*" element={<App />} />

        {/* Admin Routes */}
        <Route path="/admin/*" element={<AdminApp />} />

        {/* Redirect everything else */}
        <Route path="*" element={<Navigate to="/customer" />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
