import FreshFruit from '../Assets/Homepage/categories/image1.png';
import FreshVegetables from "../Assets/Homepage/categories/image2.png";
import MeatAndFish from "../Assets/Homepage/categories/image3.png";
import Snacks from "../Assets/Homepage/categories/image4.png";
import Beverages from "../Assets/Homepage/categories/image5.png";
import BeautyAndHealth from "../Assets/Homepage/categories/image6.png";
import BreadAndBakery from "../Assets/Homepage/categories/image7.png";
import BakingNeeds from "../Assets/Homepage/categories/image8.png";
import Cooking from "../Assets/Homepage/categories/image9.png";
import DiabeticFood from "../Assets/Homepage/categories/image10.png";
import DishDetergents from "../Assets/Homepage/categories/image11.png";
import Oil from "../Assets/Homepage/categories/image12.png";

const category = [
    { picture: FreshFruit, name: 'Fresh Fruit' },
    { picture: FreshVegetables, name: 'Fresh Vegetables' },
    { picture: MeatAndFish, name: 'Meat & Fish' },
    { picture: Snacks, name: 'Snacks' },
    { picture: Beverages, name: 'Beverages' },
    { picture: BeautyAndHealth, name: 'Beauty & Health' },
    { picture: BreadAndBakery, name: 'Bread & Bakery' },
    { picture: BakingNeeds, name: 'Baking Needs' },
    { picture: Cooking, name: 'Cooking' },
    { picture: DiabeticFood, name: 'Diabetic Food' },
    { picture: DishDetergents, name: 'Dish Detergents' },
    { picture: Oil, name: 'Oil' },
];

const HPC = () => (
    <div>
        {category.map(category => (
            <Homepage_Popular_Category 
                key={category.name}
                name={category.name}
                picture={category.picture}
            />
        ))}
    </div>
);

const Homepage_Popular_Category = ({ name, picture }) => {
    return (
            <div className='Category_Product'>
                <img src={picture} alt={`${name} Photo`} />
                <p>{name}</p>
            </div>
    )
};

export default HPC;
