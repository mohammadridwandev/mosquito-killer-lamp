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
    <div className="flex flex-col py-10 lg:py-16 items-center space-y-6 p-4">
      {/* Main Image Container */}

      <div className="w-full max-w-xl overflow-hidden rounded-xl shadow-md bg-gray-100">
        <img
          src={activeImage}
          className="w-full h-auto object-cover transition-all duration-500 ease-in-out"
          alt="Selected Gallery View"
        />
      </div>

      {/* Thumbnail Selection Grid */}
      <div className="grid grid-cols-4 max-w-xl  gap-4 w-full">
        {images.map((src, index) => (
          <button
            key={index}
            onClick={() => setActiveImage(src)}
            className={`relative shadow-md rounded-xl border-1-blue overflow-hidden transition-all duration-200 focus:outline-none ${
              activeImage === src
                ? "ring-4 ring-blue-100  scale-95 shadow-inner"
                : "hover:opacity-80 grayscale-[20%] hover:grayscale-0"
            }`}
          >
            <img
              src={src}
              className=" w-full object-cover rounded-xl shadow-xl"
              alt={`Thumbnail ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
