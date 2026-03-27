"use client";

import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "How it Works", id: "howItWorks" },
    { name: "Gallery", id: "gallery" },
    { name: "Support", id: "support" },
  ];

  // ✅ Smooth scroll handler using global Lenis instance
  const handleScroll = (id: string) => {
    // 👉 using Lenis instance from ScrollAnimate (global)
    if ((window as any).lenis) {
      (window as any).lenis.scrollTo(`#${id}`);
    } else {
      // fallback (just in case Lenis না থাকে)
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-100 flex items-center justify-center">
      <nav
        className="flex m-auto fixed items-center mt-18 justify-between bg-white/60 rounded-full px-7 md:px-3 py-2.5 
        w-[calc(100%-2rem)] md:w-full md:max-w-5xl backdrop-blur-md"
      >
        <div className="text-xl font-bold text-gray-900">SafeGuard</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-10 flex-1 justify-center">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className="text-gray-900 hover:text-gray-800 cursor-pointer text-sm font-medium transition-colors"
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* MOBILE MENU */}
        <div
          className={`absolute -top-6 left-0 right-0 h-screen w-full bg-slate-100/96 flex flex-col items-center gap-5 pt-16 z-50 transition-all duration-300 ${
            mobileOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                handleScroll(link.id); // ✅ smooth scroll
                setMobileOpen(false); // ✅ close menu
              }}
              className="text-gray-800 cursor-pointer text-lg font-medium"
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => setMobileOpen(false)}
            className="bg-brandBlack text-white cursor-pointer p-3 mt-8 rounded-full"
          >
            <FiX size={24} />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-2 md:pr-1">
          <button className="cursor-pointer md:inline-block bg-brandBlack hover:bg-gray-800 text-white px-4 py-2 lg:px-6 lg:py-3 rounded-full text-sm font-medium transition">
            Order Now
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden cursor-pointer text-gray-700 p-2"
          >
            <FiMenu size={28} />
          </button>
        </div>
      </nav>
    </div>
  );
}
