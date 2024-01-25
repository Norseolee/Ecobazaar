import MapPin from "../Assets/MapPin.png";
import Logo from "../Assets/Logo.png";
import Call from "../Assets/PhoneCall 1.png";
import Heart from "../Assets/Heart.png";
import Cart from "../Assets/Cart.png";

import { Link } from "react-router-dom";
import "../CSS/Navigation.css";

const Navigations = () => {
  return (
    <div style={{ width: "100%" }}>
      <div className="Navigation Top">
        <div className="Location_Navigation">
          <img
            src={MapPin}
            alt="Map Pin Logo"
            className="Small_Picture Black"
          />
          <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
        </div>
        <div className="Setting">
          <div>
            <p>Eng</p>
          </div>
          <div>
            <p>USD</p>
          </div>
          <div className="Divider_Vertical_Small"></div>
          <div>
            <Link to="/sign-in">
              <p>Sign In/ Sign Up </p>
            </Link>
          </div>
        </div>
      </div>
      <div className="Divider_Horizontal"></div>

      <div className="Navigation Middle">
        <div className="Logo">
          <img src={Logo} className="Picture" alt="Logo" />
          <h1 className="Logo_name">Ecobazaar</h1>
        </div>
        <div className="Search_Base">
          <input className="input_search" type="text" placeholder="Search" />
          <button className="search_btn">Search</button>
        </div>
        <div className="Wishlist_Cart">
          <div>
            <img src={Heart} className="Black Picture" alt="Heart Logo" />
          </div>
          <div className="Divider_Vertical"></div>
          <div>
            <img src={Cart} className="Black Picture" alt="Cart Logo" />
          </div>
        </div>
      </div>
      <div className="Navigation Bottom">
        <div className="Category">
          <Link to="/" className="Nav_link">
            <p>Home</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none">
              <path
                d="M1.33329 1.66669L5.99996 6.33335L10.6666 1.66669"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link to="/shop" className="Nav_link">
            <p>Shop</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none">
              <path
                d="M1.33329 1.66669L5.99996 6.33335L10.6666 1.66669"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link to="/pages" className="Nav_link">
            <p>Pages</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none">
              <path
                d="M1.33329 1.66669L5.99996 6.33335L10.6666 1.66669"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link to="/blog-list" className="Nav_link">
            <p>Blog</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none">
              <path
                d="M1.33329 1.66669L5.99996 6.33335L10.6666 1.66669"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          <Link to="/about" className="Nav_link">
            <p>About Us</p>
          </Link>

          <Link to="/contact" className="Nav_link">
            <p>Contact</p>
          </Link>
        </div>
        <div className="Phone">
          <img src={Call} className="Picture White" alt="Phone Call Logo" />
          <div className="Phone_Information">
            <p>(219)-555-0114</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigations;
