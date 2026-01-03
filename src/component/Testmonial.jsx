import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import TestmonialBanner from "../assets/images/Testmonial-banner.webp";
import Student1 from "../assets/images/Review (1).webp";
import Student2 from "../assets/images/Review (4).webp";
import Student3 from "../assets/images/Review (5).webp";
import Student4  from "../assets/images/Review (2).webp";
import Student5  from "../assets/images/Review (3).webp";

const testimonials = [
  { name: "Muhammad Ahmed", title: "Full Stack Web Development", image: Student1, quote: "Ahmed joined our Web Development course with no prior coding experience. With consistent effort and support from our instructors, he mastered HTML, CSS, JavaScript, and PHP within 6 months. Shortly after completing his course, Ahmed began freelancing on Fiverr and Upwork. He now earns over PKR 100k/month by developing websites for clients around the world." },
  { name: "Ayesha Khalid", title: "Professional Graphic Designer", image: Student2, quote: "Ayesha always loved designing, but she didn’t know how to turn it into a career. After enrolling in our Graphic Design course, she learned Adobe Photoshop, Illustrator, and branding techniques. Within 3 months of completing the course, she landed a job at a creative agency in Karachi and also started offering logo design services online." },
  { name: "Usman Raza", title: " Android App Development", image: Student3, quote: "Usman always dreamed of creating his own mobile app but didn’t know where to start. He enrolled in our Android App Development course and learned Java, XML, Firebase, and app deployment. After completing the course, he built and launched his first app on the Google Play Store, which now has over 10,000 downloads. He’s also working on freelance app projects." },
  { name: "Sana Tariq", title: "Digital Marketing", image: Student4, quote: "Sana had no background in marketing but was eager to explore the digital world. She joined our Digital Marketing course where she mastered SEO, Google Ads, Facebook Ads, and content strategy. She now works as a digital marketing executive at a growing startup in Lahore and handles clients' campaigns, helping them boost their online presence and sales." },
  { name: "Bilal Khan", title: "Amazon Virtual Assistant (VA)", image: Student5, quote: "Bilal was struggling to find a stable income when he heard about the growing demand for Amazon VAs. He joined our specialized VA course and learned product hunting, sourcing, listing optimization, and account management. Just two months after finishing the course, Bilal secured his first client on Upwork and is now a top-rated VA earning over PKR 1.50k per month." },
];

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);
  const autoSpeed = 3000;

  // Update cardsToShow based on screen width
  useEffect(() => {
    const updateCards = () => {
      const width = window.innerWidth;
      if (width < 640) setCardsToShow(1);       
      else if (width < 1024) setCardsToShow(2); 
      else setCardsToShow(3);                   
    };
    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
    }, autoSpeed);
    return () => clearInterval(interval);
  }, [cardsToShow]);

  // Update transform
  useEffect(() => {
    const slider = sliderRef.current;
    slider.style.transform = `translateX(-${(currentIndex * 100) / cardsToShow}%)`;
  }, [currentIndex, cardsToShow]);

  const handlePrev = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - cardsToShow : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prev => (prev >= testimonials.length - cardsToShow ? 0 : prev + 1));
  };

  return (
  <section
    className="w-full py-16 sm:py-20 bg-cover bg-center relative"
    style={{
      backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5)), url(${TestmonialBanner})`,
    }}
  >
    {/* ✅ Main Container */}
    <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 lg:px-16 relative">

      {/* ✅ Section Heading */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
          What Our Students Say
        </h2>
        <p className="text-white max-w-2xl mx-auto text-sm sm:text-base">
          Discover real success stories from students who transformed their careers through our courses.
        </p>
      </div>

      {/* ✅ Slider Section */}
      <div className="relative">

        {/* Left Arrow */}
        <button
          onClick={handlePrev}
          className="hidden lg:flex absolute top-1/2 -left-12 -translate-y-1/2 z-20 
          text-white bg-[#1076BC] hover:bg-[#0d5f96] p-3 rounded-full shadow-lg transition"
        >
          <FaArrowLeft />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleNext}
          className="hidden lg:flex absolute top-1/2 -right-12 -translate-y-1/2 z-20 
          text-white bg-[#1076BC] hover:bg-[#0d5f96] p-3 rounded-full shadow-lg transition"
        >
          <FaArrowRight />
        </button>

        {/* Slider wrapper */}
        <div className="overflow-hidden">
          <div
            ref={sliderRef}
            className="flex transition-transform duration-500 ease-in-out"
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex justify-center px-2"
                style={{ width: `${100 / cardsToShow}%` }}
              >
                <div className="w-full max-w-[320px] h-[450px] bg-white rounded-[32px] p-[3px] relative overflow-hidden">

                  {/* Profile */}
                  <div className="absolute w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] 
                    top-4 left-1/2 -translate-x-1/2 rounded-full 
                    overflow-hidden border-[4px] border-[#1076BC] shadow z-10"
                  >
                    <img src={t.image} alt={t.name} className="object-cover w-full h-full" />
                  </div>

                  {/* Content */}
                  <div className="absolute top-[25%] left-0 right-0 bottom-0 p-5 text-center flex flex-col justify-start">
                    <span className="block text-[#1076BC] text-lg font-bold">
                      {t.name}
                    </span>

                    <span className="block text-[#1076BC] text-sm mt-1 font-semibold">
                      {t.title}
                    </span>

                    {/* Stars */}
                    <div className="flex mt-2 justify-center">
                      {[...Array(5)].map((_, idx) => (
                        <FaStar key={idx} className="text-yellow-400 mr-1" />
                      ))}
                    </div>

                    <p className="text-gray-700 text-sm mt-3 italic leading-relaxed text-justify">
                      “{t.quote}”
                    </p>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

};

export default Testimonials;
