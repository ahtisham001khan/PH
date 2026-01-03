"use client";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Section_head } from '../../component/Section_head'


// Images
import HeroMain from "../../assets/images/blog(2).webp";
import HeroRight1 from "../../assets/images/blog(1).webp";
import HeroRight2 from "../../assets/images/blog(2).webp";
import WhatsNewImg from "../../assets/images/blog(1).webp";
import Small1 from "../../assets/images/blog(1).webp";
import Small2 from "../../assets/images/blog(2).webp";
import Small3 from "../../assets/images/blog(3).webp";
import Popular1 from "../../assets/images/blog(1).webp";
import Popular2 from "../../assets/images/blog(2).webp";
import Popular3 from "../../assets/images/blog(3).webp";

const HomeNews = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Lifestyle", "Travel", "Fashion", "Sports", "Technology"];

  const tabData = {
    0: { // Lifestyle
      featured: {
        title: "Mindful Morning Routines That Will Transform Your Day",
        description: "Start your day right with these simple yet powerful habits that boost productivity and mental clarity.",
        img: WhatsNewImg
      },
      listItems: [
        "The Art of Slow Living in a Fast-Paced World",
        "Home Décor Trends That Promote Wellbeing",
        "Plant-Based Recipes for Busy Professionals"
      ],
      thumbnails: [Small1, Small2, Small3],
      themeColor: "border-l-[#1076BC]"
    },
    1: { // Travel
      featured: {
        title: "Secret European Villages You've Never Heard Of",
        description: "Discover hidden gems off the tourist trail with our guide to Europe's most charming undiscovered villages.",
        img: WhatsNewImg
      },
      listItems: [
        "Budget Travel Hacks for 2024 Adventures",
        "Sustainable Tourism: How to Travel Responsibly",
        "Top 10 Beaches That Will Take Your Breath Away"
      ],
      thumbnails: [Small1, Small2, Small3],
      themeColor: "border-l-[#1076BC]"
    },
    2: { // Fashion
      featured: {
        title: "Spring/Summer 2024 Fashion Trends You Need to Know",
        description: "From runway to realway: How to incorporate this season's hottest trends into your everyday wardrobe.",
        img: WhatsNewImg
      },
      listItems: [
        "Sustainable Fashion Brands Making a Difference",
        "Celebrity Style: Who Wore It Best This Week?",
        "Accessorizing 101: Statement Pieces That Elevate Any Outfit"
      ],
      thumbnails: [Small1, Small2, Small3],
      themeColor: "border-l-[#1076BC]"
    },
    3: { // Sports
      featured: {
        title: "Underdog Team Stuns Champions in Historic Upset",
        description: "In a game that will be remembered for years, the underdogs pulled off an incredible last-minute victory.",
        img: WhatsNewImg
      },
      listItems: [
        "Training Secrets of Olympic Athletes",
        "How Technology is Changing Professional Sports",
        "Rising Stars: Young Athletes to Watch This Season"
      ],
      thumbnails: [Small1, Small2, Small3],
      themeColor: "border-l-[#1076BC]"
    },
    4: { // Technology
      featured: {
        title: "AI Revolution: How ChatGPT is Changing Everything",
        description: "From creative writing to coding, discover how AI language models are transforming industries worldwide.",
        img: WhatsNewImg
      },
      listItems: [
        "The Future of Smart Homes: What's Next?",
        "Cybersecurity Threats You Should Know About",
        "Tech Gadgets That Will Blow Your Mind in 2024"
      ],
      thumbnails: [Small1, Small2, Small3],
      themeColor: "border-l-[#1076BC]"
    }
  };

  const currentData = tabData[activeTab];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 pb-12 min-h-screen">

      <Section_head Section_head={"Our Blogs"} />

      {/* ================= TOP HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-5">
          {/* Left big hero - HEIGHT REDUCED */}
          <Link
            to="/blog-details"
            className="relative lg:col-span-2 rounded-lg overflow-hidden shadow-lg group h-[360px] md:h-[400px] transform transition-all duration-300 hover:shadow-xl"
          >
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1076BC]/20 via-transparent to-transparent z-0" />

            <div className="relative h-full">
              <img
                src={HeroMain}
                alt="Main hero"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Category badge */}
            <div className="absolute top-3 left-3 z-20">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#1076BC] text-white text-xs font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 bg-white rounded-full mr-2"></span>
                BREAKING NEWS
              </span>
            </div>

            {/* Content - Font sizes reduced */}
            <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 lg:p-6 z-20">
              <div className="flex items-center mb-2 md:mb-3">
                <div className="w-8 md:w-10 h-1 bg-[#1076BC] rounded-full mr-2"></div>
                <span className="text-xs text-white/80 font-medium tracking-wider uppercase">Entertainment</span>
                <span className="mx-2 text-white/60">•</span>
                <span className="text-xs text-white/80">2 hours ago</span>
              </div>

              <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-white leading-tight mb-2">
                Anna Lora Stuns In White At Her Australian Premiere
              </h2>

              <p className="text-white/90 text-sm mb-3 line-clamp-2">
                The actress made a dazzling appearance at the premiere of her latest film, turning heads with an elegant white gown.
              </p>

              <div className="flex items-center text-white group">
                <span className="text-sm font-medium">Read More</span>
                <svg
                  className="w-4 h-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </div>
            </div>
          </Link>

          {/* Right stacked small cards - Height reduced proportionally */}
          <div className="grid grid-rows-2 gap-4 md:gap-5">
            <Link
              to="/blog-details"
              className="relative rounded-lg overflow-hidden shadow-md group h-[175px] md:h-[190px] transform transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              <div className="relative h-full">
                <img
                  src={HeroRight1}
                  alt="Right 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content - Reduced padding */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="w-5 md:w-6 h-1 bg-[#1076BC] rounded-full mr-2"></div>
                  <span className="text-xs text-white/80 font-medium tracking-wide">
                    Politics
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug mb-1 md:mb-2 line-clamp-2">
                  Secretary for Economic Affairs Unveils Ambitious Air Transportation Plan
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">
                    45 min ago
                  </span>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            <Link
              to="/blog-details"
              className="relative rounded-lg overflow-hidden shadow-md group h-[175px] md:h-[190px] transform transition-all duration-300 hover:shadow-lg"
            >
              <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

              <div className="relative h-full">
                <img
                  src={HeroRight2}
                  alt="Right 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content - Reduced padding */}
              <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 z-20">
                <div className="flex items-center mb-1 md:mb-2">
                  <div className="w-5 md:w-6 h-1 bg-[#1076BC] rounded-full mr-2"></div>
                  <span className="text-xs text-white/80 font-medium tracking-wide">
                    Technology
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white leading-snug mb-1 md:mb-2 line-clamp-2">
                  Tech Giants Announce Breakthrough in Quantum Computing Research
                </h3>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-white/70">
                    3 hours ago
                  </span>
                  <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-3 h-3 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>
      {/* ================= WHAT'S NEW + SIDEBAR SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {/* What's New - Left Side (2/3 width) */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-lg p-4 md:p-5 border border-gray-100">
            {/* Tabs Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 md:mb-5 gap-3">
              <div>
                <h3 className="text-base md:text-lg font-bold text-gray-900">What's New</h3>
                <p className="text-xs md:text-sm text-gray-600 mt-1">
                  Latest updates in <span className="font-semibold text-[#1076BC]">{tabs[activeTab].toLowerCase()}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-1 md:gap-2">
                {tabs.map((tab, idx) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(idx)}
                    className={`px-2.5 md:px-3 py-1 md:py-1.5 text-xs font-medium rounded-md transition-all duration-200 ${activeTab === idx
                        ? "bg-[#1076BC] text-white shadow-sm"
                        : "text-gray-700 bg-gray-100 hover:bg-gray-200"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Active Tab Indicator */}
            <div className="mb-4 md:mb-5">
              <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-[#1076BC] rounded-full transition-all duration-500"
                  style={{ width: `${(activeTab + 1) * (100 / tabs.length)}%` }}
                ></div>
              </div>
            </div>

            {/* News Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 mb-5 md:mb-6">
              {/* Featured Article */}
              <Link
                to="/blog-details"
                className="md:col-span-1 rounded-lg overflow-hidden bg-white border border-gray-200 hover:shadow-md transition-all duration-300 group"
              >
                <div className="relative h-36 md:h-40 overflow-hidden">
                  <img
                    src={currentData.featured.img}
                    alt="Featured"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 bg-[#1076BC] text-white text-[10px] md:text-xs font-bold rounded-md">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-3">
                  <div className="flex items-center mb-1.5 md:mb-2">
                    <span className="w-1.5 h-1.5 bg-[#1076BC] rounded-full mr-1.5"></span>
                    <span className="text-xs text-gray-600 font-medium">{tabs[activeTab]}</span>
                  </div>
                  <h4 className="text-xs md:text-sm font-bold text-gray-900 leading-snug mb-1.5 group-hover:text-[#1076BC] transition-colors line-clamp-2">
                    {currentData.featured.title}
                  </h4>
                  <p className="text-xs text-gray-600 line-clamp-2">
                    {currentData.featured.description}
                  </p>
                  <div className="flex items-center justify-between mt-2 md:mt-3">
                    <span className="text-[10px] text-gray-500">
                      {activeTab === 0 ? "8 min read" : activeTab === 1 ? "5 min read" : "6 min read"}
                    </span>
                    <span className="text-xs text-[#1076BC] font-medium group-hover:underline flex items-center">
                      Read
                      <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Middle Vertical List */}
              <div className="md:col-span-1">
                <h5 className="text-sm font-semibold text-gray-800 mb-2 md:mb-3 pb-2 border-b border-gray-200">
                  Latest in {tabs[activeTab]}
                </h5>
                <div className="space-y-2 md:space-y-3">
                  {currentData.listItems.map((text, i) => (
                    <Link
                      to="/blog-details"
                      key={i}
                      className={`flex items-start gap-2 group p-2 md:p-2.5 rounded-lg transition-all duration-200 border-l-4 ${currentData.themeColor} hover:bg-gray-50`}
                    >
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-medium text-gray-800 group-hover:text-[#1076BC] transition-colors line-clamp-2">
                          {text}
                        </p>
                        <div className="flex items-center mt-1">
                          <span className="text-xs text-gray-500">
                            {i === 0 ? "Just now" : `${i + 1} hour${i > 0 ? 's' : ''} ago`}
                          </span>
                          <span className="mx-1.5 text-gray-300">•</span>
                          <span className="text-xs text-[#1076BC] font-medium">
                            {tabs[activeTab]}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Small Thumbnails */}
              <div className="md:col-span-1">
                <h5 className="text-sm font-semibold text-gray-800 mb-2 md:mb-3 pb-2 border-b border-gray-200">
                  Trending Now
                </h5>
                <div className="space-y-2 md:space-y-2.5">
                  {currentData.thumbnails.map((img, i) => (
                    <Link
                      to="/blog-details"
                      key={i}
                      className="flex gap-2 md:gap-2.5 items-center p-2 md:p-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200 group"
                    >
                      <div className="relative w-12 h-12 md:w-14 md:h-14 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={img}
                          alt="thumbnail"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      <div className="flex-1">
                        <p className="text-xs font-semibold text-gray-800 line-clamp-2 group-hover:text-[#1076BC] transition-colors">
                          Trending story #{i + 1} in {tabs[activeTab].toLowerCase()}
                        </p>
                        <div className="flex items-center mt-0.5">
                          <span className="text-[10px] text-gray-500">
                            {i * 15} min read
                          </span>
                          <span className="mx-1.5 text-gray-300">•</span>
                          <span className="text-[10px] font-medium text-[#1076BC]">
                            Hot
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar - Right Side (1/3 width) */}
          <div className="space-y-4 md:space-y-5">
            {/* Most Recent Section */}
            <div className="bg-white rounded-lg shadow-lg p-3 md:p-4 border border-gray-100">
              <div className="flex items-center justify-between mb-2 md:mb-3">
                <h4 className="text-base font-bold text-gray-900">Most Recent</h4>
                <div className="w-6 h-1 bg-[#1076BC] rounded-full"></div>
              </div>

              <div className="space-y-2 md:space-y-3">
                {[
                  { title: "Global Climate Summit Reaches Historic Agreement", time: "2 hours ago", category: "Environment" },
                  { title: "Tech Giant Unveils Revolutionary New Smartphone", time: "4 hours ago", category: "Technology" },
                  { title: "Local Team Wins National Championship Title", time: "6 hours ago", category: "Sports" },
                  { title: "Stock Market Hits All-Time High This Quarter", time: "1 day ago", category: "Business" }
                ].map((item, index) => (
                  <Link
                    to="/blog-details"
                    key={index}
                    className="group flex items-start gap-2 md:gap-2.5 p-2 md:p-2.5 rounded-lg hover:bg-gray-50 transition-all duration-200 border-l-4 border-transparent hover:border-[#1076BC]"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-6 h-6 md:w-7 md:h-7 rounded-full bg-gray-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-gray-700">{index + 1}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-gray-800 group-hover:text-[#1076BC] transition-colors line-clamp-2">
                        {item.title}
                      </p>
                      <div className="flex items-center mt-1">
                        <span className="text-xs text-gray-500">{item.time}</span>
                        <span className="mx-1.5 text-gray-300">•</span>
                        <span className="text-xs font-medium text-[#1076BC]">{item.category}</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-3 md:mt-4 pt-2 md:pt-3 border-t border-gray-200 text-center">
                <Link to="/blog-details" className="text-xs font-semibold text-[#1076BC] hover:text-[#0e6aa8] inline-flex items-center">
                  View All Recent News
                  <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= BOTTOM AD + POPULAR SECTION ================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-5">
          {/* Big Ad */}
          <div className="relative bg-gradient-to-r from-[#1076BC] to-[#0e6aa8] text-white rounded-lg shadow-lg p-4 md:p-6 overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs uppercase tracking-widest mb-1 md:mb-2 text-[#1076BC]/90">Advertisement</p>
              <h3 className="text-lg md:text-xl font-bold leading-tight mb-2 md:mb-3">
                Let Travel to Europe
                <br /> Up to 50% Off
              </h3>
              <p className="text-xs md:text-sm text-[#1076BC]/90 mb-3 md:mb-4">
                Book your dream European vacation today with exclusive discounts.
              </p>
              <button className="bg-white text-[#1076BC] text-xs md:text-sm font-bold px-3 md:px-5 py-1.5 md:py-2.5 rounded-lg hover:bg-[#1076BC]/5 hover:shadow-md transition-all duration-300">
                Book Now
              </button>
            </div>
            <div className="absolute -right-6 md:-right-8 -bottom-6 md:-bottom-8 w-24 md:w-32 h-24 md:h-32 bg-white/10 rounded-full"></div>
            <div className="absolute -right-3 md:-right-4 -top-3 md:-top-4 w-12 md:w-16 h-12 md:h-16 bg-white/10 rounded-full"></div>
          </div>

          {/* Popular Cards */}
          {[Popular1, Popular2, Popular3, Popular1, Popular2, Popular3, Popular1].map((img, i) => (
            <Link
              to="/blog-details"
              key={i}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-24 md:h-28 overflow-hidden">
                <img
                  src={img}
                  alt="popular"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-1.5 md:top-2 right-1.5 md:right-2">
                  <span className="px-1 md:px-1.5 py-0.5 bg-red-600 text-white text-[8px] md:text-[9px] font-bold rounded-full">
                    Hot
                  </span>
                </div>
              </div>
              <div className="p-2 md:p-3">
                <div className="flex items-center mb-1 md:mb-1.5">
                  <span className="w-1.5 h-1.5 bg-[#1076BC] rounded-full mr-1.5"></span>
                  <p className="text-[8px] md:text-[9px] text-[#1076BC] font-semibold uppercase tracking-wider">
                    Most Popular
                  </p>
                </div>
                <h4 className="text-xs font-bold text-gray-900 leading-snug group-hover:text-[#1076BC] transition-colors line-clamp-2">
                  Descriptive headline like example screenshot {i + 1}
                </h4>
                <div className="flex items-center justify-between mt-1.5 md:mt-2">
                  <span className="text-[8px] md:text-[9px] text-gray-500">{(i + 1) * 15} min read</span>
                  <span className="text-[#1076BC] text-[10px] font-medium flex items-center">
                    Read
                    <svg className="w-2 md:w-2.5 h-2 md:h-2.5 ml-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HomeNews;