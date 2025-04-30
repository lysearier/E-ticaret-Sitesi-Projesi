import React from "react";
import contactHeader from "../../assets/photos/contactHeader.png";

export default function ContactPageHero() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      {/* Flex container for text and image */}
      <div className="flex flex-col justify-between sm:flex-row items-center gap-6 sm:gap-10 md:gap-16">
        {/* Left Section: Contact Information and Text */}
        <div className="flex flex-col items-start text-gray-900 space-y-4 max-w-xl">
          <h1 className="text-3xl md:text-2xl font-bold text-gray-900 mb-5">
            CONTACT US
          </h1>
          <h1 className="text-xl md:text-7xl font-bold text-gray-900 mb-5">
            Get in touch <br /> today!
          </h1>
          <p className="text-gray-500 text-base md:text-lg mb-6">
            We know how large objects will act,
            <br className="hidden sm:block" />
            but things on a small scale
          </p>

          {/* Phone and Fax Information */}
          <div className="text-gray-900 space-y-2">
            <div>
              <span className="font-bold">Phone:</span> +451215215
            </div>
            <div>
              <span className="font-bold">Fax:</span> +451215215
            </div>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="flex justify-center">
          <img
            src={contactHeader}
            alt="Contact Header"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </main>
  );
}
