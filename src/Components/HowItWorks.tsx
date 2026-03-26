"use client";

import Image from "next/image";
import React from "react";
import { FiTarget, FiWind, FiLock } from "react-icons/fi";

const HowItWorks = () => {
  const steps = [
    {
      id: "01",
      icon: <FiTarget />,
      title: "Attracts",
      desc: "365nm UV bionic light waves attract mosquitoes by mimicking human body heat.",
    },
    {
      id: "02",
      icon: <FiWind />,
      title: "Inhales",
      desc: "The powerful 7-blade vortex fan sucks them into the storage basket instantly.",
    },
    {
      id: "03",
      icon: <FiLock />,
      title: "Traps",
      desc: "The anti-escape funnel ensures they are trapped and dried out naturally.",
    },
  ];

  return (
    <section className="py-24 bg-softGray px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Image Content */}
          <div className="relative">
            <div className="bg-white p-4 rounded-xl border border-gray-200  ">
              <Image
                src="/hero-section-image/image (3).png"
                alt="Technology Detail"
                width={600}
                height={600}
                className="rounded-4xl object-cover"
              />
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-brandBlack text-white p-8 rounded-3xl hidden md:block shadow-2xl">
              <p className="text-3xl font-bold">360°</p>
              <p className="text-xs uppercase tracking-widest opacity-70">
                Suction Area
              </p>
            </div>
          </div>

          {/* Right Side: Steps Content */}
          <div className="flex flex-col gap-10">
            <div className="flex  justify-center flex-col">
              <h2 className="text-2xl md:text-4xl font-bold text-brandBlack ">
                Smart technology, <br /> simple results.
              </h2>
              <p className="text-gray-500 mt-2 lg:w-66  text-md">
                No complex setup. Just plug in the USB and enjoy a mosquito-free
                zone.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="flex gap-6 group">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-2xl text-brandBlack group-hover:bg-brandBlack group-hover:text-white transition-all duration-300 shadow-sm">
                    {step.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-brandBlack flex items-center gap-3">
                      <span className="text-xs font-black text-gray-300">
                        {step.id}
                      </span>
                      {step.title}
                    </h4>
                    <p className="text-gray-500 mt-1 text-sm leading-relaxed max-w-sm">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
