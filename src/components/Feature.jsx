import React from "react";

const Feature = ({ title, description, ctaTitle, classNames, srcImage }) => {
  return (
    <div
      className={`flex justify-center items-center mt-28 px-8 xl:gap-0 gap-4 lg:justify-between flex-wrap ${classNames}`}
    >
      <div className="bg-gray-400 p-8 rounded-md">
        <img src={srcImage} alt="" className="w-md h-100 object-contain" />
      </div>
      <div className="flex flex-col gap-4 w-120 justify-center items-start">
        <span className="text-4xl font-bold">{title}</span>
        <span className="text-base">{description}</span>
        <button className="bg-black rounded-md text-white px-8 py-4 font-medium cursor-pointer">
          {ctaTitle}
        </button>
      </div>
    </div>
  );
};

export default Feature;
