import MapPin from "./Assets/MapPin.png";
import Logo from "./Assets/Logo.png";
import Call from "./Assets/PhoneCall 1.png";
import Heart from "./Assets/Heart.png";
import Cart from "./Assets/Cart.png";
import "./CSS/Navigation.css";

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
            <p>Sign In/ Sign Up </p>
          </div>
        </div>
      </div>
      <div className="Divider_Horizontal"></div>
      <div className="Navigation">
        <div className="Logo">
          <img src={Logo} className="Picture" alt="Logo" />
          <h1 class="Logo_name">Ecobazaar</h1>
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
          <p>Home</p>
          <p>Shop</p>
          <p>Pages</p>
          <p>Blog</p>
          <p>About Us</p>
          <p>Contact Us</p>
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
