import MapPin from "../Assets/MapPin.png";
import Logo from "../Assets/Logo.png";
import Call from "../Assets/PhoneCall 1.png";
import Heart from "../Assets/Heart.png";
import Cart from "../Assets/Cart.png";

import { Link } from "react-router-dom";
import "../CSS/Navigation.css";

const Navigations = () => {
  return (
    <div>
      <div className="Navigation Top">
        <div className="Location">
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
      <div className="Navigation">
        <div className="Logo">
          <img src={Logo} className="Picture" alt="Logo" />
          <h1 className="Logo_name">Ecobazaar</h1>
        </div>
        <div>
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
          <Link to="/">
            <p>Home</p>
          </Link>

          <Link to="/shop">
            <p>Shop</p>
          </Link>

          <Link to="/pages">
            <p>Pages</p>
          </Link>

          <Link to="/blog-list">
            <p>Blog</p>
          </Link>

          <Link to="/about">
            <p>About Us</p>
          </Link>

          <Link to="/contact">
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
