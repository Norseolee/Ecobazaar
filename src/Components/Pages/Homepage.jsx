import React from "react";
import HPC from "../Layout/Homepage_Popular_Category";
import HPP from "../Layout/Homepage_Popular_Products";
import HD from "../Layout/Homepage_Hot_Deals";
import BlogNews from "../Layout/Homepage_Blog_News";

import Banner from '../Assets/Homepage/Bannar Big.png';
import BucketWhite from '../Assets/Homepage/buscket_Bubket.png';
import BG_green from '../Assets/Homepage/BG.png'

import FreeShipping from "../Assets/Icons/Free_Shipping.png";
import CustomerService from "../Assets/Icons/Headphones.png";
import ShoppingBag from "../Assets/Icons/Shopping_Bag.png";
import Package from "../Assets/Icons/Package.png";

import Vegetables from "../Assets/Homepage/Rectangle_54.png";
import Meats from "../Assets/Homepage/Rectangle_55.png";
import Fruits from "../Assets/Homepage/Rectangle_56.png"

import DiscountVegetables from "../Assets/Homepage/Vegetable_Banner.png";

import Brand1 from "../Assets/Homepage/mango-1.svg";
import Brand2 from "../Assets/Homepage/group.svg";
import Brand3 from "../Assets/Homepage/food.svg";
import Brand4 from "../Assets/Homepage/bookoff-corporation-logo.svg";
import Brand5 from "../Assets/Homepage/group2.svg";

import insta1 from "../Assets/Homepage/insta_post_1.png";
import insta2 from "../Assets/Homepage/insta_post_2.png";
import insta3 from "../Assets/Homepage/insta_post_3.png";
import insta4 from "../Assets/Homepage/insta_post_4.png";
import insta5 from "../Assets/Homepage/insta_post_5.png";
import insta6 from "../Assets/Homepage/insta_post_6.png";

import rightArrow from "../Assets/Icons/Right_Arrow.png";

import "../CSS/Homepage/Homepage.css";
import { Link } from "react-router-dom";


