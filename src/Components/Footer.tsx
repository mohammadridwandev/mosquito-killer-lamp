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
    <footer className="bg-softGray pt-20 pb-10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="font-bold text-2xl text-brandBlack">
              SafeGuard<span className="text-gray-400">.</span>
            </a>
            <p className="text-gray-500 mt-6 text-sm leading-relaxed">
              Providing advanced, chemical-free mosquito protection for modern
              homes. Sleep tight, we've got you covered.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandBlack shadow-sm hover:bg-brandBlack hover:text-white transition-all"
              >
                <FiFacebook />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandBlack shadow-sm hover:bg-brandBlack hover:text-white transition-all"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-brandBlack shadow-sm hover:bg-brandBlack hover:text-white transition-all"
              >
                <FiTwitter />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-brandBlack mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  How it Works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Buy Now
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-brandBlack mb-6">Support</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Return Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-brandBlack transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-brandBlack mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li className="flex items-center gap-3">
                <FiMail className="text-brandBlack" /> support@safeguard.com
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-brandBlack" /> +880 1234 567 890
              </li>
              <li className="flex items-center gap-3">
                <FiMapPin className="text-brandBlack" /> Dhaka, Bangladesh
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 w-full mb-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} SafeGuard Mosquito Killer. All rights
            reserved.
          </p>
          <div className="flex gap-6 text-[10px] uppercase tracking-widest font-bold text-gray-300">
            <span>Designed by Mohammad Ridwan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
