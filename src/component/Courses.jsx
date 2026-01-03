import React from "react";
import courseBanner from "../assets/images/Course-banner.webp";

const courses = [
  {
    id: "01",
    icon: "fa-solid fa-code",
    title: "Website Designing/Development",
    desc: "The IPH offers courses in website design/development covering HTML, CSS, PHP, MySQL, and CMS. Learn basic to advanced skills to build and manage dynamic websites effectively.",
  },
  {
    id: "02",
    icon: "fa-solid fa-pencil-ruler",
    title: "Graphic Designing",
    desc: "Take your design abilities to the next level with our Intermediate Course. This 6-month program is tailored for students who want more depth, technical skill, and a portfolio that speaks for itself.",
  },
  {
    id: "03",
    icon: "fa-brands fa-amazon",
    title: "Amazon",
    desc: "Our Amazon course is designed to provide you with the skills needed to succeed on Amazon. Learn how to optimize product listings, manage inventory, and implement marketing strategies to boost your sales.",
  },
  {
    id: "04",
    icon: "fa-solid fa-rocket",
    title: "Digital Marketing",
    desc: "IPH offers an in-depth digital marketing curriculum that focuses on SEO strategies and SEM tactics. Our program provides individuals with the knowledge and resources needed to improve their digital marketing strategies.",
  },
  {
    id: "05",
    icon: "fa-solid fa-video",
    title: "Video Editing",
    desc: "In today’s digital world, video content rules every platform—from YouTube and Instagram to businesses and brands. At IPH Institute, our 4-Month Video Editing Course is designed to turn you into a skilled video editor ready to take on professional projects.",
  },
  {
    id: "06",
    icon: "fa-solid fa-mobile",
    title: "3D Animation",
    desc: "IPH offers an advanced 3D Animation course, providing industry professionals with hands-on experience in modeling, rigging, and animation with the latest tools and techniques to bring creative visions to life.",
  },
  {
    id: "07",
    icon: "fa-solid fa-computer",
    title: "CIT – Certificate in Information Technology",
    desc: "The 6-month CIT course at IPH Institute builds strong IT skills, covering computer basics, advanced office tools, internet use, and introductory programming—ideal for launching your tech journey.",
  },
  {
    id: "08",
    icon: "fa-solid fa-chart-line",
    title: "Forex Trading",
    desc: "Start earning from financial markets with IPH’s 1-month Forex Trading Course—perfect for beginners aiming to build a strong foundation in currency trading and kickstart their trading journey.",
  },
  {
    id: "09",
    icon: "fa-solid fa-cube",
    title: "UI/UX Design",
    desc: "Join IPH’s 3-month UI/UX Design course to gain practical skills in creating standout websites, apps, and digital products—perfect for aspiring designers, developers, and creative thinkers.",
  },
];
export default function JobOrientedCourses() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${courseBanner})`,
      }}
    >
      {/* ✅ Main Container */}
      <div className="max-w-7xl mx-auto py-14 sm:py-16 px-5 sm:px-8 md:px-12 lg:px-16">

        {/* ✅ Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Job Oriented <span className="text-[#1076BC]">Courses</span>
          </h2>
          <p className="text-white mt-3 text-sm sm:text-base md:text-lg max-w-3xl mx-auto">
            Choose from a Variety of In-Demand Courses at the Institute of Pixxelhouse
          </p>
        </div>

        {/* ✅ Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 justify-items-center">
          {courses.map((item, index) => (
            <div
              key={index}
              className="group w-full sm:w-[95%] bg-white shadow-[0px_0px_15px_rgba(0,0,0,0.09)]
              p-6 sm:p-8 space-y-3 relative overflow-hidden rounded-2xl 
              transform transition-all duration-700 ease-in-out hover:bg-[#1076BC] hover:-translate-y-1"
            >
              {/* ✅ Circle */}
              <div
                className="w-20 h-20 sm:w-24 sm:h-24 bg-[#1076BC] rounded-full absolute 
                -right-4 sm:-right-5 -top-5 sm:-top-7 
                transition-all duration-700 ease-in-out group-hover:bg-white"
              >
                <p className="absolute bottom-5 left-6 sm:left-7 text-white text-xl font-semibold 
                transition-all duration-700 ease-in-out group-hover:text-[#1076BC]">
                  {item.id}
                </p>
              </div>

              {/* ✅ Icon */}
              <div className="text-[#1076BC] text-[30px] transition-all duration-700 group-hover:text-white">
                <i className={item.icon}></i>
              </div>

              {/* ✅ Text */}
              <h1 className="font-bold text-lg sm:text-xl text-gray-800 transition-all duration-700 group-hover:text-white">
                {item.title}
              </h1>

              <p className="text-sm sm:text-base text-gray-800 leading-6 transition-all duration-700 group-hover:text-gray-100">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
