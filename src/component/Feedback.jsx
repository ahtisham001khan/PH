import React from "react";
import Button from "./Button";

const Feedback = () => {
  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white via-blue-50/60 to-blue-100 text-gray-700">
      <div className="max-w-5xl mx-auto text-center bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
        <h5 className="text-[#1076BC] font-semibold uppercase tracking-wide mb-2 text-sm\ sm:text-base">
          Your Feedback Matters to Us
        </h5>

        <div className="w-16 h-[3px] bg-[#1076BC] mx-auto mb-4 rounded-full"></div>

        <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-gray-900 mb-4">
          Complain and Suggestion
        </h2>

        <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base md:text-md">
          At the Institute of Pixxelhouse, we are committed to providing the best learning experience for our students. We value your feedback and attempt to continuously improve our courses and curriculum. If you have any concerns or suggestions about the courses, the skills being taught, or any other aspect of your experience, please use our Complain Box to share your thoughts. Our goal is to ensure that every student receives the highest quality education and support. Whether it’s about the teaching methods, course content, or any other service, your input helps us make the necessary adjustments to meet your expectations. We believe that open communication is key to maintaining the best standards in education.
        </p>

        <p className="text-gray-600 leading-relaxed mb-8 text-sm sm:text-base md:text-md">
          The Institute of Pixxelhouse is dedicated to addressing your concerns promptly. Your complaints are taken seriously, and we work active to resolve any issues that may arise. We aim to create a positive and productive learning environment where every student can prosperous and develop their skills effectively. Thank you for helping us maintain the excellence of our courses and curriculum. Your feedback is invaluable in our pursuit of delivering the best educational experience. Please fill out the form below, and we will get back to you as soon as possible.
        </p>

        <div className="flex justify-center text-[14px]">
          <Button text="Complain and Suggestion" />
        </div>
      </div>
    </section>
  );
};
export default Feedback;