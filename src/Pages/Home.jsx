import React from 'react'
import Hero from '../component/Hero'
import About from "../component/About";
import Courses from "../component/Courses";
import InquirySection from "../component/Inquiry";
import Testimonials from "../component/Testmonial";
import Feedback from "../component/Feedback";
import Contact from "../component/Contact";
import GoogleReviews from "../component/Review";
import Blog from "../component/Blog";
import FAQ from "../component/FAQ";

const Home = () => {
    return (
        <div>
            <Hero />
            <About />
            <Courses />
            <InquirySection />
            <Testimonials />
            <Feedback />
            <GoogleReviews />
            <Contact />
            <Blog />
            <FAQ />
        </div>
    )
}

export default Home