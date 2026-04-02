"use client";

import React from "react";
import {
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900  pt-20  pb-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-bold text-2xl text-brandWhite">
              SafeGuard<span className="text-brandWhite">.</span>
            </a>
            <p className=" mt-6 text-sm text-brandWhite leading-relaxed">
              Providing advanced, chemical-free mosquito protection for modern
              homes. Sleep tight, we've got you covered.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-brandWhite shadow-sm hover:bg-white hover:text-gray-900 transition-all"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-brandWhite shadow-sm hover:bg-white hover:text-gray-900 transition-all"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-brandWhite shadow-sm hover:bg-white hover:text-gray-900 transition-all"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brandWhite mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm ">
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  How it Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Buy Now
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-brandWhite mb-6">Support</h4>
            <ul className="space-y-4 text-sm ">
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Order Tracking
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-brandWhite hover:text-brandWhite transition"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-brandWhite mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm ">
              <li className="flex  text-brandWhite items-center gap-3">
                <FiMail className="" /> support@safeguard.com
              </li>
              <li className="flex  text-brandWhite items-center gap-3">
                <FiPhone className="" /> +880 1234 567 890
              </li>
              <li className="flex text-brandWhite  items-center gap-3">
                <FiMapPin className="" /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px  w-full mb-8"></div>

        {/* Copyright */}
        <div className="flex text-brandWhite flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs ">
            © {new Date().getFullYear()} SafeGuard Mosquito Killer. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-brandWhite">
            <span>Designed by Mohammad Ridwan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
