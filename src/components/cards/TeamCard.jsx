import React from "react";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function TeamCard({ image, name, role }) {
  return (
    <div className="flex flex-col items-center overflow-hidden w-full bg-white">
      <img src={image} alt={name} className="w-full h-[65%] object-cover" />
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mb-3">{role}</p>
        <div className="flex justify-center gap-4 text-gray-600">
          <Facebook className="w-5 h-5 cursor-pointer hover:text-blue-500" />
          <Instagram className="w-5 h-5 cursor-pointer hover:text-pink-500" />
          <Twitter className="w-5 h-5 cursor-pointer hover:text-sky-400" />
        </div>
      </div>
    </div>
  );
}
