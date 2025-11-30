import React from "react";
import heroImage from "../assets/hero-image.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-8 lg:gap-0 lg:justify-between w-[82%] m-auto mt-28 lg:flex-nowrap flex-wrap">
      <div className="flex flex-col gap-5 w-full">
        <span className="text-[3.25rem] font-medium">
          Shop Smarter. Shop Better.
        </span>
        <span className="w-full lg:w-152">
          Discover thousands of products, each carefully selected for quality,
          style and value bringing everything you need and love into one
          convenient place.
        </span>
        <div className="flex gap-4 mt-8">
          <button className="bg-black rounded-md text-white px-8 py-3 font-semibold hover:bg-gray-500">
            Show Now
          </button>
          <button className="bg-black rounded-md text-white px-8 py-3 font-semibold hover:bg-gray-500">
            Explore Details
          </button>
        </div>
      </div>
      <img src={heroImage} className="w-[20rem] lg:w-120lg:h-[25rem]" />
    </div>
  );
};

export default Hero;
