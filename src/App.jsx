import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./Components/Pages/Homepage";
import Error_404 from "./Components/Pages/Error/Error_404";
import FAQ from "./Components/Pages/FAQ";
import Sign_in from "./Components/Layout/Sign_in";
import Sign_up from "./Components/Layout/Sign_up";
import User_Page from "./Components/Pages/User_Page";
import Navigations from "./Components/Layout/Navigations";
import Footer from "./Components/Layout/Footer";
import Contact from "./Components/Pages/Contact";
import About from "./Components/Pages/About";
import BlogList from "./Components/pages/Bloglist";



const App = () => {
  return (
    <BrowserRouter>
      <Navigations />
      <Routes>
        {/* Sign up and Sign in */}
        <Route path="/sign-in" element={<Sign_in />} />
        <Route path="/sign-up" element={<Sign_up />} />

        {/* Pages */}
        <Route path="/" element={<Homepage />} />
        <Route path="/user/*" element={<User_Page />} />
       

        {/* Ecobazaar */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/blog-list" element={<BlogList />} />

        {/* Error */}
        <Route path="*" element={<Error_404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
