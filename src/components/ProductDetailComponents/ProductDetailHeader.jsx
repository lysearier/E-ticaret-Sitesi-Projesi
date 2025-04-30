import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductDetailHeader() {

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-start">
        <div className="flex items-center space-x-2 text-sm font-bold text-[#737373] mt-4 md:mt-0">
          <NavLink exact to="/" className="text-[#252B42]">
            Home
          </NavLink>
          <span className="text-[#BDBDBD]">&gt;</span>
          <NavLink to="/shop" className="text-[#737373]">
            Shop
          </NavLink>
        </div>
      </div>
    </div>
  );
}
