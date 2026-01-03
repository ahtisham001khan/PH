import React, { useState } from "react";
import Button from "./Button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-10 lg:px-20 bg-gradient-to-b from-white via-blue-50/60 to-blue-100 text-gray-700">
      <div className="max-w-5xl mx-auto text-center bg-transparent backdrop-blur-sm shadow-lg rounded-2xl p-6 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
        <h5 className="text-[#1076BC] font-semibold uppercase tracking-wide mb-2 text-sm sm:text-base">
          Always There For You
        </h5>

        <div className="w-16 h-[3px] bg-[#1076BC] mx-auto mb-4 rounded-full"></div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Contact Us
        </h2>

        {submitted && (
          <div className="mb-6 text-green-600 font-medium animate-fade-in">
             Message sent successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 text-left"
        >
          <div className="sm:col-span-1">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1076BC] outline-none bg-white/60 placeholder-gray-500 text-gray-800 transition-all"
            />
          </div>

          <div className="sm:col-span-1">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1076BC] outline-none bg-white/60 placeholder-gray-500 text-gray-800 transition-all"
            />
          </div>

          <div className="sm:col-span-2">
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1076BC] outline-none bg-white/60 placeholder-gray-500 text-gray-800 transition-all"
            />
          </div>

          <div className="sm:col-span-2">
            <textarea
              name="message"
              placeholder="Your Message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full border border-[#1076BC]/40 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#1076BC] outline-none bg-white/60 placeholder-gray-500 text-gray-800 transition-all resize-none"
            ></textarea>
          </div>

          <div className="sm:col-span-2 text-center mt-4">
            <Button text="Send Message" type="submit" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
