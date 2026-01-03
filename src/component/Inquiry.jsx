import React from "react";
import Button from "./Button";

const InquirySection = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white via-blue-50/60 to-blue-100 text-gray-700">
      <div className="max-w-5xl mx-auto text-center bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
        <h5 className="text-[#1076BC] font-semibold uppercase tracking-wide mb-2 text-sm sm:text-base">
          Complete Your Admission Form Now
        </h5>

        <div className="w-16 h-[3px] bg-[#1076BC] mx-auto mb-4 rounded-full"></div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Inquiry Form
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-lg">
          We are thrilled that you are interested in our courses and skill development programs. Whether you are looking to enhance your expertise in designing, development, Amazon strategies, SEO, digital marketing, AutoCAD, or audio video editing.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base md:text-lg">
         To help us better understand your needs and provide you with the best possible assistance, please fill out the inquiry form below. By submitting this form, you will receive detailed information about our courses, including curriculum details, enrollment procedures, and any other queries you may have. Learn from experienced professionals who provide personalized guidance and support. Fill out the inquiry form now and start your journey to skill enhancement and professional growth! 
        </p>

        <div className="flex justify-center">
          <Button text="Click For Admission" />
        </div>
      </div>
    </section>
  );
};

export default InquirySection;
