import React from 'react';
import { Button } from "../ui/Button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/Card";

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: "Basic Plan",
      description: "A basic plan for individuals.",
      price: "$10/month",
      features: ["Feature 1", "Feature 2", "Feature 3"],
    },
    {
      name: "Standard Plan",
      description: "A standard plan for small teams.",
      price: "$25/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
    },
    {
      name: "Premium Plan",
      description: "A premium plan for larger organizations.",
      price: "$50/month",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4", "Feature 5"],
    },
  ];

  return (
    <section className="w-11/12 max-w-7xl py-8 px-4 mx-auto mt-10 mb-14 flex items-center justify-centerbg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Our Pricing Plans</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Choose the plan that best fits your needs.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card key={index} className="flex flex-col h-full">
              <CardHeader className="bg-blue-500 text-white">
                <CardTitle>{plan.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-lg mb-4">{plan.description}</p>
                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2 h-4 w-4 text-green-500"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Get Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
