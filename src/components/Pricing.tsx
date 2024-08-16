import React from 'react';

const PricingSection: React.FC = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-galano font-normal mb-4">Our Pricing Plans</h2>
          <p className="text-lg text-gray-600">Choose the plan that best fits your needs.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {/* Basic Plan */}
          <div className="bg-customBlue p-6 shadow-lg rounded-lg text-white flex flex-col justify-between h-auto lg:h-120 w-full lg:w-auto">
            <div>
              <h3 className="text-2xl font-galano font-bold mb-4">Basic Plan</h3>
              <p className="text-lg font-inter mb-4">A basic plan for individuals.</p>
              <p className="text-3xl font-galano font-bold mb-4">$10/month</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 font-inter">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
              </ul>
            </div>
            <button className="bg-white text-customBlue w-32 mx-auto py-2 rounded font-inter font-semibold hover:bg-gray-100 transition-colors">
              Get Now
            </button>
          </div>

          {/* Standard Plan */}
          <div className="bg-customBlue p-6 shadow-lg rounded-lg text-white flex flex-col justify-between h-auto lg:h-120 w-full lg:w-auto">
            <div>
              <h3 className="text-2xl font-galano font-bold mb-4">Standard Plan</h3>
              <p className="text-lg font-inter mb-4">A standard plan for small teams.</p>
              <p className="text-3xl font-galano font-bold mb-4">$25/month</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 font-inter">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
            </div>
            <button className="bg-white text-customBlue w-32 mx-auto py-2 rounded font-inter font-semibold hover:bg-gray-100 transition-colors">
              Get Now
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-customBlue p-6 shadow-lg rounded-lg text-white flex flex-col justify-between h-auto lg:h-120 w-full lg:w-auto">
            <div>
              <h3 className="text-2xl font-galano font-bold mb-4">Premium Plan</h3>
              <p className="text-lg font-inter mb-4">A premium plan for larger organizations.</p>
              <p className="text-3xl font-galano font-bold mb-4">$50/month</p>
              <ul className="list-disc pl-5 space-y-2 mb-6 font-inter">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
                <li>Feature 5</li>
              </ul>
            </div>
            <button className="bg-white text-customBlue w-32 mx-auto py-2 rounded font-inter font-semibold hover:bg-gray-100 transition-colors">
              Get Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
