import React from "react";
import { FaCheckCircle, FaCircle, FaHashtag, FaClock, FaProjectDiagram, FaArrowRight } from "react-icons/fa";

const Courses_details_Page = () => {
  const courseModules = [
    { title: "HTML - The Foundation of Web", topics: ["HTML5 Elements & Structure", "Semantic HTML", "Forms & Input Types", "Tables & Lists", "Basic SEO Concepts"], duration: "2 Weeks", projects: "Personal Portfolio Page" },
    { title: "CSS - Styling & Design", topics: ["CSS Selectors & Properties", "Box Model & Positioning", "Flexbox & Grid", "Responsive Design", "CSS Animations"], duration: "3 Weeks", projects: "Responsive E-commerce Layout" },
    { title: "Bootstrap - Fast Development", topics: ["Grid System", "Components", "Navigation Bars & Menus", "Cards & Modals", "Custom Themes"], duration: "1.5 Weeks", projects: "Admin Dashboard UI" },
    { title: "JavaScript - Interactive Websites", topics: ["Variables & Data Types", "Functions & Events", "DOM Manipulation", "ES6+ Features", "API Calls"], duration: "4 Weeks", projects: "Weather App, Todo App" },
    { title: "PHP - Backend Development", topics: ["Syntax & Basics", "Form Handling", "Sessions & Cookies", "File Handling", "DB Connection"], duration: "3 Weeks", projects: "Contact Form with Email" },
    { title: "MySQL - Database Management", topics: ["DB Design", "SQL Queries", "CRUD Operations", "Joins & Relationships", "DB Security"], duration: "2 Weeks", projects: "User Management System" },
    { title: "React.js - Modern Web Apps", topics: ["Components & Props", "State & Hooks", "React Router", "API Integration", "State Management"], duration: "5 Weeks", projects: "E-commerce Frontend" },
    { title: "CMS - Content Management", topics: ["WordPress Basics", "Theme Development", "Plugins", "Joomla Basics", "Custom Post Types"], duration: "2 Weeks", projects: "Business Website with CMS" },
    { title: "Final Project - Real World", topics: ["Planning", "Frontend Dev", "Backend Integration", "Testing & Debugging", "Deployment & Hosting"], duration: "4 Weeks", projects: "Full Stack Web App" },
  ];

  const prerequisites = ["Basic Computer Knowledge", "Internet Skills", "English Understanding", "Motivation to Learn", "Time for Coding"];
  const whatYouWillLearn = ["Build Professional Websites", "Create Mobile Responsive Designs", "Manage Data with Databases", "Implement User Authentication", "Develop Portfolio Projects", "Gain Freelancing Skills"];
  const outcomes = ["Build Websites", "Frontend & Backend Dev", "Database Management", "Responsive Designs", "React Apps", "Real Projects", "Freelance Portfolio", "Job-Ready Skills"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white font-sans text-gray-800">

     {/* HEADER - Simple Hero Section */}
<header className="bg-gradient-to-r from-[#1076BC] to-[#0d5ea0] text-white py-12 sm:py-16">
  <div className="max-w-4xl mx-auto px-4 text-center">
    <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-6">
      <span className="text-sm font-medium">Beginner to Advanced</span>
    </div>
    
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
      Complete Web Development Masterclass
    </h1>
    
    <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
      Learn everything you need to become a professional web developer. Build real projects, create your portfolio, and launch your career.
    </p>
    
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="px-8 py-3 bg-white text-[#1076BC] font-bold rounded-lg shadow-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
        <span>Enroll Now</span>
        <FaArrowRight className="w-4 h-4" />
      </button>
    </div>
  </div>
</header>

      <main className="max-w-6xl mx-auto px-4 py-12 sm:py-16 space-y-24">

        {/* Curriculum + Sidebar Layout */}
        <section className="relative">
          <div className="grid lg:grid-cols-12 gap-8">

           {/* Left: Course Modules */}
<div className="lg:col-span-8">
  <div className="text-center mb-12 lg:text-left">
    <div className="inline-flex items-center gap-2 bg-[#1076BC]/10 text-[#1076BC] px-4 py-2 rounded-full mb-4 mx-auto lg:mx-0">
      <FaHashtag className="w-4 h-4" />
      <span className="font-semibold">Complete Curriculum</span>
    </div>
    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text bg-300% 300% animate-pulse">
      9 Comprehensive Modules
    </h2>
    <p className="text-gray-600 max-w-2xl lg:max-w-full mx-auto lg:mx-0">
      Master web development through structured learning with hands-on projects at every stage
    </p>
  </div>

  <div className="space-y-6">
    {courseModules.map((module, idx) => (
      <div key={idx} className="group relative">
        {/* Module Card */}
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-white/50 hover:border-[#1076BC]/20 overflow-hidden">
          
          {/* Decorative Background Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1076BC]/10 to-[#0d5ea0]/10 rounded-bl-full -translate-y-8 translate-x-8 group-hover:scale-110 transition-transform"></div>
          
          {/* Header Row */}
          <div className="relative z-10 flex items-start justify-between mb-6 gap-6">
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-[#1076BC] to-[#0d5ea0] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <span className="text-2xl font-bold text-white drop-shadow-md">{idx + 1}</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-[#1076BC] transition-colors line-clamp-2">
                  {module.title}
                </h3>
                <div className="flex items-center gap-6 mt-2">
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-xl backdrop-blur-sm">
                    <FaClock className="w-4 h-4 text-[#1076BC]" />
                    <span>{module.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-xl backdrop-blur-sm">
                    <FaProjectDiagram className="w-4 h-4 text-[#1076BC]" />
                    <span>{module.projects.split(',')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Indicator */}
            <div className="flex-shrink-0 w-3 h-3 bg-gradient-to-b from-[#1076BC]/30 to-[#0d5ea0]/30 rounded-full border-4 border-white group-hover:bg-[#1076BC] transition-all duration-500"></div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Project Highlight */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-[#1076BC]/5 to-[#0d5ea0]/5 p-6 rounded-2xl border border-[#1076BC]/10 hover:border-[#1076BC]/20 transition-all group-hover:scale-[1.02]">
                <h4 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-3">
                  <FaProjectDiagram className="w-5 h-5 text-[#1076BC] flex-shrink-0" />
                  Final Project
                </h4>
                <p className="text-gray-700 font-medium line-clamp-2">{module.projects}</p>
              </div>
            </div>

            {/* Topics List */}
            <div className="space-y-3">
              <h5 className="font-bold text-gray-900 text-sm uppercase tracking-wide flex items-center gap-2 mb-3">
                <span className="w-6 h-px bg-gradient-to-r from-[#1076BC] to-[#0d5ea0]"></span>
                Key Topics
                <span className="w-6 h-px bg-gradient-to-r from-[#1076BC] to-[#0d5ea0]"></span>
              </h5>
              <div className="space-y-2 max-h-40 overflow-hidden">
                {module.topics.slice(0, 4).map((topic, tid) => (
                  <div key={tid} className="group/item flex items-start gap-3 p-3 hover:bg-white/50 rounded-xl transition-all hover:pl-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-[#1076BC] to-[#0d5ea0] rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-transform"></div>
                    <span className="text-gray-700 text-sm leading-relaxed group-hover/item:text-[#1076BC] transition-colors">{topic}</span>
                  </div>
                ))}
                {module.topics.length > 4 && (
                  <div className="text-center py-3 text-sm text-gray-500 border-t border-gray-100 mt-4">
                    +{module.topics.length - 4} more topics
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Connector */}
        {idx < courseModules.length - 1 && (
          <div className="absolute left-8 lg:left-20 top-full w-px h-8 bg-gradient-to-b from-[#1076BC]/30 to-[#0d5ea0]/30"></div>
        )}
      </div>
    ))}
  </div>
</div>


            {/* Right: Sticky Sidebar */}
            <div className="lg:col-span-4 lg:sticky lg:top-24 space-y-8">
              {/* Prerequisites */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="inline-flex items-center gap-2 bg-[#1076BC]/10 text-[#1076BC] px-4 py-2 rounded-full mb-4">
                  <FaHashtag className="w-4 h-4" />
                  <span className="font-semibold">Requirements</span>
                </div>
                <div className="space-y-3">
                  {prerequisites.map((req, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <FaCheckCircle className="text-[#1076BC] w-5 h-5 flex-shrink-0" />
                      <span className="text-gray-800">{req}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Outcomes - NEW */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="inline-flex items-center gap-2 bg-[#1076BC]/10 text-[#1076BC] px-4 py-2 rounded-full mb-4">
                  <FaHashtag className="w-4 h-4" />
                  <span className="font-semibold">What You'll Learn</span>
                </div>
                <div className="space-y-3">
                  {whatYouWillLearn.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm hover:bg-[#1076BC]/5 transition-all">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#1076BC] to-[#0d5ea0] rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-white font-bold text-sm">{idx + 1}</span>
                      </div>
                      <span className="text-gray-800 font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg border border-gray-100">
                <div className="inline-flex items-center gap-2 bg-[#1076BC]/10 text-[#1076BC] px-4 py-2 rounded-full mb-4">
                  <FaHashtag className="w-4 h-4" />
                  <span className="font-semibold">Achievements</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {outcomes.map((item, idx) => (
                    <div key={idx} className="bg-white rounded-lg p-3 shadow-sm text-center flex flex-col items-center gap-2">
                      <FaCheckCircle className="text-[#1076BC] w-6 h-6" />
                      <p className="text-gray-800 text-sm font-semibold">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Final CTA Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1076BC] to-[#0d5ea0] opacity-5 rounded-3xl"></div>
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-[#1076BC]/10 text-[#1076BC] px-4 py-2 rounded-full mb-6">
                <FaHashtag className="w-4 h-4" />
                <span className="font-semibold">Limited Time Offer</span>
              </div>
              
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to Launch Your <span className="text-[#1076BC]">Tech Career</span>?
              </h3>
              
              <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                Join thousands of successful students who transformed their careers with our comprehensive web development program.
              </p>
              
              <div className="grid sm:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#1076BC] mb-2">10+</div>
                  <div className="text-gray-600">Real Projects</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#1076BC] mb-2">9</div>
                  <div className="text-gray-600">Comprehensive Modules</div>
                </div>
                <div className="text-center p-4">
                  <div className="text-3xl font-bold text-[#1076BC] mb-2">100%</div>
                  <div className="text-gray-600">Practical Learning</div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-10 py-4 bg-gradient-to-r from-[#1076BC] to-[#0d5ea0] text-white font-bold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group">
                  <span>Start Learning Today</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-10 py-4 bg-white border-2 border-[#1076BC] text-[#1076BC] font-bold rounded-xl hover:bg-[#1076BC] hover:text-white transition-all duration-300">
                  View Curriculum
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
};

export default Courses_details_Page;
