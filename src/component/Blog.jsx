"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import BlogBanner from "../assets/images/Blog-banner.webp";
import Blog1 from "../assets/images/blog(3).webp";
import Blog2 from "../assets/images/blog(2).webp";
import Blog3 from "../assets/images/blog(1).webp";
import { Link } from "react-router-dom";
const events = [
  {
    title: "Introduction to Digital Marketing: Powering Your Business in the Online…",
    description:
      "Digital Marketing is the practice of promoting products or services using digital channels like search engines, social media, email, and websites. It…",
    image: Blog1,
  },
  {
    title: "The Power of Good Design: Why Graphic Design Matters in…",
    description:
      "In a world where people scroll faster than ever, first impressions are made in seconds—and graphic design is what makes those seconds…",
    image: Blog2,
  },
  {
    title: "Why Every Business Needs a Professional Website in 2025",
    description:
      "In today’s fast-paced digital world, your online presence matters more than ever. Whether you’re running a small local shop or a global…",
    image: Blog3,
  },
];

const Blog = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(2);
  const autoSpeed = 4000;

  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 1024) setCardsToShow(1); // mobile + tablet
      else setCardsToShow(2); // desktop
    };
    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

 
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, autoSpeed);
    return () => clearInterval(interval);
  });

  const nextSlide = () => {
    const maxIndex = events.length - cardsToShow;
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = events.length - cardsToShow;
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  useEffect(() => {
    if (sliderRef.current) {
      const offset = currentIndex * (sliderRef.current.clientWidth / cardsToShow);
      sliderRef.current.scrollTo({ left: offset, behavior: "smooth" });
    }
  }, [currentIndex, cardsToShow]);

  return (
    <section
      className="py-14 relative"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.5)), url(${BlogBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Heading */}
        <div className="mb-10 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Creative Insights
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div ref={sliderRef} className="flex gap-4-x sm:gap-4-x md:gap-4-x lg:gap-4    overflow-x-hidden scroll-smooth">
            {events.map((event, index) => (
              <div
                key={index}
                className={`group bg-white rounded-3xl shadow-md overflow-hidden border border-blue-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 flex flex-col sm:flex-row-reverse
                ${
                  cardsToShow === 1
                    ? "min-w-full"
                    : "min-w-[calc(50%-0.75rem)]"
                }`}
              >
                {/* Image on Right */}
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full sm:w-1/2 object-cover h-56 sm:h-auto transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Content on Left */}
                <div className="p-6 flex flex-col justify-between w-full sm:w-1/2">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mt-1 transition-colors duration-300 group-hover:text-[#1076BC]">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-2 text-[#1076BC] font-medium group cursor-pointer">
                    <Link to="/blog-details"  className="text-sm sm:text-base  transition-all">
                      Learn More
                    </Link>
                    <i className="fa-solid fa-arrow-right transform transition-transform duration-300 group-hover:translate-x-1"></i>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows (hidden on small screens) */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-[-45px] top-1/2 -translate-y-1/2 text-white bg-[#1076BC] hover:bg-[#0d5f96] p-3 rounded-full shadow-md transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-[-45px] top-1/2 -translate-y-1/2 text-white bg-[#1076BC] hover:bg-[#0d5f96] p-3 rounded-full shadow-md transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
