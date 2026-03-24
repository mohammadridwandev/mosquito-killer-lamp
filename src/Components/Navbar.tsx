"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiMenu, FiX, FiArrowRight } from "react-icons/fi";

const HeroSection = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // মেনু আইটেম এবং তাদের আইডি
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "How it Works", id: "howitworks" },
    { name: "Support", id: "support" },
  ];

  return (
    <section className="flex flex-col items-center bg-linear-to-b from-[#D9D9FF] to-[#F8F3F9] px-4 py-4 min-h-screen">
      {/* --- NAVIGATION --- */}

      <nav className="flex   items-center justify-between bg-white/60  rounded-full px-7 md:px-3 py-2.5 w-full max-w-5xl backdrop-blur-md">
        <a href="#home" className="lg:ps-2 font-bold text-xl">
          SafeGuard<span className="text-brandBlack">.</span>
        </a>

        {/* Desktop & Mobile Menu */}
        <div
          id="menu"
          className={`max-md:absolute max-md:bg-slate-100/96 lg:justify-center max-md:h-screen max-md:overflow-hidden max-md:transition-[width] max-md:duration-300 max-md:top-0 max-md:left-0 max-md:flex-col flex items-center lg:pt-0 pt-20 gap-5 z-50 md:gap-10 flex-1 ${
            mobileOpen ? "max-md:w-full" : "max-md:w-0"
          }`}
        >
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setMobileOpen(false)}
              className="text-gray-900  hover:text-gray-800 text-sm font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={() => setMobileOpen(false)}
            className="md:hidden bg-brandBlack cursor-pointer text-white p-3 rounded-full shadow-lg"
          >
            <FiX size={24} />
          </button>
        </div>

        <div className="flex items-center gap-2 md:pr-1">
          <button className="hidden md:inline-block bg-brandBlack hover:bg-gray-800 cursor-pointer text-white px-6 py-3 rounded-full text-sm font-medium transition shadow-md active:scale-95">
            Order Now
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-gray-700 cursor-pointer p-2"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </nav>

      {/* --- HERO CONTENT --- */}
      <div id="home" className="flex flex-col py-10">
        <div className="flex items-center justify-center flex-col text-center">
          <h1 className="text-3xl md:text-[66px] max-w-4xl mt-8 text-gray-900 leading-[1.1] font-bold tracking-tight">
            Protect Your Home from <br className="hidden md:block" />
            Mosquitoes Silently.
          </h1>

          <p className="text-base md:text-lg text-gray-500 max-w-[600px] mt-6 leading-relaxed">
            Experience peaceful nights with our advanced UV-Trap technology. No
            chemicals, no noise—just pure protection for your family.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-brandBlack text-white px-6 py-3 rounded-full font-medium flex items-center gap-2 hover:bg-gray-800 transition shadow-lg cursor-pointer shadow-violet-200">
              Buy Now <FiArrowRight />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Image
            src="/hero-seciton-image/image01.png"
            alt="Mosquito Killer Lamp"
            width={650}
            height={500}
            className="mt-12 rounded-3xl object-cover shadow-2xl border-4 border-white"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
