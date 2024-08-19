import React from 'react';
import TestimonialCard from '../ui/TestimonialCard'; // Adjust the import path as needed

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      avatar: 'https://via.placeholder.com/150', // Replace with actual image URLs
      username: 'Jane Doe',
      testimonial: 'This product is revolutionary! Finding my luggage has never been easier.',
    },
    {
      avatar: 'https://via.placeholder.com/150',
      username: 'John Smith',
      testimonial: 'I love how easy it is to track my bags now. Highly recommended!',
    },
    {
      avatar: 'https://via.placeholder.com/150',
      username: 'Emily Johnson',
      testimonial: 'A must-have for frequent travelers. It saved me so much time!',
    },
  ];

  return (
    <section className="py-16 bg-white flex justify-center">
      <div className="w-11/12 max-w-7xl bg-customBlue rounded-t-3xl px-4 py-8 mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-galano font-normal text-white">Testimonials</h2>
        </div>
        <div className="w-11/12 mx-auto bg-white rounded-t-3xl shadow-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                avatar={testimonial.avatar}
                username={testimonial.username}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
