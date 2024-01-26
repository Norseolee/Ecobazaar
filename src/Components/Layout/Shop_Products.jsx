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
import Carrot from "../Assets/Shop/Carrots.png";
import Broccoli from "../Assets/Shop/Broccoli.jpg";
import Tomato from "../Assets/Shop/Tomato.png";
import Cucumber from "../Assets/Shop/Cucumber.png";
import Onion from "../Assets/Shop/Onion.png";
import Sweet_Potato from "../Assets/Shop/Sweet_Potato.jpg";
import Green_Beans from "../Assets/Shop/Green_Beans.png";
import Spinach from "../Assets/Shop/Spinach.png";
import Mango from "../Assets/Homepage/popular_products/product13.png";
import Red_Apple from "../Assets/Shop/Red_Apple.jpg";
import Banana from "../Assets/Shop/Banana.jpg";
import Grapes from "../Assets/Shop/Grapes.jpg";
import Strawberry from "../Assets/Shop/Strawberry.jpg";
import Pineapple from "../Assets/Shop/Pineapple.jpeg";
import Orange from "../Assets/Shop/Orange.jpg";

import ShoppingBag from "../Assets/Icons/Shopping_Bag.png";
import { useState } from "react";

// my products
const Product = [
  {
    id: "product-1",
    category: "Vegetables",
    name: "Green Beans",
    price: 12.22,
    discount: 13.17,
    rating: "★★★★☆",
    sale: "Sale 10%",
    picture: Green_Beans,
    description:
      "Fresh and tender green beans, perfect for a healthy and delicious side dish.",
    stock: 100,
    reviews: 45,
  },
  {
    id: "product-2",
    category: "Vegetables",
    name: "Sweet Potato",
    price: 9.5,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Sweet_Potato,
    description:
      "Nutrient-rich sweet potatoes, great for roasting, mashing, or adding to various dishes.",
    stock: 100,
    reviews: 30,
  },
  {
    id: "product-3",
    category: "Vegetables",
    name: "Onion",
    price: 10.75,
    discount: "",
    rating: "★★★★★",
    sale: "",
    picture: Onion,
    description:
      "Versatile onions, essential for many savory dishes. Adds flavor and aroma to your meals.",
    stock: 100,
    reviews: 50,
  },
  {
    id: "product-4",
    category: "Vegetables",
    name: "Cucumber",
    price: 10.5,
    discount: 15.6,
    rating: "★★★★★",
    sale: "Sale 5%",
    picture: Cucumber,
    description:
      "Crunchy and hydrating cucumbers, perfect for salads or as a refreshing snack.",
    stock: 100,
    reviews: 38,
  },
  {
    id: "product-5",
    category: "Vegetables",
    name: "Tomato",
    price: 11.99,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Tomato,
    description:
      "Ripe and juicy tomatoes, ideal for salads, sandwiches, or making delicious sauces.",
    stock: 100,
    reviews: 42,
  },
  {
    id: "product-6",
    category: "Vegetables",
    name: "Carrot",
    price: 10.99,
    discount: 11.5,
    rating: "★★★★☆",
    sale: "Sale 20%",
    picture: Carrot,
    description:
      "Sweet and crunchy carrots, packed with vitamins. Great for snacking or cooking.",
    stock: 100,
    reviews: 55,
  },
  {
    id: "product-7",
    category: "Vegetables",
    name: "Broccoli",
    price: 30.5,
    discount: "",
    rating: "★★★★★",
    sale: "",
    picture: Broccoli,
    description:
      "Nutrient-dense broccoli, a versatile vegetable that can be steamed, roasted, or stir-fried.",
    stock: 100,
    reviews: 48,
  },
  {
    id: "product-8",
    category: "Vegetables",
    name: "Spinach",
    price: 20.8,
    discount: 22,
    rating: "★★★★☆",
    sale: "Sale 10%",
    picture: Spinach,
    description:
      "Fresh and vibrant spinach, perfect for salads, smoothies, or sautés.",
    stock: 100,
    reviews: 40,
  },
  {
    id: "product-9",
    category: "Fruits",
    name: "Green apple",
    price: 14.99,
    discount: 20,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: GreenApple,
    description:
      "Crisp and tangy green apples, a healthy and satisfying snack.",
    stock: 100,
    reviews: 60,
  },
  {
    id: "product-10",
    category: "Fruits",
    name: "Fresh Indian Malta",
    price: 20,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: FreshMalta,
    description:
      "Exotic and sweet Indian Malta, perfect for enjoying as a refreshing fruit.",
    stock: 100,
    reviews: 35,
  },
  {
    id: "product-11",
    category: "Vegetables",
    name: "Chinese Cabbage",
    price: 12,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Cabbage,
    description:
      "Crunchy and mild Chinese cabbage, a great addition to stir-fries and salads.",
    stock: 100,
    reviews: 25,
  },
  {
    id: "product-12",
    category: "Vegetables",
    name: "Green Lettuce",
    price: 15,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Lettuce,
    description:
      "Fresh and crisp green lettuce, perfect for creating delicious salads.",
    stock: 100,
    reviews: 32,
  },
  {
    id: "product-13",
    category: "Vegetables",
    name: "Eggplant",
    price: 34,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Eggplant,
    description:
      "Versatile eggplant, suitable for grilling, roasting, or adding to savory dishes.",
    stock: 100,
    reviews: 28,
  },
  {
    id: "product-14",
    category: "Vegetables",
    name: "Big Potatoes",
    price: 20,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: BigPotato,
    description:
      "Large and starchy big potatoes, great for baking, mashing, or frying.",
    stock: 100,
    reviews: 50,
  },
  {
    id: "product-15",
    category: "Vegetables",
    name: "Corn",
    price: 20,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Corn,
    description:
      "Sweet and golden corn, perfect for enjoying on its own or as a side dish.",
    stock: 100,
    reviews: 40,
  },
  {
    id: "product-16",
    category: "Vegetables",
    name: "Fresh Cauliflower",
    price: 12,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: FreshCauliflower,
    description:
      "Fresh and crisp cauliflower, versatile for roasting, steaming, or making cauliflower rice.",
    stock: 100,
    reviews: 33,
  },
  {
    id: "product-17",
    category: "Vegetables",
    name: "Green Capsicum",
    price: 9,
    discount: 20,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: GreenCapsicum,
    description:
      "Sweet and colorful green capsicum, perfect for salads, stir-fries, or stuffing.",
    stock: 100,
    reviews: 55,
  },
  {
    id: "product-18",
    category: "Vegetables",
    name: "Green Chili",
    price: 34,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: GreenChili,
    description:
      "Spicy and flavorful green chili peppers, adds heat to your favorite dishes.",
    stock: 100,
    reviews: 42,
  },
  {
    id: "product-19",
    category: "Fruits",
    name: "Fresh Mango",
    price: 22.22,
    discount: 24.17,
    rating: "★★★★☆",
    sale: "Sale 10%",
    picture: Mango,
    description:
      "Juicy and sweet fresh mango, a tropical delight that's perfect for snacking or desserts.",
    stock: 100,
    reviews: 48,
  },
  {
    id: "product-20",
    category: "Fruits",
    name: "Apple",
    price: 12.5,
    discount: 25.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Red_Apple,
    description:
      "Crisp and refreshing apples, perfect for eating on their own or as a versatile ingredient.",
    stock: 100,
    reviews: 60,
  },
  {
    id: "product-21",
    category: "Fruits",
    name: "Banana",
    price: 9.0,
    discount: 19.0,
    rating: "★★★☆☆",
    sale: "Sale 50%",
    picture: Banana,
    description:
      "Sweet and energy-packed bananas, a convenient and healthy snack for any time of the day.",
    stock: 100,
    reviews: 25,
  },
  {
    id: "product-22",
    category: "Fruits",
    name: "Orange",
    price: 10.0,
    discount: 20.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Orange,
    description:
      "Citrusy and vitamin-packed oranges, great for juicing or enjoying as a fresh snack.",
    stock: 100,
    reviews: 30,
  },
  {
    id: "product-23",
    category: "Fruits",
    name: "Grapes",
    price: 7.5,
    discount: 15.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Grapes,
    description:
      "Sweet and juicy grapes, perfect for snacking or adding to fruit salads.",
    stock: 100,
    reviews: 28,
  },
  {
    id: "product-24",
    category: "Fruits",
    name: "Strawberry",
    price: 11.0,
    discount: 22.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Strawberry,
    description:
      "Delicious and vibrant strawberries, great for desserts, smoothies, or enjoying on their own.",
    stock: 100,
    reviews: 45,
  },
  {
    id: "product-25",
    category: "Fruits",
    name: "Pineapple",
    price: 15.0,
    discount: 30.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Pineapple,
    description:
      "Juicy and tropical pineapple, a sweet and refreshing addition to your fruit collection.",
    stock: 100,
    reviews: 22,
  },
  //
  {
    id: "product-26",
    category: "Vegetables",
    name: "Green Beans",
    price: 30.22,
    discount: 31.17,
    rating: "★★★★☆",
    sale: "Sale 10%",
    picture: Green_Beans,
    description:
      "Fresh and tender green beans, perfect for a healthy and delicious side dish.",
    stock: 100,
    reviews: 45,
  },
  {
    id: "product-27",
    category: "Vegetables",
    name: "Sweet Potato",
    price: 19.5,
    discount: "",
    rating: "★★★☆☆",
    sale: "",
    picture: Sweet_Potato,
    description:
      "Nutrient-rich sweet potatoes, great for roasting, mashing, or adding to various dishes.",
    stock: 100,
    reviews: 30,
  },
  {
    id: "product-28",
    category: "Vegetables",
    name: "Onion",
    price: 20.75,
    discount: "",
    rating: "★★★☆☆",
    sale: "",
    picture: Onion,
    description:
      "Versatile onions, essential for many savory dishes. Adds flavor and aroma to your meals.",
    stock: 100,
    reviews: 50,
  },
  {
    id: "product-4",
    category: "Vegetables",
    name: "Cucumber",
    price: 10.5,
    discount: 15.6,
    rating: "★★★★★",
    sale: "Sale 5%",
    picture: Cucumber,
    description:
      "Crunchy and hydrating cucumbers, perfect for salads or as a refreshing snack.",
    stock: 100,
    reviews: 38,
  },
  {
    id: "product-29",
    category: "Vegetables",
    name: "Tomato",
    price: 8.99,
    discount: "",
    rating: "★★☆☆☆",
    sale: "",
    picture: Tomato,
    description:
      "Ripe and juicy tomatoes, ideal for salads, sandwiches, or making delicious sauces.",
    stock: 52,
    reviews: 342,
  },
  {
    id: "product-30",
    category: "Vegetables",
    name: "Carrot",
    price: 20.99,
    discount: 21.5,
    rating: "★★★☆☆",
    sale: "Sale 20%",
    picture: Carrot,
    description:
      "Sweet and crunchy carrots, packed with vitamins. Great for snacking or cooking.",
    stock: 47,
    reviews: 642,
  },
  {
    id: "product-31",
    category: "Vegetables",
    name: "Broccoli",
    price: 30.5,
    discount: "",
    rating: "★★★★★",
    sale: "",
    picture: Broccoli,
    description:
      "Nutrient-dense broccoli, a versatile vegetable that can be steamed, roasted, or stir-fried.",
    stock: 100,
    reviews: 48,
  },
  {
    id: "product-32",
    category: "Vegetables",
    name: "Spinach",
    price: 30.8,
    discount: 32.5,
    rating: "★★★★☆",
    sale: "Sale 10%",
    picture: Spinach,
    description:
      "Fresh and vibrant spinach, perfect for salads, smoothies, or sautés.",
    stock: 80,
    reviews: 97,
  },
  {
    id: "product-33",
    category: "Fruits",
    name: "Green apple",
    price: 20.99,
    discount: 40.99,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: GreenApple,
    description:
      "Crisp and tangy green apples, a healthy and satisfying snack.",
    stock: 116,
    reviews: 61,
  },
  {
    id: "product-34",
    category: "Fruits",
    name: "Fresh Indian Malta",
    price: 10.0,
    discount: "",
    rating: "★★☆☆☆",
    sale: "",
    picture: FreshMalta,
    description:
      "Exotic and sweet Indian Malta, perfect for enjoying as a refreshing fruit.",
    stock: 34,
    reviews: 70,
  },
  {
    id: "product-35",
    category: "Vegetables",
    name: "Chinese Cabbage",
    price: 22,
    discount: "",
    rating: "★★★☆☆",
    sale: "",
    picture: Cabbage,
    description:
      "Crunchy and mild Chinese cabbage, a great addition to stir-fries and salads.",
    stock: 91,
    reviews: 71,
  },
  {
    id: "product-36",
    category: "Vegetables",
    name: "Green Lettuce",
    price: 25,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Lettuce,
    description:
      "Fresh and crisp green lettuce, perfect for creating delicious salads.",
    stock: 421,
    reviews: 512,
  },
  {
    id: "product-37",
    category: "Vegetables",
    name: "Eggplant",
    price: 54,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Eggplant,
    description:
      "Versatile eggplant, suitable for grilling, roasting, or adding to savory dishes.",
    stock: 40,
    reviews: 52,
  },
  {
    id: "product-38",
    category: "Vegetables",
    name: "Big Potatoes",
    price: 20,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: BigPotato,
    description:
      "Large and starchy big potatoes, great for baking, mashing, or frying.",
    stock: 155,
    reviews: 210,
  },
  {
    id: "product-40",
    category: "Vegetables",
    name: "Corn",
    price: 30,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: Corn,
    description:
      "Sweet and golden corn, perfect for enjoying on its own or as a side dish.",
    stock: 165,
    reviews: 72,
  },
  {
    id: "product-41",
    category: "Vegetables",
    name: "Fresh Cauliflower",
    price: 7,
    discount: "",
    rating: "★★★☆☆",
    sale: "",
    picture: FreshCauliflower,
    description:
      "Fresh and crisp cauliflower, versatile for roasting, steaming, or making cauliflower rice.",
    stock: 100,
    reviews: 33,
  },
  {
    id: "product-42",
    category: "Vegetables",
    name: "Green Capsicum",
    price: 24.2,
    discount: 44.4,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: GreenCapsicum,
    description:
      "Sweet and colorful green capsicum, perfect for salads, stir-fries, or stuffing.",
    stock: 162,
    reviews: 65,
  },
  {
    id: "product-43",
    category: "Vegetables",
    name: "Green Chili",
    price: 5.99,
    discount: "",
    rating: "★★★★☆",
    sale: "",
    picture: GreenChili,
    description:
      "Spicy and flavorful green chili peppers, adds heat to your favorite dishes.",
    stock: 100,
    reviews: 412,
  },
  {
    id: "product-44",
    category: "Fruits",
    name: "Fresh Mango",
    price: 22.22,
    discount: 24.17,
    rating: "★★★★☆",
    sale: "Sale 10%",
    picture: Mango,
    description:
      "Juicy and sweet fresh mango, a tropical delight that's perfect for snacking or desserts.",
    stock: 100,
    reviews: 48,
  },
  {
    id: "product-45",
    category: "Fruits",
    name: "Apple",
    price: 5.58,
    discount: 10.58,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Red_Apple,
    description:
      "Crisp and refreshing apples, perfect for eating on their own or as a versatile ingredient.",
    stock: 100,
    reviews: 60,
  },
  {
    id: "product-46",
    category: "Fruits",
    name: "Banana",
    price: 9.0,
    discount: 19.0,
    rating: "★★★☆☆",
    sale: "Sale 50%",
    picture: Banana,
    description:
      "Sweet and energy-packed bananas, a convenient and healthy snack for any time of the day.",
    stock: 100,
    reviews: 25,
  },
  {
    id: "product-47",
    category: "Fruits",
    name: "Orange",
    price: 10.0,
    discount: 20.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Orange,
    description:
      "Citrusy and vitamin-packed oranges, great for juicing or enjoying as a fresh snack.",
    stock: 650,
    reviews: 30,
  },
  {
    id: "product-48",
    category: "Fruits",
    name: "Grapes",
    price: 7.5,
    discount: 15.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Grapes,
    description:
      "Sweet and juicy grapes, perfect for snacking or adding to fruit salads.",
    stock: 54,
    reviews: 96,
  },
  {
    id: "product-49",
    category: "Fruits",
    name: "Strawberry",
    price: 11.0,
    discount: 22.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Strawberry,
    description:
      "Delicious and vibrant strawberries, great for desserts, smoothies, or enjoying on their own.",
    stock: 60,
    reviews: 20,
  },
  {
    id: "product-50",
    category: "Fruits",
    name: "Pineapple",
    price: 30.0,
    discount: 60.0,
    rating: "★★★★☆",
    sale: "Sale 50%",
    picture: Pineapple,
    description:
      "Juicy and tropical pineapple, a sweet and refreshing addition to your fruit collection.",
    stock: 710,
    reviews: 299,
  },
];

