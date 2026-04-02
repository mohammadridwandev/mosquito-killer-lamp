"use client";

import Image from "next/image";
import React from "react";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "./Navbar";
import OrderPopup from "./OrderForm";

const HeroSection = () => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <section className="flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 py-4 min-h-screen">
      {/* --- NAVIGATION --- */}
      <Navbar />

      {/* --- HERO CONTENT --- */}
      <div id="home" className="flex pt-30 flex-col py-10">
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className="text-4xl lg:text-6xl lg:max-w-4xl mt-8 text-gray-900 leading-[1.1] font-bold tracking-tight">
            Say Goodbye to Sleepless Nights and Harmful Coils
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-150 mt-6 leading-relaxed">
            Protect your family with SafeGuard’s 360° UV-Trap technology. 100%
            chemical-free, noise-free, and safe for babies
          </p>

          <div className="flex gap-4 mt-8">
            <button
              onClick={() => setOpen(true)}
              className="bg-brandBlack text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition shadow-lg cursor-pointer shadow-violet-200"
            >
              Buy Now <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/hero-section-image/image (2).png"
            alt="Mosquito Killer Lamp"
            width={650}
            height={500}
            className="mt-12 rounded-3xl object-cover shadow-2xl border-4 border-white"
          />
        </div>

        <OrderPopup isOpen={isOpen} onClose={() => setOpen(false)}></OrderPopup>
      </div>
    </section>
  );
};

export default HeroSection;
