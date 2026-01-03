import React, { useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import AOS from "aos";
import "aos/dist/aos.css";

import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/footer";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About/About"; 
import ContactPage from "./Pages/Contact/Contact";
import Blog from "./Pages/Blogs/Blogs_page";
import NotFound from "./Pages/404_page/404_Page";
import BlogDetails from "./Pages/Blogs/blog-details";
import InternshipPage from "./Pages/Internship/Internship";
import CoursesPage from "./Pages/Courses/Courses";
import Courses_details_Page from "./Pages/Courses/Courses_details_Page";
import ScrollToTop from "./component/Scroll_Top";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
    <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/Courses" element={< CoursesPage />}/>
        <Route path="/Internship" element={<InternshipPage/>} />
        <Route path="/Blogs" element={<Blog/>} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Other Pages */}
        <Route path="/blog-details" element={<BlogDetails/>} />
        <Route path="/Courses_details_Page" element={<Courses_details_Page/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
