import React, { useState, useEffect } from 'react';
import './Compo.css'; 

import ProfileIcon from '../images/images/profile.png';
import CartIcon from '../images/images/cart.png';
import HelpIcon from '../images/images/help.png';
import Logo from '../images/images/logo_clear.png'; // 1. IMPORT YOUR LOGO

function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
  const handleScroll = () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    setIsVisible(false);
    } else {
    setIsVisible(true);
    }
    
    setLastScrollY(currentScrollY <= 0 ? 0 : currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
    window.removeEventListener('scroll', handleScroll);
    };
    }, [lastScrollY]);
    return (
  <header className={`navbar-container ${isVisible ? 'visible' : 'hidden'}`}>
  

  <nav className="navbar">
      <div className="nav-left">

      <div className="logo">
      <img src={Logo} alt="Logo" className="logo-img" />
      </div>
    </div>

      <div className="nav-center">
        <input 
        type="text" 
        className="search-bar" 
        placeholder="Search..."
        />
      </div>

      <div className="nav-right">
        <img src={ProfileIcon} alt="Profile" className="icon-img" />
        <img src={CartIcon} alt="Cart" className="icon-img" />
        <img src={HelpIcon} alt="Help" className="icon-img" />
      </div>
      </nav>

      {/* Your original bottom links navbar */}
      <div className="nav-links-bar">
      <ul className="nav-links">
        <li>HOME</li>
        <li>PRODUCTS</li>
        <li>ABOUT</li>
        <li>ORDERS</li>
        
        <li className="nav-link-dropdown">
        CATEGORIES
      <div className="dropdown-content">
        <a href="#">Illustration & Sketch</a>
        <a href="#">Digital Art</a>
        <a href="#">Sculpture</a>
        <a href="#">Painting</a>
        <a href="#">Handmade Decor</a>
        <a href="#">Mixed Media</a>
        <a href="#">Prints & Posters</a>
        <a href="#">Photography</a>
      </div>
      </li>

      </ul>
      </div>

    </header>
  );
}

export default Navbar;