import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Login from './pages/LoginPage/Login';
import Register from './pages/LoginPage/Register';
import ForgotPassword from './pages/LoginPage/ForgotPassword';

// import DashboardPage from '../pages/AdminPage/Dashboard_Admin';
import AdminUsers from './pages/AdminPage/Admin_users';
import DashboardPage from './pages/AdminPage/Dashboard_Admin';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DashboardPage />
  </React.StrictMode>
);
