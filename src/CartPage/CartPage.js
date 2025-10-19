import React from "react";
import "./style.css";
import { LinearIndeterminate } from "../LinearIndeterminate/LinearIndeterminate";
import { NavBar } from "../navbar/NavBar";

export const CartPage = () => {
  return (
    <div className="CART-PAGE" data-model-id="37:44">
      <img
        className="background"
        alt="Background"
        src="/images/background.png" // Add proper background image path
      />

      <footer className="FOOTER">
        <p className="copyrightts">© 2025 Appdev | All Rights Reserved</p>

        <div className="group">
          <div className="CONTACTS">Contacts</div>

          <p className="LINKS">
            Katapatan Mutual Homes, Brgy. Banay-Banay, City of Cabuyao, Laguna,
            Philippines 4025
          </p>

          <div className="div">(63) 912 333 3333</div>

          <div className="LINKS-2">info@Appdev.com</div>
        </div>

        <div className="group-2">
          <img
            className="qr-code"
            alt="Qr code"
            src="/images/qr-code.png"  // Added leading slash
          />

          <div className="DOWNLOAD-APP">Download App</div>
        </div>

        <div className="group-3">
          <img
            className="instagram"
            alt="Instagram"
            src="/images/instagram.png"  // Added leading slash
          />

          <img
            className="x"
            alt="X"
            src="/images/twitter.png"  // Added leading slash
          />

          <img
            className="facebook"
            alt="Facebook"
            src="/images/facebook.png"  // Added leading slash
          />

          <div className="FOLLOW-US">Follow us</div>

          <div className="LINKS-3">Facebook</div>

          <div className="LINKS-4">Instagram</div>

          <div className="LINKS-5">Twitter</div>
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

      <img
        className="CART-PANEL"
        alt="Cart PANEL"
        src="images/cart-panel.svg"
      />

      <div className="rectangle" />

      <img
        className="rectangle-2"
        alt="Rectangle"
        src="images/rectangle-17.svg"
      />

      <div className="rectangle-3" />

      <div className="text-wrapper-3">Cash On Delivery</div>

      <img
        className="rectangle-4"
        alt="Rectangle"
        src="images/rectangle-19.svg"
      />

      <img
        className="rectangle-5"
        alt="Rectangle"
        src="images/rectangle-20.svg"
      />

      <div className="text-wrapper-4">Submit</div>

      <img
        className="rectangle-6"
        alt="Rectangle"
        src="images/rectangle-18.svg"
      />

      <button className="button">
        <div className="text-wrapper-5">PURCHASE</div>
      </button>

      <button className="div-wrapper">
        <div className="text-wrapper-5">CANCEL</div>
      </button>

      <button className="button-2">
        <div className="text-wrapper-5">YES</div>
      </button>

      <button className="button-3">
        <div className="text-wrapper-6">NO</div>
      </button>

      <div className="group-5">
        <div className="text-wrapper-7">Total Items:</div>

        <div className="text-wrapper-8">Shipping fee:</div>

        <div className="text-wrapper-9">Voucher</div>

        <p className="total">
          <span className="text-wrapper-10">Total</span>

          <span className="text-wrapper-11">:</span>
        </p>
      </div>

      <div className="text-wrapper-12">Commision:</div>

      <div className="group-6">
        <img
          className="credit-card"
          alt="Credit card"
          src="images/credit-card-1.svg"
        />

        <div className="text-wrapper-13">Payment Methods</div>
      </div>

      <div className="group-7">
        <img
          className="line-2"
          alt="Line"
          src="images/line-8.svg"
        />

        <div className="text-wrapper-14">Address</div>

        <img
          className="credit-card-2"
          alt="Credit card"
          src="images/credit-card-1.svg"
        />
      </div>

      <div className="text-wrapper-15">View all</div>

      <p className="user-blk-lt">
        User - Blk. 13 Lt. 5&nbsp;&nbsp;Phase 2 Mabuhay, Cabuyao Laguna
      </p>

      <img
        className="element"
        alt="Element"
        src="images/1-1@2x.png"
      />

      <div className="group-8">
        <img
          className="element-2"
          alt="Element"
          src="images/4-1@2x.png"
        />

        <div className="group-9">
          <img
            className="line-3"
            alt="Line"
            src="/images/line-9.svg"  // Added leading slash and removed duplicate
          />

          <div className="text-wrapper-16">Message Vendor</div>
        </div>
      </div>

      <img
        className="line-4"
        alt="Line"
        src="images/line-8-2.svg"
      />

      <img
        className="white-modern"
        alt="White modern"
        src="images/white-modern-linktree-background-1@2x.png"
      />

      <div className="merchandise">Merchandise&nbsp;&nbsp;Protection</div>

      <img
        className="gcash"
        alt="Gcash"
        src="images/gcash.png"
      />

      <img
        className="paypal"
        alt="Paypal"
        src="images/paypal.png"
      />

      <img
        className="vector"
        alt="Vector"
        src="images/vector.svg"
      />

      <img
        className="element-3"
        alt="Element"
        src="/images/3-1@2x.png"
      />

      <img
        className="line-5"
        alt="Line"
        src="/images/line-13.svg"
      />

      <img
        className="line-6"
        alt="Line"
        src="/images/line-13.svg"
      />

      <input className="field" placeholder="Enter message" type="number" />

      <div className="text-wrapper-17">Sent: Hello!</div>

      <img
        className="line-7"
        alt="Line"
        src="/images/line-12.svg"  // Changed from hardcoded URL to relative path
      />

      <p className="recipient-name-carl">
        <span className="text-wrapper-10">Recipient Name</span>

        <span className="text-wrapper-11">: Carl M.&nbsp;&nbsp;Rodriqguez</span>
      </p>

      <p className="artist-alex-j-javier">
        <span className="text-wrapper-10">Artist</span>

        <span className="text-wrapper-11">
          : Alex J, Javier &amp; Maria S. Sanica
        </span>
      </p>

      <NavBar
        className="nav-bar-instance"
        icons="/images/icons-1.svg"
        img="/images/nav-division-3.svg"
        navDivision="/images/nav-division-3.svg"
        navDivisionClassName="nav-bar-2"
        property1="default"
        text=""
      />
    </div>
  );
};
