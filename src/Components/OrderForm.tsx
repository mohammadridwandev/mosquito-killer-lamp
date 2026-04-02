"use client";

import React from "react";
import toast from "react-hot-toast";
import { FiX } from "react-icons/fi";

interface OrderMenu {
  isOpen: boolean;
  onClose: () => void;
}

const OrderPopup = ({ isOpen, onClose }: OrderMenu) => {
  if (!isOpen) return null;

  const handlerForm = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      address: formData.get("address"),
    };
    console.log(data);

    toast.success("Order Placed Successfully!");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
      {/* Backdrop - ক্লিক করলে পপআপ বন্ধ হবে */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Popup Content */}
      <div className="relative bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)] rounded-xl shadow-2xl w-full max-w-sm p-8 animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
        >
          <FiX size={24} />
        </button>

        <div className="text-center mb-6">
          <h2 className="text-xl font-bold text-gray-900">Order Now</h2>
          <p className="text-gray-500 text-xs mt-1">
            Enter your details to confirm
          </p>
        </div>

        <form onSubmit={handlerForm} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-500 outline-none transition-all text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-500 outline-none transition-all text-sm"
          />
          <textarea
            placeholder="Address"
            className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-violet-500 outline-none transition-all text-sm h-20 resize-none"
          ></textarea>

          <button className="w-full cursor-pointer bg-black text-white py-3 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-lg">
            Confirm Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderPopup;
