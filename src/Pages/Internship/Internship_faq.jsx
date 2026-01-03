import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Who can apply for the internship?",
    answer:
      "Students from any year or background can apply. Basic knowledge related to the role is enough — learning attitude matters most.",
  },
  {
    question: "What is the duration of the internship?",
    answer: (
      <div className="space-y-1">
        <p><strong>Minimum:</strong> 2 Months</p>
        <p><strong>Maximum:</strong> 6 Months</p>
        <p>Duration depends on the selected role and performance.</p>
      </div>
    ),
  },
  {
    question: "Is this internship paid?",
    answer:
      "Some roles offer a stipend based on performance and availability. Final details are shared after the selection process.",
  },
  {
    question: "Will I work on real projects?",
    answer:
      "Yes. Interns work on real-world projects under professional supervision to gain practical industry experience.",
  },
  {
    question: "Do I need prior experience?",
    answer:
      "No prior professional experience is required. Basic concepts and willingness to learn are more than enough.",
  },
  {
    question: "Will I get a certificate after completion?",
    answer:
      "Yes. A verified internship completion certificate is provided. Top performers may also receive a recommendation letter.",
  },
];

export default function InternshipFAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);

  const mid = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, mid);
  const rightColumn = faqData.slice(mid);

  return (
    <div className="bg-gradient-to-b from-white via-blue-50/60 to-blue-100 py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-700 mb-12">
          Internship FAQs
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {leftColumn.map((item, idx) => {
              const globalIndex = idx;
              return (
                <FAQItem
                  key={globalIndex}
                  item={item}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggleAccordion(globalIndex)}
                />
              );
            })}
          </div>

          <div className="space-y-4">
            {rightColumn.map((item, idx) => {
              const globalIndex = mid + idx;
              return (
                <FAQItem
                  key={globalIndex}
                  item={item}
                  isOpen={openIndex === globalIndex}
                  onToggle={() => toggleAccordion(globalIndex)}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-blue-600 overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-blue-50 transition focus:outline-none"
      >
        <span className="text-lg font-semibold text-blue-700">
          {item.question}
        </span>
        {isOpen ? (
          <FaChevronUp className="w-5 h-5 text-blue-700" />
        ) : (
          <FaChevronDown className="w-5 h-5 text-blue-700" />
        )}
      </button>

      <div
        ref={contentRef}
        style={{ height: `${height}px` }}
        className="overflow-hidden transition-all duration-500 ease-in-out"
      >
        <div className="px-6 pb-5 text-gray-700 leading-relaxed">
          {item.answer}
        </div>
      </div>
    </div>
  );
}
