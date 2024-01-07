import "./CSS/Footer.css";
import facebook from "./Assets/facebook_logo.png";
import instagram from "./Assets/instagram_logo.png";
import pinterest from "./Assets/pinterest_logo.png";
import twitter from "./Assets/twitter_logo.png";
import method_payment from "./Assets/Cart_payment.png";
import method_applepay from "./Assets/Method_ApplePay.png";
import method_discover from "./Assets/Method_Discover.png";
import method_mastercard from "./Assets/Method_Mastercard.png";
import method_visa from "./Assets/Method_Visa.png";
import logo from "./Assets/Logo.png";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Subscribe_Base">
        <div className="Subscribe_information">
          <h2 class="title">Subscribe our Newsletter</h2>
          <p className="Color_Gray">
            be updated to our Ecobazaar for free and promotions
          </p>
        </div>
        <div className="Email_Social">
          <div className="Subscribe_Email">
            <input
              type="text"
              className="Subscribe_input"
              placeholder="Your email address"
            />
            <button className="Subscribe_btn">Subscribe</button>
          </div>
          <div className="Social_Media">
            <img src={facebook} className="Picture" alt="facebook Logo" />
            <img src={twitter} className="Picture" alt="twitter logo" />
            <img src={pinterest} className="Picture" alt="pinterest logo" />
            <img src={instagram} className="Picture" alt="instagram logo" />
          </div>
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
              <p>My Account</p>
              <p>Order History</p>
              <p>Shopping Cart</p>
              <p>Wishlist</p>
            </div>
          </div>
          <div>
            <div>
              <p>Helps</p>
            </div>
            <div className="Color_Gray">
              <p>Contact</p>
              <p>Faqs</p>
              <p>Terms & Condition</p>
              <p>Privacy Policy</p>
            </div>
          </div>
          <div>
            <div>
              <p>Proxy</p>
            </div>
            <div className="Color_Gray">
              <p>About</p>
              <p>Shop</p>
              <p>Product</p>
              <p>Track Order</p>
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
          <p>Ecobazaar eCommerce © 2021. All Rights Reserved</p>
        </div>
        <div>
          <img src={method_payment} class="Picture" alt="Cart Logo Payment" />
          <img src={method_visa} class="Picture" alt="Visa Logo Payment" />
          <img
            src={method_discover}
            class="Picture"
            alt="Discover Logo Payment"
          />
          <img
            src={method_mastercard}
            class="Picture"
            alt="Mastercard Logo Payment"
          />
          <img
            src={method_applepay}
            class="Picture"
            alt="ApplyPay Logo Payment"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
