import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard_Admin from "./pages/AdminPage/Dashboard_Admin";
import ArtsPage from "./pages/AdminPage/ArtsPage";
import Admin_users from "./pages/AdminPage/Admin_users";
import Admin_orders from "./pages/AdminPage/Admin_orders";
import Admin_messages from "./pages/AdminPage/Admin_messages";
import ArtistsPage from "./pages/AdminPage/ArtistsPage";
import LoginPage from "./pages/AdminPage/LoginPage";
import ForgotPassword from "./pages/AdminPage/ForgotPassword";

import ProtectedRoute from "./components/ProtectedRoute"; // ✅ import guard

export default function AdminApp() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />

      {/* Protected routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard_Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/arts"
        element={
          <ProtectedRoute>
            <ArtsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/users"
        element={
          <ProtectedRoute>
            <Admin_users />
          </ProtectedRoute>
        }
      />
      <Route
        path="/artists"
        element={
          <ProtectedRoute>
            <ArtistsPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <ProtectedRoute>
            <Admin_orders />
          </ProtectedRoute>
        }
      />
      <Route
        path="/messages"
        element={
          <ProtectedRoute>
            <Admin_messages />
          </ProtectedRoute>
        }
      />

      {/* Default route */}
      <Route path="*" element={<Navigate to="/admin/login" />} />
    </Routes>
  );
}
