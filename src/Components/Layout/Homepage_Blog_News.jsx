import LabelPicture from "../Assets/Icons/label_Gray.svg";
import UserPicture from "../Assets/Icons/User_Gray.svg";
import ChatPicture from "../Assets/Icons/Chat_Gray.svg";

import BlogPicture from "../Assets/Homepage/blog/Blog_picture.png";
import BlogPicture2 from "../Assets/Homepage/blog/Blog_picture_3.png";
import BlogPicture3 from "../Assets/Homepage/blog/Blog_picture_2.png";

import ArrowRight from "../Assets/Icons/Right_Arrow.png";
 
import { Link } from "react-router-dom";

const Blog = [
    {
        picture: BlogPicture,
        day: "18",
        month: 'NOV',
        label: 'Food',
        user: 'By Admin',
        comment: '65 Comments',
        title: 'Orange Zest: A Citrus Symphony in a World of Fruits',
        link: 1,
    },
    {
        picture: BlogPicture2,
        day: "29",
        month: 'JAN',
        label: 'Food',
        user: 'By Admin',
        comment: '65 Comments',
        title: 'Egg-cellent Eats: A Delightful Journey into the World of Boiled Eggs and Fresh Salads',
        link: 2,
    },
    {
        picture: BlogPicture3,
        day: "21",
        month: 'FEB',
        label: 'Food',
        user: 'By Admin',
        comment: '65 Comments',
        title: 'Green Goodness: Unveiling the Health Benefits of Salads and Vegetables',
        link: 3,
    },

]

const BlogList = () => {
    return (
        <div>
            {Blog.map(blog => (
                <Homepage_Blog_News 
                    key={blog.name}
                    name={blog.name}
                    label={blog.label}
                    user={blog.user}
                    day={blog.day}
                    month={blog.month}
                    comment={blog.comment}
                    title={blog.title}
                    link={blog.link}
                    picture={blog.picture}
                />
            ))}
        </div>
    )
}


const Homepage_Blog_News = ({picture, day, month, label, user, comment, title, link}) => {
  return (
    <div>
      <div className="Blog_Card_Image">
        <img src={picture} alt={`${picture} photo`} />
        <div>
          <p>{day}</p>
          <p className="Color_Gray">{month}</p>
        </div>
      </div>
      <div className="Blog_Card_Info">
        <div className="Blog_Card_Details">
          <div className="Blog_Card_Labels">
            <div>
              <img src={LabelPicture} alt="Label Picture" />
              <p>{label}</p>
            </div>
            <div>
              <img src={UserPicture} alt="User logo" />
              <p>{user}</p>
            </div>
            <div>
              <img src={ChatPicture} alt="Comment Logo" />
              <p>{comment}</p>
            </div>
          </div>
          <div className="Blog_Card_Title">
            <h4>{title}</h4>
          </div>
        </div>
        <div className="Blog_Card_Read_More">
          <Link to={`/${link}`} className="Btn">
            <p className="Btn">Read More </p>
            <img src={ArrowRight} className="Arrow" alt="Arrow Right Icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BlogList