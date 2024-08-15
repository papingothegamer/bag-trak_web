import React from 'react';
import PricingCard from '../ui/PricingCard';

const PricingSection: React.FC = () => {
    return (
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-galano font-bold mb-4">Our Pricing Plans</h2>
            <p className="text-lg text-gray-600">Choose the plan that best fits your needs.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            <PricingCard
              title="Basic Plan"
              description="A basic plan for individuals."
              price="$10/month"
              features={["Feature 1", "Feature 2", "Feature 3"]}
            />
            <PricingCard
              title="Standard Plan"
              description="A standard plan for small teams."
              price="$25/month"
              features={["Feature 1", "Feature 2", "Feature 3", "Feature 4"]}
            />
            <PricingCard
              title="Premium Plan"
              description="A premium plan for larger organizations."
              price="$50/month"
              features={["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"]}
            />
          </div>
        </div>
      </section>
    );
  };

export default PricingSection;
