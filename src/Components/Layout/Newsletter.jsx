import { useState } from "react";
import "../CSS/Newsletter.css";

import Newsletter_Picture from "../Assets/Newsletter_Picture.png";

const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div>
        {isOpen && (
          <div className="Newsletter_popup">
            <div className="Popup_Content">
              <div className="Popup_Picture">
                <img src={Newsletter_Picture} alt="Newsletter pictureb" />
              </div>
              <div className="Popup_Information">
                <div className="Popup_Close">
                  <p onClick={handleClose}>x</p>
                </div>
                <p className="Popup_Title">
                  Subscribe to Our <br />
                  Newsletter
                </p>
                <p className="Popup_Description">
                  Subscribe to our newsletter and Save your{" "}
                  <span className="Yellow">
                    20% <br /> money{" "}
                  </span>{" "}
                  with discount code today
                </p>
                <div className="Newsletter_Subscribe">
                  <input type="text" placeholder="Enter your email" />
                  <button className="Btn-Fill Btn-Small">Subscribe</button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
