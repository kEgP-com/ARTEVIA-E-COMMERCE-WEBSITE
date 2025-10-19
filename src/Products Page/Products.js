import React from "react";
import { LinearIndeterminate } from "./LinearIndeterminate";
import { NavBar } from "./NavBar";
import { Product } from "./Product";
import { SearchBrowser } from "./SearchBrowser";
import facebook from "./facebook.png";
import instagram from "./instagram.png";
import qrCode from "./qr-code.png";
import "./style.css";
import wallpaper from "./wallpaper.png";
import x from "./x.png";

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

        <LinearIndeterminate
          buildingBlocksTrackShapeClassName="linear-indeterminate-progress-indicator"
          className="line"
          step="zero"
          thickness="four-dp"
          type="flat"
        />
        <LinearIndeterminate
          buildingBlocksTrackShapeClassName="linear-indeterminate-progress-indicator"
          className="linear-indeterminate-instance"
          step="zero"
          thickness="four-dp"
          type="flat"
        />
        <LinearIndeterminate
          buildingBlocksTrackShapeClassName="linear-indeterminate-progress-indicator"
          className="linear-indeterminate-progress-indicator-instance"
          step="zero"
          thickness="four-dp"
          type="flat"
        />
      </footer>

      <div className="text-wrapper-4">PRODUCTS/CATEGORIES</div>

      <div className="group-5">
        <div className="group-6">
          <Product
            className="product-instance"
            property1="default"
            squareWithAnImage="square-with-an-image-icon-3.png"
          />
          <Product
            className="product-2"
            property1="default"
            squareWithAnImage="square-with-an-image-icon-4.png"
          />
          <Product
            className="product-3"
            property1="default"
            squareWithAnImage="square-with-an-image-icon-5.png"
          />
        </div>

        <div className="group-6">
          <Product
            className="product-instance"
            property1="default"
            squareWithAnImage="square-with-an-image-icon-6.png"
          />
          <Product
            className="product-4"
            property1="default"
            squareWithAnImage="square-with-an-image-icon-7.png"
          />
          <Product
            className="product-5"
            property1="default"
            squareWithAnImage="square-with-an-image-icon-8.png"
          />
        </div>
      </div>

      <SearchBrowser className="search-browser-product" />
      <NavBar
        HOMEHRBR="HOMEHRBR-logo3-1-2.png"
        TEXTHomeClassName="nav-bar-3"
        TEXTText="ORDERS"
        className="nav-bar-instance"
        icons="icons-2.svg"
        img="nav-division-3.svg"
        navDivision="nav-division-2.svg"
        navDivisionClassName="nav-bar-2"
        navDivisionClassNameOverride="nav-bar-2"
        property1="default"
        search="search-2.png"
        text=""
      />
    </div>
  );
};
