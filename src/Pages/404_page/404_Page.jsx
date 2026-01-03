import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white px-6">
      <div className="text-center max-w-xl">
        
        {/* 404 Number */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold text-[#1076BC] leading-none drop-shadow-lg">
          404
        </h1>

        {/* Text */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-4">
          Oops! Page Not Found
        </h2>
        <p className="text-gray-500 mt-3">
          The page you’re looking for doesn’t exist or has been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <Link
            to="/"
            className="px-6 py-3 bg-[#1076BC] text-white rounded-lg font-semibold hover:bg-[#1076BC] transition"
          >
            Go Back Home
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 border border-[#1076BC] text-[#1076BC]/90 rounded-lg font-semibold hover:bg-[#1076BC]transition"
          >
            Contact Support
          </Link>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
