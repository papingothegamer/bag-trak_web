import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Bag-Trak?',
      answer: 'Bag-Trak is a revolutionary luggage tracking solution designed to make your travel experience seamless.',
    },
    {
      question: 'How does Bag-Trak work?',
      answer: 'Bag-Trak uses advanced tracking technology to monitor your luggage in real-time, ensuring you always know where your bags are.',
    },
    {
      question: 'Is Bag-Trak available internationally?',
      answer: 'Yes, Bag-Trak is available for use in multiple countries across the globe.',
    },
  ];

  return (
    <section className="flex flex-col md:flex-row py-16 w-11/12 max-w-7xl mx-auto"> {/* <-- Reduced width */}
      {/* FAQ Header */}
      <div className="md:w-1/3 text-customBlue font-galano text-4xl mb-8 md:mb-0">
        FAQs
      </div>
      
      {/* FAQ Questions and Answers */}
      <div className="md:w-2/3 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="cursor-pointer border-b border-gray-300 pb-4"> {/* <-- Added border line */}
            <div 
              onClick={() => toggleFAQ(index)} 
              className="flex justify-between items-center text-black font-inter text-lg">
              {faq.question}
              <span 
                className={`transform transition-transform duration-500 ${/* <-- Slowed animation */
                  activeIndex === index ? 'rotate-180' : 'rotate-0'
                }`}>
                <FaChevronDown className="text-customBlue" />
              </span>
            </div>

            {/* Answer Dialog Box */}
            {activeIndex === index && (
              <div className="mt-2 p-4 bg-customBlue text-white rounded-lg max-w-[80%] md:max-w-[60%] ml-auto">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
