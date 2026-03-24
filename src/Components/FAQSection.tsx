"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is this safe to use around babies and pets?",
      answer:
        "Yes, absolutely! SafeGuard is 100% chemical-free and non-toxic. It uses physical UV light to attract mosquitoes, making it perfectly safe for infants, pregnant mothers, and pets.",
    },
    {
      question: "How does the UV light trap work?",
      answer:
        "The lamp emits a 365nm bionic violet light wave that mimics human body temperature. Once mosquitoes get close, the powerful built-in fan sucks them into the bottom trap box where they dry out naturally.",
    },
    {
      question: "Does it make a lot of noise during the night?",
      answer:
        "Not at all. The device operates at less than 35dB, which is quieter than a whisper. You can keep it in your bedroom for a peaceful, undisturbed sleep.",
    },
    {
      question: "Can I power it with a power bank?",
      answer:
        "Yes! It comes with a universal USB cable. You can power it using a laptop, power bank, USB adapter, or even your car's USB port, making it great for camping.",
    },
    {
      question: "How often should I clean the storage box?",
      answer:
        "For the best results, we recommend cleaning the bottom storage box once a week. Simply twist to open, discard the debris, and rinse with water.",
    },
  ];

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brandBlack tracking-tight">
            Common Questions
          </h2>
          <p className="text-gray-500 mt-4">
            Everything you need to know about the SafeGuard Mosquito Lamp.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-3xl transition-all duration-300 ${
                openIndex === index
                  ? "border-brandBlack bg-softGray"
                  : "border-gray-100 bg-white"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-bold text-brandBlack">
                  {faq.question}
                </span>
                <span className="text-xl">
                  {openIndex === index ? <FiMinus /> : <FiPlus />}
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index
                    ? "max-h-40 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <p className="px-6 pb-6 text-gray-500 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
