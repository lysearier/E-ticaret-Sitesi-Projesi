import React from "react";
import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactPageSupport() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      {/* Başlıklar */}
      <h3 className="text-lg text-gray-500 mb-2">Visit our office</h3>
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-12">
        We help small businesses with big ideas
      </h2>

      {/* Kartlar */}
      <div className="flex flex-col md:flex-row gap-6 justify-center">
        {/* Sol Kart */}
        <div className="flex flex-col items-center border p-6 rounded-md w-full md:w-1/3">
          <Phone size={40} className="text-blue-500 mb-4" />
          <p className="text-gray-800">georgia.young@example.com</p>
          <p className="text-gray-800">georgia.young@ple.com</p>
          <p className="text-blue-500 mt-2">Get Support</p>
          <button className="mt-4 border border-[#23A6F0] text-[#23A6F0] px-4 py-2 rounded-md">
            Submit Request
          </button>
        </div>

        {/* Orta Kart (arka plan koyu) */}
        <div className="flex flex-col items-center bg-[#252B42] text-white p-6 rounded-md w-full md:w-1/3">
          <MapPin size={40} className="text-white mb-4" />
          <p className="text-white">georgia.young@example.com</p>
          <p className="text-white">georgia.young@ple.com</p>
          <p className="text-blue-400 mt-2">Get Support</p>
          <button className="mt-4 border border-[#23A6F0] text-[#23A6F0] px-4 py-2 rounded-md">
            Submit Request
          </button>
        </div>

        {/* Sağ Kart */}
        <div className="flex flex-col items-center border p-6 rounded-md w-full md:w-1/3">
          <Mail size={40} className="text-blue-500 mb-4" />
          <p className="text-gray-800">georgia.young@example.com</p>
          <p className="text-gray-800">georgia.young@ple.com</p>
          <p className="text-blue-500 mt-2">Get Support</p>
          <button className="mt-4 border border-[#23A6F0] text-[#23A6F0] px-4 py-2 rounded-md">
            Submit Request
          </button>
        </div>
      </div>
    </div>
  );
}
