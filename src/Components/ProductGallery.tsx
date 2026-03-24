"use client";

import Image from "next/image";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight, FiMaximize2 } from "react-icons/fi";

const ProductGallery = () => {
  // আপনার আপলোড করা ইমেজের লিস্ট
  const images = [
    "/hero-seciton-image/image01.png",
    "/hero-seciton-image/image 07.png",
    "/hero-seciton-image/image 08.png",
    "/hero-seciton-image/image 09.png",
    "/hero-seciton-image/image 10.png",
  ];

  const [activeImg, setActiveImg] = useState(0);

  const nextImg = () => setActiveImg((prev) => (prev + 1) % images.length);
  const prevImg = () =>
    setActiveImg((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section className="lg:py-16 bg-softGray px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex lg:items-center justify-center flex-col mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-brandBlack ">
            See it in Action
          </h2>
          <p className="text-gray-500 mt-2 lg:w-96 lg:text-center text-md">
            Sleek, portable, and designed to blend perfectly with your modern
            interior.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Thumbnails (Left side on Desktop) */}
          <div className="lg:col-span-2 order-2 lg:order-1 flex lg:flex-col gap-4 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
            {images.map((img, index) => (
              <button
                key={index}
                onClick={() => setActiveImg(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-2xl overflow-hidden border-2 transition-all ${
                  activeImg === index
                    ? "border-brandBlack scale-105"
                    : "border-transparent opacity-60"
                }`}
              >
                <Image src={img} alt="thumb" fill className="object-cover" />
              </button>
            ))}
          </div>

          {/* Main Stage (Center) */}
          <div className="lg:col-span-7 order-1 lg:order-2 relative aspect-square bg-white rounded-md overflow-hidden shadow-xl group">
            <Image
              src={images[activeImg]}
              alt="Active Product View"
              fill
              className="object-contain p-8  transition-transform duration-700 "
            />

            {/* Navigation Arrows */}
            <div className="absolute inset-x-6 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
              <button
                onClick={prevImg}
                className="p-3 bg-white/80 backdrop-blur shadow-lg rounded-full hover:bg-white text-brandBlack"
              >
                <FiChevronLeft size={24} />
              </button>
              <button
                onClick={nextImg}
                className="p-3 bg-white/80 backdrop-blur shadow-lg rounded-full hover:bg-white text-brandBlack"
              >
                <FiChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Product Quick Info (Right side) */}
          <div className="lg:col-span-3 order-3 space-y-6">
            <div className="p-6 bg-white rounded-md border border-gray-100 shadow-sm">
              <h4 className="font-bold text-brandBlack mb-2">
                Modern Aesthetic
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                The minimalist cylinder design isn't just for looks—it provides
                360° attraction.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md border border-gray-100 shadow-sm">
              <h4 className="font-bold text-brandBlack mb-2">Portable USB</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                Plug it into any power source. Perfect for travel and camping.
              </p>
            </div>
            <button className="w-full py-4 bg-brandBlack text-white rounded-2xl font-bold hover:bg-gray-800 transition shadow-lg active:scale-95">
              Order Yours Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