const Shop_ProductsList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [priceRangeFilter, setPriceRangeFilter] = useState("All");
  const [ratingFilter, setRatingFilter] = useState("All");

  const recordsPerPage = 12;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const uniqueCategories = Array.from(
    new Set(Product.map((product) => product.category))
  );
  const uniqueRatings = Array.from(
    new Set(Product.map((product) => product.rating))
  );

  const filteredProducts = Product.filter(
    (product) => categoryFilter === "All" || product.category === categoryFilter
  )
    .filter(
      (product) =>
        priceRangeFilter === "All" ||
        isPriceInRange(product.price, priceRangeFilter)
    )
    .filter(
      (product) => ratingFilter === "All" || product.rating === ratingFilter
    );

  return (
    <div>
      <div className="Shop_Filter">
        <div>
          <label htmlFor="category">Select Category:</label>
          <select
            id="category"
            value={categoryFilter}
            onChange={(e) => {
              setCategoryFilter(e.target.value);
              setCurrentPage(1);
            }}>
            <option value="All">All</option>
            {uniqueCategories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="priceRange">Select Price Range:</label>
          <select
            id="priceRange"
            value={priceRangeFilter}
            onChange={(e) => {
              setPriceRangeFilter(e.target.value);
              setCurrentPage(1);
            }}>
            <option value="All">All</option>
            <option value="0-10">0 - 10</option>
            <option value="11-20">11 - 20</option>
            <option value="21-30">21 - 30</option>
          </select>
        </div>

        <div>
          <label htmlFor="rating">Select Rating:</label>
          <select
            id="rating"
            value={ratingFilter}
            onChange={(e) => {
              setRatingFilter(e.target.value);
              setCurrentPage(1);
            }}>
            <option value="All">All</option>
            {uniqueRatings.map((rating, index) => (
              <option key={index} value={rating}>
                {rating}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="Shop_Product_List">
        {filteredProducts
          .slice(
            (currentPage - 1) * recordsPerPage,
            currentPage * recordsPerPage
          )
          .map((product) => (
            <Shop_Products
              key={product.id}
              name={product.name}
              price={product.price}
              discount={product.discount}
              rating={product.rating}
              sale={product.sale}
              picture={product.picture}
              review={product.reviews}
              description={product.description}
              category={product.category}
            />
          ))}
      </div>

      <PaginationNav
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / recordsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

const isPriceInRange = (price, range) => {
  const [min, max] = range.split("-").map(Number);
  return price >= min && price <= max;
};

const PaginationNav = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="Shop_Pagination_Nav">
      <button
        className="Shop_Pag_Button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}>
        Prev
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          onClick={() => onPageChange(index + 1)}
          className={index + 1 === currentPage ? "active" : ""}>
          {index + 1}
        </button>
      ))}
      <button
        className="Shop_Pag_Button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}>
        Next
      </button>
    </div>
  );
};

