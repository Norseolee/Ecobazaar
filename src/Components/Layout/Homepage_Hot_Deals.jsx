import GreenApple from "../Assets/Homepage/popular_products/product1.png";
import FreshMalta from "../Assets/Homepage/popular_products/product2.png";
import Cabbage from "../Assets/Homepage/popular_products/product3.png";
import Lettuce from "../Assets/Homepage/popular_products/product4.png";
import Eggplant from "../Assets/Homepage/popular_products/product5.png";
import BigPotato from "../Assets/Homepage/popular_products/product6.png";
import Corn from "../Assets/Homepage/popular_products/product7.png";
import FreshCauliflower from "../Assets/Homepage/popular_products/product8.png";
import GreenCapsicum from "../Assets/Homepage/popular_products/product9.png";
import GreenChili from "../Assets/Homepage/popular_products/product10.png";
import RedChili from "../Assets/Homepage/popular_products/product11.png";
import RedTomatos from "../Assets/Homepage/popular_products/product12.png";
import SurjapurMango from "../Assets/Homepage/popular_products/product13.png";

import Heart from "../Assets/Icons/Heart_Black.svg";
import Eye from "../Assets/Icons/Eye_Black.svg";
import Cart from "../Assets/Icons/Cart.png";

const Product = [
  {
    name: 'Green apple',
    price: '$12.00',
    discount: '$24.00',
    rating: '★★★★★',
    feedback: '534',
    sale: 'Sale 50%',
    picture: GreenApple,
  },
  {
    name: 'Chinese cabbage',
    price: '$12.00',
    discount: '$20.00',
    rating: '★★★★☆',
    feedback: '340',
    sale: 'Sale 30%',
    picture: Cabbage,
  },
  {
    name: 'Green Lettuce',
    price: '$9.00',
    discount: '$18.00',
    rating: '★★★★☆',
    feedback: '340',
    sale: 'Sale 50%',
    picture: Lettuce,
  },
  {
    name: 'Eggplant',
    price: '$34.00',
    discount: '',
    rating: '★★★★☆',
    feedback: '200',
    sale: '',
    picture: Eggplant,
  },
  {
    name: 'Fresh Cauliflower',
    price: '$12.00',
    discount: '$15.00',
    rating: '★★★★☆',
    feedback: '370',
    sale: 'sale 10%',
    picture: FreshCauliflower,
  },
  {
    name: 'Green Capsicum',
    price: '$9.00',
    discount: '$20.99',
    rating: '★★★★☆',
    feedback: '332',
    sale: 'sale 50%',
    picture: GreenCapsicum,
  },
  {
    name: 'Green Chili',
    price: '$9.00',
    discount: '',
    rating: '★★★★☆',
    feedback: '360',
    sale: '',
    picture: GreenChili,
  },
  {
    name: 'Corn',
    price: '$12.00',
    discount: '',
    rating: '★★★★☆',
    feedback: '210',
    sale: '',
    picture: Corn,
  },
  {
    name: 'Big potatoes',
    price: '$12.00',
    discount: '',
    rating: '★★★★☆',
    feedback: '182',
    sale: '',
    picture: BigPotato,
  },
  {
    name: 'Red Chili',
    price: '$9.00',
    discount: '',
    rating: '★★★★☆',
    feedback: '111',
    sale: '',
    picture: RedChili,
  },
  {
    name: 'Red Tomatos',
    price: '$9.00',
    discount: '$20.99',
    rating: '★★★★☆',
    feedback: '327',
    sale: 'Sale 50%',
    picture: RedTomatos,
  },
  {
    name: 'Surjapur Mango',
    price: '$34.00',
    discount: '',
    rating: '★★★★☆',
    feedback: '210',
    sale: '',
    picture: SurjapurMango,
  },
]

const ProductList = () => {
  return (
    <div>
      {Product.map(product => (
        <Homepage_Hot_Deals
          key={product.name}
          name={product.name}
          price={product.price}
          discount={product.discount}
          rating={product.rating}
          sale={product.sale}
          picture={product.picture}
          feedback={product.feedback}
        />
      ))}
    </div>
  )
}

const Homepage_Hot_Deals = ({ name, price, discount, rating, sale, picture, feedback }) => {
  return (
    <div>
      <div className="Hot_Deals_Picture">
        <img src={picture} alt={`${name} Product`} />
        <p>{sale}</p>
      </div>
      <div className="Hot_Deals_Buttons">
        <div className="img">
          <img src={Heart} alt="heart logo" />
        </div>
        <div className="Btn-Fill Btn-Small Btn_Hot_Deals">
          <p>Add to Cart</p>
          <img src={Cart} className="White Hot_Deal_Cart" alt="Cart Logo" />
        </div>
        <div className="img">
          <img src={Eye} alt="Eye Logo" />
        </div>
      </div>
      <div className="Hot_Deals_Info">
        <div className="Hot_Deals_Details">
          <p className="Hot_Product_Name">{name}</p>
          <p className="Hot_Product_Price">
            {price} <span className="Hot_Product_Discount">{discount}</span>
          </p>
          <p className="Hot_Product_Rating">
            {rating}
            <span className="Hot_Product_Feedback">( {feedback} )</span>
          </p>
        </div>
        <div className="Hot_Deal_Cart">
          <img src={Cart} className="Black" alt="Cart Logo" />
        </div>
      </div>
    </div>
  );
}

export default ProductList