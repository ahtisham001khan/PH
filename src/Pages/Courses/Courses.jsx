import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section_head } from '../../component/Section_head'

const courses = [
  { id: "01", icon: "fa-solid fa-code", title: "Website Development", desc: "The IPH offers courses in website design/development covering HTML, CSS, PHP, MySQL, and CMS. Learn basic to advanced skills to build and manage dynamic websites effectively.", category: "Web Development" },
  { id: "02", icon: "fa-solid fa-code", title: "Full Stack Web Development", desc: "The IPH offers courses in website design/development covering HTML, CSS, PHP, MySQL, and CMS. Learn basic to advanced skills to build and manage dynamic websites effectively.", category: "Web Development" },
  { id: "03", icon: "fa-solid fa-code", title: "Mern Stack Web Development", desc: "The IPH offers courses in website design/development covering HTML, CSS, PHP, MySQL, and CMS. Learn basic to advanced skills to build and manage dynamic websites effectively.", category: "Web Development" },
  { id: "04", icon: "fa-solid fa-mobile-screen-button", title: "Application Development", desc: "Learn how to create your own mobile apps from scratch. This course teaches you how to design, build, and launch apps for Android and iOS, without needing any prior coding experience.", category: "App Development" },
  { id: "05", icon: "fa-solid fa-video", title: "Professional Video Editing Course", desc: "Institute of Professional Horizons (IPH) proudly offers a comprehensive 8-month Video Editing Course with Internship, designed to turn your creativity into a career. Whether you dream of working in film, digital media, YouTube, or freelancing, this course gives you all the tools you need to succeed.", category: "Video Editing" },
  { id: "06", icon: "fa-solid fa-video", title: "Video Editing Course", desc: "In today’s digital world, video content rules every platform—from YouTube and Instagram to businesses and brands. At IPH Institute, our 4-Month Video Editing Course is designed to turn you into a skilled video editor ready to take on professional projects.", category: "Video Editing" },
  { id: "07", icon: "fa-solid fa-cube", title: "Advance 3D Animation", desc: "Institute of Professional Horizons (IPH) proudly offers a comprehensive 8-month Video Editing Course with Internship, designed to turn your creativity into a career. Whether you dream of working in film, digital media, YouTube, or freelancing, this course gives you all the tools you need to succeed.", category: "3D Animation" },
  { id: "08", icon: "fa-solid fa-cube", title: "3D Animation", desc: "In today’s digital world, video content rules every platform—from YouTube and Instagram to businesses and brands. At IPH Institute, our 4-Month Video Editing Course is designed to turn you into a skilled video editor ready to take on professional projects.", category: "3D Animation" },
  { id: "09", icon: "fa-solid fa-pencil-ruler", title: "UI/UX Designing", desc: "In today’s digital world, video content rules every platform—from YouTube and Instagram to businesses and brands. At IPH Institute, our 4-Month Video Editing Course is designed to turn you into a skilled video editor ready to take on professional projects.", category: "UI/UX Designing" },
];

const categories = [
  "All", "Web Development", "App Development", "Video Editing", 
  "3D Animation", "UI/UX Designing","Graphics designing","E-Commerce","CIT","Forex Trading","SMM & SEO"
];

export default function CoursePage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 6;

  // Filter courses by selected category
  const filteredCourses = courses.filter(course => 
    selectedCategory === "All" || course.category === selectedCategory
  );

  // Pagination logic
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
  const currentCourses = filteredCourses.slice(indexOfFirstCourse, indexOfLastCourse);
  const totalPages = Math.ceil(filteredCourses.length / coursesPerPage);

  // Handle category change -> reset page to 1
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-white">

      <Section_head Section_head={"Our Courses"} />

      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col lg:flex-row gap-6 lg:gap-8">

        {/* Categories */}
        <div className="lg:w-1/4 bg-white border border-gray-200 rounded-2xl p-6 shadow-sm flex-shrink-0">
          <h3 className="font-bold text-lg text-gray-800 mb-4 hidden lg:block">Categories</h3>

          {/* Mobile Pills */}
          <div className="flex flex-wrap gap-3 lg:hidden mb-4">
            {categories.map(cat => (
              <div
                key={cat}
                className={`py-2 px-4 rounded-full cursor-pointer text-sm transition-colors border ${selectedCategory === cat ? 'bg-[#1076BC] text-white border-[#1076BC]' : 'bg-gray-100 text-gray-700 border-gray-100'}`}
                onClick={() => handleCategoryChange(cat)}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* Desktop Vertical */}
          <div className="hidden lg:block">
            {categories.map(cat => (
              <div
                key={cat}
                className={`flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0 px-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors ${selectedCategory === cat ? 'font-semibold text-[#1076BC]' : 'text-gray-700'}`}
                onClick={() => handleCategoryChange(cat)}
              >
                <span>{cat}</span>
                <span className="text-[#1076BC] font-semibold">
                  {cat === "All" ? courses.length : courses.filter(c => c.category === cat).length}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Courses */}
        <div className="lg:flex-1 flex flex-wrap justify-center gap-6">
          {currentCourses.map(course => (
            <div
              key={course.id}
              className="group relative bg-white p-6 rounded-2xl shadow-lg flex flex-col w-full sm:w-[48%] lg:w-[30%] min-h-[360px] transition-all duration-500 hover:bg-[#1076BC] hover:-translate-y-2"
            >
              {/* Badge */}
              <div className="absolute -top-[-10px] -right-[-10px] bg-[#1076BC] px-3 py-1 rounded-full text-xs font-semibold text-white transition-all duration-500 group-hover:bg-white group-hover:text-[#1076BC] whitespace-nowrap">
                {course.category}
              </div>

              {/* Icon */}
              <div className="text-[#1076BC] text-4xl mb-2 transition-colors duration-500 group-hover:text-white">
                <i className={course.icon}></i>
              </div>

              {/* Title */}
              <h3 className="text-base md:text-lg font-bold text-gray-800 group-hover:text-white transition-colors">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm md:text-base text-gray-800 group-hover:text-gray-200 mt-2 line-clamp-4 flex-1">
                {course.desc}
              </p>

              {/* Button */}
              <Link
                to={"/Courses_details_Page"}
                className="mt-4 inline-block text-white py-2 px-4 rounded-lg font-semibold bg-[#1076BC] group-hover:bg-white group-hover:text-[#1076BC] transition-colors text-center w-full"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="max-w-7xl mx-auto px-4 py-12 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          className="w-12 h-12 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center justify-center cursor-pointer"
        >
          ←
        </button>

        {[...Array(totalPages)].map((_, index) => {
          const page = index + 1;
          return (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`w-12 h-12 rounded-xl flex items-center justify-center cursor-pointer transition-colors ${page === currentPage ? "bg-[#1076BC] text-white shadow-md" : "border border-gray-300 hover:bg-gray-50"}`}
            >
              {page}
            </button>
          );
        })}

        <button
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          className="w-12 h-12 border border-gray-300 rounded-xl hover:bg-gray-50 flex items-center justify-center cursor-pointer"
        >
          →
        </button>
      </div>
    </div>
  );
}
