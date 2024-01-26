import Vegetable from "../Assets/Homepage/Vegetable_Banner.png";
import Shop_Products from "../Layout/Shop_Products";
import "../CSS/Shop.css";

const Shop = () => {
  return (
    <div>
      <div className="Shop_Body">
        <div className="Banner_Discount">
          <img src={Vegetable} alt="Vegetable Banner" />
          <div className="Banner_Discount_Content">
            <p className="Shop_Banner_Deal">Best Deals</p>
            <p className="Shop_Banner_Big">Sale of the Month</p>
          </div>
        </div>

        <div className="Shop_Product">
          <Shop_Products />
        </div>
      </div>
    </div>
  );
};

export default Shop;
