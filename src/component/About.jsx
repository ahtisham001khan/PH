import { useState } from "react";
import { FaChalkboardTeacher, FaUserGraduate, FaBriefcase } from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import aboutImg from "../assets/images/about.webp";

export default function About() {
    const [activeIndex, setActiveIndex] = useState(null);

    const features = [
        {
            icon: <FaChalkboardTeacher />,
            title: "Skill Development Training Programs",
            desc: "Our training programs for skill development are designed to meet the demands of employment. Professionals with years of knowledge in the field lead and instruct these programs.",
        },
        {
            icon: <FaUserGraduate />,
            title: "Internships",
            desc: "A strong internship concept is part of our training programs, which enables you to work with professionals on real-world industrial projects. You can develop your own applications, projects, and personal portfolio with this experience.",
        },
        {
            icon: <FaBriefcase />,
            title: "Placement Opportunities",
            desc: "Our professional team offers job assistance through their corporate sector connections. We also invite various recruitment firms to conduct interviews with our students and select candidates who meet their eligibility criteria.",
        },
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="w-fulltext-gray-700  lg:py-15 md:py-12 sm:py-10 py-8 bg-gradient-to-b from-white via-blue-50/60 to-blue-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20 px-5 sm:px-8 md:px-10">

                {/* Left Image */}
                <div className="w-full lg:w-[45%] flex justify-center lg:justify-start" >
                    <img
                        src={aboutImg}
                        alt="About Illustration"
                        className="w-[60%] sm:w-[60%] md:w-[60%] lg:w-[60%] mx-auto max-w-md md:max-w-lg lg:max-w-none object-contain animate-fadeInUp"
                    />
                </div>

                {/* Right Content */}
                <div className="w-full lg:w-1/2 space-y-3 text-center lg:text-left">
                    <p className="text-[#1076BC] text-[18px] sm:text-[20px] font-semibold">
                        About Us
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
                        Welcome to{" "}
                        <span className="text-[#1076BC]">Institute Of Pixxel House</span>
                    </h2>
                    <p className="text-gray-600 leading-relaxed text-sm sm:text-base text-justify">
                        At the Institute of Pixxelhouse! We specialize in providing excellent courses in designing, development, Amazon strategies, SEO, Digital Marketing, AutoCAD, and Audio Video Editing. Our aim is to equip you with the essential skills needed to be skillful in today’s competitive job market. With a focus on practical learning and industry-relevant techniques, our expert instructors guide you through every step of your educational journey. Join us at Pixxelhouse and advance your career with our comprehensive training programs.
                    </p>

                    {/* Accordion Section */}
                    <div className="w-full mt-5 max-w-2xl mx-auto lg:mx-0 space-y-3">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="border border-[#1076BC] rounded-xl overflow-hidden bg-transparent hover:shadow-md transition-all duration-300"
                            >
                                {/* Accordion Header */}
                                <button
                                    onClick={() => toggleAccordion(i)}
                                    className="w-full flex items-center justify-between p-2 sm:p-5 text-left focus:outline-none"
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full text-[#1076BC] text-[20px] sm:text-[24px] md:text-[30px]">
                                            {item.icon}
                                        </div>

                                        <h3 className="font-semibold text-gray-900 text-sm sm:text-base md:text-lg">
                                            {item.title}
                                        </h3>
                                     </div>
                                    <FiChevronDown
                                        className={`text-[#1076BC] text-xl sm:text-2xl transform transition-transform duration-300 ${activeIndex === i ? "rotate-180" : ""
                                            }`}
                                    />
                                </button>

                                {/* Accordion Content */}
                                <div
                                    className={`transition-all duration-500 overflow-hidden ${activeIndex === i ? "max-h-40 p-4 pt-0 sm:p-5 sm:pt-0" : "max-h-0"
                                        }`}
                                >
                                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
