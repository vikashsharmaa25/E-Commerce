import React from "react";
import { FaTruck, FaHeadset, FaCheckCircle } from "react-icons/fa";

const ServiceFeatures = () => {
  const features = [
    {
      icon: <FaTruck />,
      title: "FREE AND FAST DELIVERY",
      description: "Free delivery for all orders over ₹499",
    },
    {
      icon: <FaHeadset />,
      title: "24/7 CUSTOMER SERVICE",
      description: "Friendly 24/7 customer support",
    },
    {
      icon: <FaCheckCircle />,
      title: "MONEY BACK GUARANTEE",
      description: "We return money within 30 days",
    },
  ];

  return (
    <div className="container mx-auto my-28">
      <div className="flex flex-wrap justify-center -mx-4">
        {features.map((feature, index) => (
          <div key={index} className="w-full sm:w-1/2 md:w-1/3 px-4 mb-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-gray-200 rounded-full p-4 mb-4">
                <div className="bg-black text-white rounded-full p-3 text-xl">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceFeatures;
