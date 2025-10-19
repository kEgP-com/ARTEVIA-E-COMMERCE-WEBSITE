import React from "react";

export const Products = () => {
  return (
    <div className="PRODUCTS">
      <img className="wallpaper" alt="Wallpaper" src={wallpaper} />

      <footer className="FOOTER">
        <p className="copyrightts">© 2025 Appdev | All Rights Reserved</p>

        <div className="group">
          <div className="CONTACTS">Contacts</div>

          <p className="LINKS">
            Katapatan Mutual Homes, Brgy. Banay-Banay, City of Cabuyao, Laguna,
            Philippines 4025
          </p>

          <div className="LINKS-2">(63) 912 333 3333</div>

          <div className="LINKS-3">info@Appdev.com</div>
        </div>

        <div className="group-2">
          <img className="qr-code" alt="Qr code" src={qrCode} />

          <div className="DOWNLOAD-APP">Download App</div>
        </div>

        <div className="group-3">
          <img className="instagram" alt="Instagram" src={instagram} />

          <img className="x" alt="X" src={x} />

          <img className="facebook" alt="Facebook" src={facebook} />

          <div className="FOLLOW-US">Follow us</div>

          <div className="LINKS-4">Facebook</div>

          <div className="LINKS-5">Instagram</div>

          <div className="LINKS-6">Twitter</div>
        </div>

        <div className="group-4">
          <div className="ABOUT-US">About us</div>

          <p className="ABOUT-US-TEXT">
            Launched to support artists worldwide, our platform was created to
            make discovering and owning art easy, secure, and inspiring. By
            connecting creators with customers, we offer a seamless way to shop
            original pieces with confidence and convenience.
          </p>
        </div>

        
      </footer>

    
     
    </div>
  );
};

export default Products;
