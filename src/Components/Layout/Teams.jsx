import "../CSS/About.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import JennyWilson from "../Assets/Teams/Jenny_Wilson.png";
import JaneCooper from "../Assets/Teams/Jane_Cooper.png";
import CodyFisher from "../Assets/Teams/Cody_Fisher.png";
import RobertFox from "../Assets/Teams/Robert_Fox.png";
import Facebook from "../Assets/facebook_logo.png";
import Twitter from "../Assets/twitter_logo.png";
import Pinterest from "../Assets/pinterest_logo.png";
import Instagram from "../Assets/instagram_logo.png";

const Teams = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="About_Section_Team">
      <Carousel responsive={responsive}>
        <div>
          <div className="About_Team_Card">
            <div className="About_Team_Profile">
              <div className="About_Team_Picture">
                <img src={JennyWilson} alt="Jenny Wilson image" />
              </div>
              <div className="About_Team_Links">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={Facebook} alt="facebook logo" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={Twitter} alt="twitter logo" />
                </a>
                <a href="https://www.pinterest.ph">
                  <img src={Pinterest} alt="pinterst logo" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={Instagram} alt="instagram logo" />
                </a>
              </div>
            </div>
            <div className="About_Team_Information">
              <p className="About_Team_Name">Jenny Wilson</p>
              <p className="About_Team_Work">Ceo & Founder</p>
            </div>
          </div>
        </div>
        <div>
          <div className="About_Team_Card">
            <div className="About_Team_Profile">
              <div className="About_Team_Picture">
                <img src={JaneCooper} alt="Jane Cooper image" />
              </div>
              <div className="About_Team_Links">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={Facebook} alt="facebook logo" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={Twitter} alt="twitter logo" />
                </a>
                <a href="https://www.pinterest.ph">
                  <img src={Pinterest} alt="pinterst logo" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={Instagram} alt="instagram logo" />
                </a>
              </div>
            </div>
            <div className="About_Team_Information">
              <p className="About_Team_Name">Jane Cooper</p>
              <p className="About_Team_Work">Worker</p>
            </div>
          </div>
        </div>
        <div>
          <div className="About_Team_Card">
            <div className="About_Team_Profile">
              <div className="About_Team_Picture">
                <img src={CodyFisher} alt="Cody Fisher Image" />
              </div>
              <div className="About_Team_Links">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={Facebook} alt="facebook logo" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={Twitter} alt="twitter logo" />
                </a>
                <a href="https://www.pinterest.ph">
                  <img src={Pinterest} alt="pinterst logo" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={Instagram} alt="instagram logo" />
                </a>
              </div>
            </div>
            <div className="About_Team_Information">
              <p className="About_Team_Name">Cody Fisher</p>
              <p className="About_Team_Work">Security Guard</p>
            </div>
          </div>
        </div>
        <div>
          <div className="About_Team_Card">
            <div className="About_Team_Profile">
              <div className="About_Team_Picture">
                <img src={RobertFox} alt="Robert Fox Image" />
              </div>
              <div className="About_Team_Links">
                <a href="https://www.facebook.com" target="_blank">
                  <img src={Facebook} alt="facebook logo" />
                </a>
                <a href="https://www.twitter.com">
                  <img src={Twitter} alt="twitter logo" />
                </a>
                <a href="https://www.pinterest.ph">
                  <img src={Pinterest} alt="pinterst logo" />
                </a>
                <a href="https://www.instagram.com">
                  <img src={Instagram} alt="instagram logo" />
                </a>
              </div>
            </div>
            <div className="About_Team_Information">
              <p className="About_Team_Name">Robert Fox</p>
              <p className="About_Team_Work">Senior</p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Teams;
