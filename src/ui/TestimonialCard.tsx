import React from 'react';

interface TestimonialCardProps {
  username: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ username, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {/* Align username to the left with an "@" tag */}
      <h3 className="text-lg text-customBlue font-galano mb-2 text-left">@{username}</h3>
      
      {/* Testimonial text, also left-aligned */}
      <p className="text-gray-600 font-inter text-left">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
