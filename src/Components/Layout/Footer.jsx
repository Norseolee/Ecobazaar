import "../CSS/Footer.css";
import { Link } from "react-router-dom";

import facebook from "../Assets/facebook_logo.png";
import instagram from "../Assets/instagram_logo.png";
import pinterest from "../Assets/pinterest_logo.png";
import twitter from "../Assets/twitter_logo.png";
import method_payment from "../Assets/Cart_payment.png";
import method_applepay from "../Assets/Method_ApplePay.png";
import method_discover from "../Assets/Method_Discover.png";
import method_mastercard from "../Assets/Method_Mastercard.png";
import method_visa from "../Assets/Method_Visa.png";
import logo from "../Assets/Logo.png";

function Footer() {
  return (
    <div className="Footer">
      <div className="Subscribe_Base">
        <div className="Subscribe_information">
          <h2 className="title">Subscribe our Newsletter</h2>
          <p className="Color_Gray">
            be updated to our Ecobazaar for free and promotions
          </p>
        </div>

        <div className="Subscribe_Email">
          <input
            type="text"
            className="Subscribe_input"
            placeholder="Your email address"
          />
          <button className="Subscribe_btn">Subscribe</button>
        </div>
        <div className="Social_Media">
          <a href="https://www.facebook.com/" target="_blank">
            <img src={facebook} className="Picture" alt="facebook Logo" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img src={twitter} className="Picture" alt="twitter logo" />
          </a>
          <a href="https://www.pinterest.ph/" target="_blank">
            <img src={pinterest} className="Picture" alt="pinterest logo" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src={instagram} className="Picture" alt="instagram logo" />
          </a>
        </div>
      </div>
      <div className="Footer_Base">
        <div className="Ecobazaar_Information">
          <div className="Logo">
            <img src={logo} className="Picture" alt="" />
            <h2>Ecobazaar</h2>
          </div>
          <div className="Color_Gray">
            <p>Mordsafkasdkf aksdfjasd fkaldjs</p>
          </div>
          <div>
            <p>
              (219) 555-0114 <span className="Color_Gray">or</span>{" "}
              Ecobazaar@gmail.com
            </p>
          </div>
        </div>
        <div className="Footer_links">
          <div>
            <div>
              <p>My Account</p>
            </div>
            <div className="Color_Gray">
              <Link to="/user">
                <p>My Account</p>
              </Link>
              <Link to="order-history">
                <p>Order History</p>
              </Link>
              <Link to="/shopping-cart">
                <p>Shopping Cart</p>
              </Link>
              <Link to="wishlist">
                <p>Wishlist</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p>Helps</p>
            </div>
            <div className="Color_Gray">
              <Link to="/contact">
                <p>Contact</p>
              </Link>
              <Link to="/FAQ">
                <p>Faqs</p>
              </Link>
              <Link to="/">
                <p>Terms & Condition</p>
              </Link>
              <Link to="/">
                <p>Privacy Policy</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p>Proxy</p>
            </div>
            <div className="Color_Gray">
              <Link to="/about">
                <p>About</p>
              </Link>
              <Link to="/shop">
                <p>Shop</p>
              </Link>
              <Link to="/product">
                <p>Product</p>
              </Link>
              <Link to="/track-order">
                <p>Track Order</p>
              </Link>
            </div>
          </div>
          <div>
            <div>
              <p>Categories</p>
            </div>
            <div className="Color_Gray">
              <p>Fruits & Vegetables</p>
              <p>Meat & Fish</p>
              <p>Bread & Bakery</p>
              <p>Beauty & Health</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Divider_Horizontal"></div>
      <div className="Footer_Bottom">
        <div>
          <p className="Color_Gray">
            Ecobazaar eCommerce © 2021. All Rights Reserved
          </p>
        </div>
        <div>
          <img
            src={method_payment}
            className="Picture"
            alt="Cart Logo Payment"
          />
          <img src={method_visa} className="Picture" alt="Visa Logo Payment" />
          <img
            src={method_discover}
            className="Picture"
            alt="Discover Logo Payment"
          />
          <img
            src={method_mastercard}
            className="Picture"
            alt="Mastercard Logo Payment"
          />
          <img
            src={method_applepay}
            className="Picture"
            alt="ApplyPay Logo Payment"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
