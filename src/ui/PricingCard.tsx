import React from 'react';

interface PricingCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
}

const PricingCard: React.FC<PricingCardProps> = ({ title, description, price, features }) => {
  return (
    <div className="bg-customBlue p-6 shadow-lg rounded-lg text-white flex flex-col justify-between">
      <div>
        <h3 className="text-2xl font-galano font-bold mb-4">{title}</h3>
        <p className="text-lg font-inter mb-4">{description}</p>
        <p className="text-3xl font-galano font-bold mb-4">{price}</p>
        <ul className="list-disc pl-5 space-y-2 mb-6 font-inter">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default PricingCard;
