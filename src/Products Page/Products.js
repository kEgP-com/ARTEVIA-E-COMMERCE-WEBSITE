import React from "react";
import facebook from "../images/image/facebook.png";
import instagram from "../images/image/instagram.png";
import qrCode from "../images/image/qrcode.png"; 
import wallpaper from "../images/image/wavebg.png"; 
import x from "../images/image/twitter.png"; 
import cart from "../images/image/cart.png";
import "./Products.css"; 

export const Products = () => {
const categories = [
  {
    title: "Digital Art",
    description: "Digital creations and graphic design works"
  },
  {
    title: "Sketch Art",
    description: "Traditional and modern sketch artworks"
  },
  {
    title: "Homemade Decor",
    description: "Handcrafted decorative items for your home"
  },
  {
    title: "Painting",
    description: "Various painting styles and techniques"
  },
  {
    title: "Sculpture",
    description: "Three-dimensional artistic creations"
  }
];

  return (
    <div className="PRODUCTS">
      <img className="wallpaper" alt="Wallpaper" src={wallpaper} />

      {/* Main Content Area */}
      <div className="main-content-area">
        <div className="text-wrapper-4">PRODUCTS/CATEGORIES</div>
        
        {/* Search Bar */}
        <div className="search-container">
          <div className="search-bar">
            <img 
              className="search-icon" 
              src="https://img.icons8.com/?size=100&id=131&format=png&color=000000" 
              alt="Search" 
            />
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search"
            />
          </div>
          <img className="cart-icon" alt="Cart" src={cart} />
        </div>

        {/* Categories Grid */}
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-title">{category.title}</div>
              <div className="category-description">{category.description}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="FOOTER">
        <p className="copyrightts">© 2025 Appdev | All Rights Reserved</p>

        {/* Download App - LEFT */}
        <div className="group-2">
          <img className="qr-code" alt="Qr code" src={qrCode} />
          <div className="DOWNLOAD-APP">Download App</div>
        </div>

        {/* About Us - CENTER LEFT */}
        <div className="group-4">
          <div className="ABOUT-US">About us</div>
          <p className="ABOUT-US-TEXT">
            Launched to support artists worldwide, our platform was created to
            make discovering and owning art easy, secure, and inspiring. By
            connecting creators with customers, we offer a seamless way to shop
            original pieces with confidence and convenience.
          </p>
        </div>

        {/* Follow Us - CENTER RIGHT */}
        <div className="group-3">
          <div className="FOLLOW-US">Follow us</div>
          <div className="social-item">
            <img className="x" alt="X" src={x} />
            <div className="LINKS-6">Twitter</div>
          </div>
          <div className="social-item">
            <img className="instagram" alt="Instagram" src={instagram} />
            <div className="LINKS-5">Instagram</div>
          </div>
          <div className="social-item">
            <img className="facebook" alt="Facebook" src={facebook} />
            <div className="LINKS-4">Facebook</div>
          </div>
        </div>

        {/* Contacts - RIGHT */}
        <div className="group">
          <div className="CONTACTS">Contacts</div>
          <p className="LINKS">
            Katapatan Mutual Homes, Brgy. Banay-Banay, City of Cabuyao, Laguna,
            Philippines 4025
          </p>
          <div className="LINKS-2">(63) 912 333 3333</div>
          <div className="LINKS-3">info@Appdev.com</div>
        </div>
      </footer>
    </div>
  );
};

export default Products;