import React, { useState } from "react";
import { FaUserCircle, FaCog } from "react-icons/fa";
import wavebg from "../../images/images/wavebg.png";
import logo from "../../images/logo/logo.png";
import "../../css/Admin.css";

const DashboardPage = () => {
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleSettings = () => {
    setShowSettings(!showSettings);
    setShowProfile(false);
  };

  const toggleProfile = () => {
    setShowProfile(!showProfile);
    setShowSettings(false);
  };

  return (
    <div
    className="dashboard-root"
    style={{
        backgroundImage: `url(${wavebg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
    }}
    >


      {/* HEADER */}
      <header className="dashboard-header">
        <div className="brand">
          <img src={logo} alt="logo" className="brand-logo" />
        </div>

        <nav className="dashboard-nav">
          <button className="nav-item">DASHBOARD</button>
          <button className="nav-item active">USERS</button>
          <button className="nav-item">ARTS</button>
          <button className="nav-item">ARTISTS</button>
          <button className="nav-item">ORDERS</button>
          <button className="nav-item">MESSAGES</button>
        </nav>

        {/* ICONS */}
        <div className="icon-section">
          <FaCog className="icon-btn" onClick={toggleSettings} />
          <FaUserCircle className="icon-btn" onClick={toggleProfile} />

          {/* SETTINGS MENU */}
          {showSettings && (
            <div className="dropdown-menu">
              <button>Account Settings</button>
              <button>Preferences</button>
              <button>Logout</button>
            </div>
          )}

          {/* PROFILE MENU */}
          {showProfile && (
            <div className="dropdown-menu">
              <button>View Profile</button>
              <button>Edit Profile</button>
            </div>
          )}
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        <h1>Welcome Admin!</h1>
        <p>
          Monitor your users, products, and activity all in one place.
        </p>

        <div className="stats-container">
          <div className="stat-card">
            <h3>Users</h3>
            <p>120</p>
          </div>
          <div className="stat-card">
            <h3>Ordersgit </h3>
            <p>48</p>
          </div>
          <div className="stat-card">
            <h3>Messages</h3>
            <p>32</p>
          </div>
          <div className="stat-card">
            <h3>Sales</h3>
            <p>₱45,200</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
