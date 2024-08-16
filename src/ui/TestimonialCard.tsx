import React from 'react';

interface TestimonialCardProps {
  avatar: string;
  username: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, username, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={`${username}'s avatar`}
          className="w-12 h-12 rounded-full mr-6"  // Increased margin-right to 6 (1.5rem or 24px)
        />
        <p className="text-customBlue font-galano font-normal">{username}</p>
      </div>
      <p className="text-black font-inter">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
