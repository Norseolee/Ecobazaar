import UserNavigation from "../Layout/User_Navigation";
import User_Dashboard from "../Layout/User_Dashboard";
import User_OrderHistory from "../Layout/User_OrderHistory";
import User_Settings from "../Layout/User_Settings";
import User_Wishlist from "../Layout/User_Wishlist";
import User_ShoppingCart from "../Layout/User_ShoppingCart";
import { Routes, Route } from "react-router-dom";

const User_Page = () => {
  return (
    <div className="User_Base" style={{ display: "flex", width: "100%" }}>
      <UserNavigation style={{ width: "500px" }} />
      <Routes>
        <Route path="dashboard" element={<User_Dashboard />} />
        <Route path="order-history" element={<User_OrderHistory />} />
        <Route path="wishlist" element={<User_Wishlist />} />
        <Route path="shopping-cart" element={<User_ShoppingCart />} />
        <Route path="settings" element={<User_Settings />} />
      </Routes>
    </div>
  );
};

export default User_Page;
