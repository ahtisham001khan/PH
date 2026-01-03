import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqData = [
  { question: "What if I miss a class?", answer: "We provide recorded sessions or makeup classes for missed lessons to ensure you stay on track." },
  {
    question: "How long are the courses?",
    answer: (
      <div>
        <p><strong>Intermediate:</strong> Up to 6 months</p>
        <p><strong>Advanced:</strong> Up to 9 months + Internship</p>
        <p><strong>Professional:</strong> Up to 12 months + Job & Internship Opportunities</p>
      </div>
    )
  },
  { question: "Will I get to work on real projects?", answer: "Yes! All courses include real-world project simulations, and both the Advanced and Professional programs offer live project experience with actual clients." },
  { question: "Can these courses help me get freelance or part-time work?", answer: "Our training is designed to help you build a strong portfolio and understand how to find freelance clients or work with design agencies." },
  { question: "What is the fee structure for each course?", answer: "Fee details vary by course and may include installment options. Please contact our admissions team for the latest fee breakdown and offers." },
  { question: "Will I receive a certificate after completion?", answer: "Yes, a recognized course completion certificate is awarded for all programs. Professional course students also receive internship and job recommendation letters (if eligible)." },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => setOpenIndex(openIndex === index ? null : index);

  const mid = Math.ceil(faqData.length / 2);
  const leftColumn = faqData.slice(0, mid);
  const rightColumn = faqData.slice(mid);

  return (
    <div className="bg-gradient-to-br from-white via-blue-50 to-white py-25 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-3xl sm:text-4xl font-bold text-center text-[#1076BC] mb-10">
          Frequently Asked Questions
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
    <div className="bg-white rounded-xl shadow-sm border border-[#1076BC] overflow-hidden transition-all duration-300 hover:shadow-md">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 flex items-center justify-between gap-4 hover:bg-blue-50 transition-colors focus:outline-none"
      >
        <span className={`text-lg font-semibold ${isOpen ? 'text-[#1076BC]' : 'text-[#1076BC]'}`}>
          {item.question}
        </span>
        <div className="flex-shrink-0">
          {isOpen ? (
            <FaChevronUp className="w-5 h-5 text-[#1076BC]" />
          ) : (
            <FaChevronDown className="w-5 h-5 text-[#1076BC]" />
          )}
        </div>
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
