import React from "react";
import { APP_STORE_IMG_URL, PLAY_STORE_IMG_URL } from "../utils/constants";

const Footer = () => {
  return (
    <div className="flex flex-col bg-black mt-20 p-20 text-white gap-5">
      <span className="font-extrabold text-4xl">ShopEase</span>
      <span className="font-semibold hover:underline">Visit help center</span>
      <div className="flex justify-between items-center ">
        <div className="flex flex-col gap-3 hover:cursor-pointer">
          <span className="text-xl font-bold">Company</span>
          <span>About Us</span>
          <span>Our offering</span>
          <span>Newsroom</span>
          <span>Investor</span>
        </div>

        <div className="flex flex-col gap-3 hover:cursor-pointer">
          <span className="text-xl font-bold">Quick Links</span>
          <span>Home</span>
          <span>Shops</span>
          <span>Best sellers</span>
          <span>Deals</span>
        </div>
        <div className="flex flex-col gap-3 hover:cursor-pointer">
          <span className="text-xl font-bold">Customer Support</span>
          <span>FAQs</span>
          <span>Shipping and delivery</span>
          <span>Returns and Refunds</span>
          <span>Privacy Policy </span>
        </div>

        <div className="flex flex-col gap-3 hover:cursor-pointer">
          <span className="text-xl font-bold">Follow Us</span>
          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>
          <span>Twitter / X</span>
        </div>
      </div>
      <div className="flex justify-start items-center gap-5">
        <img
          src={PLAY_STORE_IMG_URL}
          alt="play-store"
          className="w-32 h-32 hover:cursor-pointer"
        />
        <img
          src={APP_STORE_IMG_URL}
          alt="app-store"
          className="w-32 h-32 hover:cursor-pointer"
        />
      </div>
      <span className="text-sm text-gray-400">&copy; 2025 ShopEase Inc.</span>
    </div>
  );
};

export default Footer;