const Homepage = () => {
  return (
    <div className="Homepage">
      {/* Banner */}
      <section className="Intro_Banner">
        <div className="Intro_1">
          <img src={Banner} alt="Banner picture" />
        </div>
        <div className="Intro_2">
          <div className="Fruits_Vegetable">
            <img
              className="Fruits_Vegetable_Pic"
              src={BucketWhite}
              alt="Bucket Fruits"
            />
            <div className="Fruits_Vegetable_Info">
              <p className="Summer_Sale">SUMMER SALE</p>
              <p className="Percent_Off">75% OFF</p>
              <p className="Summer_Info">Only Fruit & Vegetable</p>
              <p className="Btn-Link">
                Show Now
                <img src={rightArrow} className="Arrow" alt="rightArrow" />
              </p>
            </div>
          </div>
          <div className="Best_Deals">
            <img
              className="Best_Deals_Pic"
              src={BG_green}
              alt="Green Background"
            />
            <div className="Best_Deals_Info">
              <p className="Summer_Sale">BEST DEAL</p>
              <h2>
                Special Products <br />
                Deal of the Month
              </h2>
              <p className="Btn-Link">
                Shop Now
                <img src={rightArrow} alt="rightArrow" className="Arrow" />
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Benefits */}
      <section className="Benefits">
        <div>
          <div>
            <img src={FreeShipping} alt="Free Shipping Logo" />
            <div>
              <h3>Free Shipping</h3>
              <p className="Color_Gray">Free shipping on all you order</p>
            </div>
          </div>
          <div>
            <img src={CustomerService} alt="Customer Service Logo" />
            <div>
              <h3>Customer Support 24/7</h3>
              <p className="Color_Gray">instant access to Support</p>
            </div>
          </div>
          <div>
            <img src={ShoppingBag} alt="Shopping Bag" />
            <div>
              <h3>100% Secure Payment</h3>
              <p className="Color_Gray">We ensure your money is save</p>
            </div>
          </div>
          <div>
            <img src={Package} alt="Package Logo" />
            <div>
              <h3>Money-Back Guarantee</h3>
              <p className="Color_Gray">30 Days Money-Back Guarantee</p>
            </div>
          </div>
        </div>
      </section>
      {/* Popular Categories */}
      <section className="Popular_Categories">
        <div className="Categories">
          <div className="Category_Title">
            <h1>Popular Categories</h1>
            <Link to="/Shop" className="Btn">
              View All
              <img src={rightArrow} className="Arrow" alt="Arrow Right" />
            </Link>
          </div>
          <div className="Category_List">
            <HPC />
          </div>
        </div>
      </section>
      {/* Popular Products */}
      <section className="Popular_Products">
        <div className="Products">
          <div className="Category_Title">
            <h1>Popular Products</h1>
            <Link to="/Shop" className="Btn">
              View All
              <img src={rightArrow} className="Arrow" alt="Arrow Right" />
            </Link>
          </div>
          <div className="Products_List">
            <HPP />
          </div>
        </div>
      </section>
      {/* Promos */}
      <section className="Promos">
        <div className="Promos_List">
          <div className="Promo_One">
            <img src={Vegetables} alt="vegetables photo" />
            <div className="Promo_One_Info">
              <p className="Promo_Deals_Top">BEST DEALS</p>
              <p className="Promo_Big_Deals">Sale of the Month</p>
              <div className="Days">
                <div>
                  <p>00</p>
                  <p class="Promo_DataTime">DAYS</p>
                </div>
                <p>:</p>
                <div>
                  <p>02</p>
                  <p className="Promo_DataTime">HOURS</p>
                </div>
                <p>:</p>
                <div>
                  <p>18</p>
                  <p className="Promo_DataTime">MINS</p>
                </div>
                <p>:</p>
                <div>
                  <p>46</p>
                  <p className="Promo_DataTime">SECS</p>
                </div>
              </div>
              <div className="Btn-Border Btn-Small">
                <p>Shop Now </p>
              </div>
            </div>
          </div>
          <div className="Promo_Two">
            <img src={Meats} alt="Meats Photo" />
            <div className="Promo_Two_Info">
              <p className="Promo_Deals_Top">85% FAT FREE</p>
              <p className="Promo_Big_Deals">Low-Fat Meat</p>
              <p className="Promo_Amount">
                Started at <span className="Yellow">$79.99</span>
              </p>
              <div className="Btn-Border Btn-Small">
                <p>Shop Now</p>
              </div>
            </div>
          </div>
          <div className="Promo_Three">
            <img src={Fruits} alt="Fruits Photo" />
            <div className="Promo_Three_Info">
              <p className="Promo_Deals_Top">SUMMER SALE</p>
              <h3 className="Promo_Big_Deals">100% Fresh Fruit</h3>
              <p className="Promo_Amount">
                Up to <span className="Percent">64% OFF</span>
              </p>
              <div className="Btn-Border Btn-Small">
                <p>Shop Now</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="Hot_Deals">
        <div className="Products">
          <div className="Category_Title">
            <h1>Hot Deals</h1>
            <Link to="/Shop" className="Btn">
              View All
              <img src={rightArrow} className="Arrow" alt="Arrow Right" />
            </Link>
          </div>
          <div className="Hot_Product_List">
            <HD />
          </div>
        </div>
      </section>

      <section className="Discount ">
        <div className="Discount_Content">
          <img src={DiscountVegetables} alt="Vegetable Discount Banner" />
          <div className="Discount_Banner_Text">
            <p className="Discount_Banner_Deal">SUMMER SALE</p>
            <p className="Discount_Banner_Percent">
              <span className="Yellow">37%</span> OFF
            </p>
            <p>
              Free on all order, Free shipping and 30 days money-back guarantee
            </p>
            <p className="Btn-Fill Btn-Small">Shop Now</p>
          </div>
        </div>
      </section>

      <section className="Latest_News">
        <div className="Latest_News_Title">
          <h1>Latest News</h1>
        </div>
        <div className="Latest_News_Card">
          <BlogNews />
        </div>
      </section>

      <section className="Brands">
        <img src={Brand1} alt="Mango Logo" />
        <div></div>
        <img src={Brand2} alt="Food Logo" />
        <div></div>
        <img src={Brand3} alt="Food Logo 2" />
        <div></div>
        <img src={Brand4} alt="Book-off Logo" />
        <div></div>
        <img src={Brand5} alt="G series Logo" />
      </section>

      <section className="Instagram_Post">
        <h3 className="Insta_Title">Follow us on instagram</h3>
        <div className="Insta_Picture">
          <div>
            <a href="https://www.instagram.com/">
              <img src={insta1} alt="tomato instagram post" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <img src={insta2} alt="leaves instagram post" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <img src={insta3} alt="leaves instagram post" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <img src={insta4} alt="Vegetables instagram post" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <img src={insta5} alt="Leaves instagram post" />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/">
              <img src={insta6} alt="Slice Fruits instagram post" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
