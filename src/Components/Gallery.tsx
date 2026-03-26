"use client";

import React, { useState } from "react";

const images = [
  "/hero-section-image/image (1).png",
  "/hero-section-image/image (2).png",
  "/hero-section-image/image (3).png",
  "/hero-section-image/image (4).png",
];

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(images[0]);

  return (
    <section className="py-16 bg-slate-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* --- Text Content --- */}

        <div className="flex lg:items-center justify-center flex-col mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-brandBlack ">
            Elegant. Silent. Secure.
          </h2>
          <p className="text-gray-500 mt-2 lg:w-88 lg:text-center text-md">
            See why SafeGuard is the ultimate choice for your modern home.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          {/* Main Image Container */}
          <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-xl bg-softGray border-8 border-white">
            <img
              src={activeImage}
              className="w-full h-auto object-cover transition-all duration-500 ease-in-out hover:scale-105"
              alt="Selected Gallery View"
            />
          </div>

          {/* Thumbnail Selection Grid */}
          <div className="grid grid-cols-4 max-w-xl gap-4 w-full px-2">
            {images.map((src, index) => (
              <button
                key={index}
                onClick={() => setActiveImage(src)}
                className={`relative rounded-xl shadow-md overflow-hidden transition-all duration-300 focus:outline-none ${
                  activeImage === src
                    ? "ring-4 ring-blue-200 scale-95 shadow-lg"
                    : "opacity-60 hover:opacity-100 grayscale hover:grayscale-0"
                }`}
              >
                <img
                  src={src}
                  className="w-full aspect-square object-cover"
                  alt={`Thumbnail ${index + 1}`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
