import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { Heart, ShoppingCart, Eye } from "lucide-react";

import photo1 from "../../assets/photos/carousel3.png";
import photo2 from "../../assets/photos/carousel4.png";

const items = [
  { src: photo1, altText: "Photo 1", key: 1 },
  { src: photo2, altText: "Photo 2", key: 2 },
];

export default function ProductDetailProduct() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.key}
    >
      <img
        src={item.src}
        alt={item.altText}
        className="w-full h-[400px] sm:h-[400px] object-cover rounded-lg"
      />
    </CarouselItem>
  ));

  return (
    <div className="container mx-auto px-8 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left: Carousel */}
        <div className="lg:w-1/2">
          <Carousel activeIndex={activeIndex} next={next} previous={previous}>
            <CarouselIndicators
              items={items}
              activeIndex={activeIndex}
              onClickHandler={goToIndex}
            />
            {slides}
            <CarouselControl
              direction="prev"
              directionText="Previous"
              onClickHandler={previous}
            />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={next}
            />
          </Carousel>
        </div>

        {/* Right: Product Details */}
        <div className="lg:w-1/2 space-y-4 text-left">
          <h4 className="text-2xl font-bold">Floating Phone</h4>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="flex text-yellow-500 text-sm">
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span>★</span>
              <span className="text-gray-300">★</span>
            </div>
            <span>10 Reviews</span>
          </div>

          <h5 className="text-xl font-semibold text-black">$1,139.33</h5>
          <h6 className="text-bold text-green-600">
            <span className="text-black">Availability: </span>In Stock
          </h6>

          <p className="text-gray-700 text-sm">
            Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
            RELIT official consequent door ENIM RELIT Mollie. Excitation venial
            consequent sent nostrum met.
          </p>
          <div className="flex flex-col ">
            {/* Colors */}
            <div className="flex space-x-2 mt-4">
              <div className="w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="w-6 h-6 rounded-full bg-green-500"></div>
              <div className="w-6 h-6 rounded-full bg-orange-500"></div>
              <div className="w-6 h-6 rounded-full bg-black"></div>
            </div>
            <hr className="my-4 border-t-2 border-gray-300" />
            {/* Buttons */}
            <div className="flex items-center gap-4 mt-4">
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                Select Option
              </button>
              <Heart className="w-6 h-6 cursor-pointer text-gray-700 hover:text-red-500" />
              <ShoppingCart className="w-6 h-6 cursor-pointer text-gray-700 hover:text-blue-600" />
              <Eye className="w-6 h-6 cursor-pointer text-gray-700 hover:text-green-600" />
            </div>
          </div>
        </div>
      </div>
      {/* Thumbnail preview */}
      <div className="flex gap-2 mt-4">
        {items.map((img, idx) => (
          <img
            key={idx}
            src={img.src}
            alt={`thumb-${idx}`}
            onClick={() => setActiveIndex(idx)}
            className={`w-16 h-16 object-cover border rounded cursor-pointer ${
              idx === activeIndex ? "ring-2 ring-blue-500" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
}
