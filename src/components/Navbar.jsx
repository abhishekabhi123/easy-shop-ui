import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-black py-5 px-5 text-white ">
      <div className=" px-4 flex justify-center items-center gap-5 cursor-pointer">
        <h1 className=" cursor-pointer text-xl font-bold ">ShopEase</h1>
        <span className="cursor-pointer text-lg">Shops</span>
        <span className="cursor-pointer text-lg">Best sellers</span>
        <span className="cursor-pointer text-lg">Deals</span>
      </div>
      <div>
        <div className=" flex justify-center items-center gap-5 cursor-pointer">
          <div className="flex justify-center items-center gap-2">
            <img src="../src/assets/icons8-shopping-cart-30.png" alt="" />
            <span>Cart</span>
          </div>
          <span>Help</span>
          <span>Login</span>
          <button className="bg-white rounded-full text-black px-4 py-2 cursor-pointer font-semibold hover:bg-gray-300">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
