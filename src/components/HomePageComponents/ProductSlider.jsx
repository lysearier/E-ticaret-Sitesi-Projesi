import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

import carousel from "../../assets/photos/carousel.jpg";
import carousel2 from '../../assets/photos/carousel2.png';

const items = [
  {
    src: carousel2, // Fotoğraf 1
    collection: "SUMMER 2025",
    header: "NEW COLLECTION",
    description:
      "We know how large objects will act, but things on a small scale.",
    altText: "Slide 1",
    caption: "Slide 1",
    key: 1,
  },
  {
    src: carousel, // Fotoğraf 2
    collection: "FALL 2025",
    header: "LATEST TRENDS",
    description:
      "See the latest fashion trends for the fall season.",
    altText: "Slide 2",
    caption: "Slide 2",
    key: 2,
  },
];

function Slider(args) {
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

  const slides = items.map((item) => (
    <CarouselItem
      onExiting={() => setAnimating(true)}
      onExited={() => setAnimating(false)}
      key={item.key}
    >
      <div className="flex items-center justify-start relative">
        <div className="w-full">
          <img
            src={item.src}
            alt={item.altText}
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="flex flex-col gap-9 my-9 ml-[15%] absolute">
          <h5 className="text-black text-base font-bold leading-normal">
            {item.collection}
          </h5>
          <h1 className="text-black text-6xl font-bold leading-normal">
            {item.header}
          </h1>
          <h4 className="text-black text-[20px] font-normal leading-8 w-[60%]">
            {item.description}
          </h4>
          <a
            href="/productlist"
            className="bg-[#2DC071] px-[2.5rem] py-[1rem] w-[50%] text-center rounded text-white text-2xl font-bold leading-loose hover:bg-[#23856D] duration-300"
          >
            SHOP NOW
          </a>
        </div>
      </div>
    </CarouselItem>
  ));

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} {...args}>
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default Slider;