const Shop_Products = ({
  name,
  price,
  discount,
  rating,
  sale,
  picture,
  review,
  description,
  category,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  const handleAddToCart = () => {
    // Add your logic to handle adding the product to the cart
    console.log(`Added ${quantity} ${name} to the cart!`);
    // You may want to dispatch an action to update the cart state in your application
  };

  return (
    <div>
      <div className="Shop_ProductList_Card" onClick={() => setShowModal(true)}>
        <div className="Shop_Product_Picture">
          <img src={picture} alt={`${name} Photo`} />
          <p>{sale}</p>
        </div>
        <div className="Shop_Product_Description">
          <div className="Shop_Product_Info">
            <p>{name}</p>
            <p>
              ${price}
              <span className="Shop_Popular_Discount">
                {discount ? `$${discount}` : null}
              </span>
            </p>
            <p className="Rating">{rating}</p>
          </div>
          <div className="Shop_Shopping_Cart">
            <img src={ShoppingBag} alt="Shopping Bag Photo" />
          </div>
        </div>
      </div>

      {showModal && (
        <div className="Shop_Product_Modal">
          <div className="Shop_Modal_Content">
            <img src={picture} alt={`${name} Photo`} />
            <div className="Shop_Modal_Info">
              <div className="Shop_Modal_Information">
                <p className="Shop_Modal_Title">{name}</p>
                <p className="Yellow">
                  {rating}
                  <span className="Color_Gray"> | {review} Review</span>
                </p>
              </div>
              <div className="Shop_Modal_Amount">
                <p className="Shop_Modal_Discount">
                  {discount ? `$${discount}` : null}
                </p>
                <p className="Shop_Modal_Price">${price}</p>
                <p className="Shop_Modal_Sale">{sale}</p>
              </div>
              <div className="Divider_Horizontal"></div>
              <div className="Shop_Model_Description">
                <p>{description}</p>

                <p className="Shop_Modal_Category">
                  Category:
                  <span className="Shop_Modal_Category_Info"> {category}</span>
                </p>
              </div>
              <div className="Divider_Horizontal"></div>
              <div className="Shop_Modal_AddToCart">
                <div className="Shop_Modal_NumberAmount">
                  <button onClick={handleDecrement}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={handleIncrement}>+</button>
                </div>
                <div className="Shop_Modal_AddToCart_Btn">
                  <button
                    className="Btn-Fill Btn-Small"
                    onClick={handleAddToCart}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <button
              className="Shop_Modal_Close"
              onClick={() => setShowModal(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Shop_ProductsList;
