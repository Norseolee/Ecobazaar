import Error404 from "../../Assets/Errors/Error404.png";

import { Link } from "react-router-dom";
import "../../CSS/Error_404.css";

const Eror_404 = () => {
  return (
    <div>
      <div className="Error_Base">
        <div>
          <img className="Picture_Display" src={Error404} alt="" />
        </div>
        <div>
          <h1>Oops! page not found</h1>
          <p className="Color_Gray">
            It Looks like that page doesn't exist - please check the URL and try
            again.
          </p>
        </div>
        <div>
          <Link to="/">
            <button className="Back-btn">Back to Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Eror_404;
