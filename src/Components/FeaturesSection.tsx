"use client";

import React from "react";
import { FiShield, FiWind, FiMoon } from "react-icons/fi";

const FeaturesSection = () => {
  const features = [
    {
      title: "100% Chemical Free",
      description:
        "No toxic sprays or messy coils. Safe for infants, pregnant mothers, and pets.",
      icon: <FiShield className="text-2xl" />,
    },
    {
      title: "Ultra-Quiet Operation",
      description:
        "Operates below 35dB, ensuring your deep sleep is never disturbed by noise.",
      icon: <FiMoon className="text-2xl" />,
    },
    {
      title: "Advanced UV-Trap",
      description:
        "365nm bionic light wave attracts mosquitoes from all directions with ease.",
      icon: <FiWind className="text-2xl" />,
    },
  ];

  return (
    <section id="features" className="py-24 bg-white px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}

        <div className="flex lg:items-center justify-center flex-col mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-brandBlack ">
            Why Choose SafeGuard?
          </h2>
          <p className="text-gray-500 mt-2 lg:w-66 lg:text-center text-md">
            Smart technology designed for your family's comfort.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-softGray hover:bg-brandBlack hover:text-white transition-all duration-500 border border-transparent hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-brandBlack mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
