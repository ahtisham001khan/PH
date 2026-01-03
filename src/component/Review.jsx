"use client";
import React, { useEffect, useState } from "react";
import TestmonialBanner from "../assets/images/Review-banner.webp";

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  // 🧩 Replace these two with your actual values
  const placeId = "ChIJjyUx3DJxTDkR1LwM3iWOV7Y"; // e.g. ChIJrTLr-GyuEmsRBfy61i59si0
  const apiKey = "AIzaSyB_n2cXlX8FNTVQRgWnToT1-4K-J3-Mzbk"; // from Google Cloud Console

  useEffect(() => {
   const proxyUrl = "https://corsproxy.io/?";
const googleUrl = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,reviews,user_ratings_total&key=${apiKey}`;
fetch(proxyUrl + encodeURIComponent(googleUrl))

      .then((res) => res.json())
      .then((data) => {
        if (data?.result?.reviews) {
          setReviews(data.result.reviews);
        } else {
          console.warn("No reviews found or invalid API response:", data);
        }
      })
      .catch((err) => console.error("Error fetching reviews:", err));
  }, []);

  return (
    <section className="bg-gray-50 py-12 px-6"
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${TestmonialBanner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
 <div className="text-center px-4 sm:px-6 md:px-10 lg:px-20">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
    Discover What Our Students Say
  </h2>
  <div className="w-20 h-[2px] bg-white mx-auto mb-4 rounded-full"></div>
  <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-white/80">
    Student Reviews
  </h3>
</div>



      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.length > 0 ? (
          reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              <p className="text-gray-600 mb-4 italic">
                “{review.text.slice(0, 200)}...”
              </p>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-800">
                  {review.author_name}
                </h3>
                <span className="text-yellow-500 font-bold">
                  {review.rating}★
                </span>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">Loading reviews...</p>
        )}
      </div>
    </section>
  );
};

export default GoogleReviews;
