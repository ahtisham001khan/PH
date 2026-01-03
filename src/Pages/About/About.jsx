import React from "react";
import { Section_head } from "../../component/Section_head";
import Testmonial from "../../component/Testmonial";
import InquirySection from "../../component/Inquiry";

import aboutImg from "../../assets/images/about.webp";
import Button from "../../component/Button";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const AboutPage = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  const stats = [
    { number: 325000, label: "Students Enrolled", suffix: "K+" },
    { number: 12000, label: "Active Courses", suffix: "K+" },
    { number: 310, label: "Countries Reached", suffix: "+" },
    { number: 580, label: "Awards Earned", suffix: "+" },
  ];

  return (
    <div>
      <Section_head />

      {/* About Section */}
      <section className="w-full text-gray-700 lg:py-15 md:py-12 sm:py-10 py-8 bg-gradient-to-b from-white via-blue-50/60 to-blue-100">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-5 sm:px-8 md:px-10">
          <div className="w-full lg:w-1/2 space-y-3 text-center lg:text-left">
            <p className="text-[#1076BC] text-[18px] sm:text-[20px] font-semibold">About Us</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Welcome to <span className="text-[#1076BC]">Institute Of Pixxel House</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
              At the Institute of Pixxelhouse! We specialize in providing excellent courses in designing, development, Amazon strategies, SEO, Digital Marketing, AutoCAD, and Audio Video Editing. Our aim is to equip you with the essential skills needed to be skillful in today’s competitive job market. With a focus on practical learning and industry-relevant techniques, our expert instructors guide you through every step of your educational journey. Join us at Pixxelhouse and advance your career with our comprehensive training programs.
            </p>
            <Button text="Explore Courses" />
          </div>

          <div className="w-full lg:w-[45%] flex justify-center lg:justify-start">
            <img
              src={aboutImg}
              alt="About Illustration"
              className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[60%] mx-auto max-w-md md:max-w-lg lg:max-w-none object-contain animate-fadeInUp"
            />
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
     <section className="w-full bg-white">
  <div className="max-w-7xl mx-auto py-10 sm:py-14 md:py-16 lg:py-20 px-6 sm:px-8 md:px-16 lg:px-24 text-center">

    <h5 className="text-[#1076BC] font-semibold uppercase tracking-wide mb-2 text-sm sm:text-base">
      Our Impact
    </h5>

    <div className="w-16 h-[3px] bg-[#1076BC] mx-auto mb-4 rounded-full"></div>

    <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-12">
      Empowering Learners Worldwide
    </h2>

    <div
      ref={ref}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
    >
      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-white p-4 sm:p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-all"
        >
          <h1 className="text-3xl lg:text-4xl xl:text-4xl font-bold text-[#1076BC] leading-tight">
            <CountUp
              start={inView ? 0 : item.number}
              end={inView ? item.number : 0}
              duration={2}
              separator=","
              suffix={item.suffix}
              redraw={true}
            />
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium mt-2 leading-snug">
            {item.label}
          </p>
        </div>
      ))}
    </div>

  </div>
</section>



      <section className="w-full bg-gradient-to-b from-white via-blue-50/60 to-blue-100">
  <div className="max-w-7xl mx-auto py-10 sm:py-12 md:py-16 px-6 sm:px-8 md:px-16 lg:px-24 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-10">
      Our Mission & Vision
    </h2>

    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#1076BC] mb-3">Our Mission</h3>
        <p className="text-gray-700">
          To provide skill-based, practical training in digital and creative fields, empowering students to succeed globally.
        </p>
      </div>

      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow hover:shadow-md transition">
        <h3 className="text-xl font-semibold text-[#1076BC] mb-3">Our Vision</h3>
        <p className="text-gray-700">
          To become the leading institute for digital and creative learning, connecting students with opportunities worldwide.
        </p>
      </div>

    </div>

  </div>
</section>


      <Testmonial />
      <InquirySection />

    </div>
  );
};

export default AboutPage;
