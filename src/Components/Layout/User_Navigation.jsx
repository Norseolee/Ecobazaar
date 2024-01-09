import "../CSS/User/UserNavigation.css";
import { Link } from "react-router-dom";
import Dashboard_Logo from "../Assets/Dashboard_Logo.png";
import OrderHistory_Logo from "../Assets/OrderHistory_Logo.png";
import Heart_Logo from "../Assets/Heart.png";
import ShoppingCart_Logo from "../Assets/Cart.png";
import Settings_Logo from "../Assets/Settings_Logo.png";
import LogOut_Logo from "../Assets/Logout_Logo.png";

const User_Navigation = () => {
  return (
    <div>
      <div className="NavigationUser_Base">
        <div className="Nav_title">
          <p className="Navigation_title">Navigation</p>
        </div>
        <div className="NavigationUser_items">
          <Link className="link_Design" to="/user/dashboard">
            <div className="UserNav_link">
              <img src={Dashboard_Logo} alt="" />
              <p>Dashboard</p>
            </div>
          </Link>
          <Link className="link_Design" to="/user/order-history">
            <div className="UserNav_link">
              <img className="Black" src={OrderHistory_Logo} alt="" />
              <p>Order History</p>
            </div>
          </Link>
          <Link className="link_Design" to="/user/wishlist">
            <div className="UserNav_link">
              <img className="Black" src={Heart_Logo} alt="" />
              <p>Wishlist</p>
            </div>
          </Link>
          <Link className="link_Design" to="/user/shopping-cart">
            <div className="UserNav_link">
              <img className="Black" src={ShoppingCart_Logo} alt="" />
              <p>Shopping Cart</p>
            </div>
          </Link>
          <Link className="link_Design" to="/user/settings">
            <div className="UserNav_link">
              <img className="Black" src={Settings_Logo} alt="" />
              <p>Settings</p>
            </div>
          </Link>
          <Link className="link_Design" to="/user/log-out">
            <div className="UserNav_link">
              <img className="Black" src={LogOut_Logo} alt="" />
              <p>Log-out</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default User_Navigation;
