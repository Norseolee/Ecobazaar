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

import ShoppingBag from "../Assets/Icons/Shopping_Bag.png";

const Product = [
    {
        name: 'Green apple',
        price: '$14.99',
        discount: '$20.00',
        rating: '★★★★☆',
        sale: 'Sale 50%',
        picture: GreenApple,
    },
    {
        name: 'Fresh indian malta',
        price: '$20.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: FreshMalta,
    },
    {
        name: 'Chinese cabbage',
        price: '$12.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: Cabbage,
    },
    {
        name: 'Green Lettuce',
        price: '$9.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: Lettuce,
    },
    {
        name: 'Eggplant',
        price: '$34.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: Eggplant,
    },
    {
        name: 'Big potatoes',
        price: '$20.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: BigPotato,
    },
    {
        name: 'Corn',
        price: '$20.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: Corn,
    },
    {
        name: 'Fresh cauliflower',
        price: '$12.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: FreshCauliflower,
    },
    {
        name: 'Green capsicum',
        price: '$9.00',
        discount: '$20.00',
        rating: '★★★★☆',
        sale: 'Sale 50%',
        picture: GreenCapsicum,
    },
    {
        name: 'Green chili',
        price: '$34.00',
        discount: '',
        rating: '★★★★☆',
        sale: '',
        picture: GreenChili,
    },
]

const Popular_Product_List = () => {
    return (
        <div>
            {Product.map(product => (
                <Homepage_Popular_Products
                    key={product.name}
                    name={product.name}
                    price={product.price}
                    discount={product.discount}
                    rating={product.rating}
                    sale={product.sale}
                    picture={product.picture}
                />
            ))}
        </div>
    );
}

const Homepage_Popular_Products = ({ name, price, discount, rating, sale, picture }) => {
    return (
            <div className="Popular_Product">
                <div className="Product_Picture">
                    <img src={picture} alt={`${picture} Photo`} />
                    <p>{sale}</p>
                </div>
                <div className="Product_Description">
                    <div className="Product_Info"> 
                        <p>{name}</p>
                        <p>{price}<span className="Popular_Discount">{discount}</span></p>
                        <p className="Rating">{rating}</p>
                    </div>
                    <div className="Shopping_Cart">
                        <img src={ShoppingBag} alt="Shopping Bag Photo" />
                    </div>
                </div>
            </div>
    );
}

export default Popular_Product_List;
