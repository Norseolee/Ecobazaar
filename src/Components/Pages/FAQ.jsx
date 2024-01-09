import React from "react";
import FAQImage from "../Assets/FAQ_Image.png";
import "../CSS/FAQ.css";

const FAQ = () => {
  return (
    <>
      <div className="FAQ_Base">
        <div>
          <div>
            <h1>
              Welcome, Let's Talk
              <br />
              About Our Ecobazaar
            </h1>
          </div>
          <div>QandA</div>
        </div>
        <div>
          <img
            className="Display_Picture"
            src={FAQImage}
            alt="Farmer with Bucket of Vegies"
          />
        </div>
      </div>
    </>
  );
};

export default FAQ;
