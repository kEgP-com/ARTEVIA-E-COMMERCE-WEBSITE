import React from 'react';
import './Compo.css'; 

import ProfileIcon from '../images/images/profile.png';
import CartIcon from '../images/images/cart.png';
import HelpIcon from '../images/images/help.png';

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <div className="logo">Untitled</div>
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

      <div className="nav-links-bar">
        <ul className="nav-links">
          <li>HOME</li>
          <li>PRODUCTS</li>
          <li>ABOUT</li>
          <li>ORDERS</li>
          <li>CATEGORIES</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;