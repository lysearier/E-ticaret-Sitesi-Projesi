import React from "react";
import arrow from "../../assets/photos/arrow.png";

export default function ContentPageTryIt() {
  return (
    <div className="text-center py-20 px-4">
      {/* Arrow görseli */}
      <img
        src={arrow}
        alt="Arrow"
        className="mx-auto mb-6 w-12 h-12 object-contain"
      />

      {/* Başlık ve Alt Başlık */}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
        WE Can't WAIT TO MEET YOU
      </h2>
      <p className="text-gray-600 text-base md:text-lg mb-6">Let’s Talk</p>

      {/* Buton */}
      <button className="bg-[#23A6F0] text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors">
        Try it free now
      </button>
    </div>
  );
}
