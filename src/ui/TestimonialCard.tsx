import React from 'react';
import Image from 'next/image';

interface TestimonialCardProps {
  avatar: string;
  username: string;
  testimonial: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ avatar, username, testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="flex items-center justify-center mb-4">
        {/* Circular container for the image */}
        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-300 flex-shrink-0">
          <Image
            src={avatar}
            alt={`${username}'s avatar`}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Spacing between avatar and username */}
        <h3 className="ml-8 text-lg text-customBlue font-galano">{username}</h3>
      </div>
      <p className="text-gray-600 font-inter">{testimonial}</p>
    </div>
  );
};

export default TestimonialCard;
