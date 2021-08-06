import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import CarouselChart from "./CarouselChart";

const WeatherCarousel = () => {
  const [toggle, setToggle] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const handleClick = (pos) => {
    setActiveIndex(() => pos);
    setToggle((prev) => !prev);
  };
  return (
    <>
      {toggle && (
        <CarouselCard
          onClick={handleClick}
          showCard={true}
          activeIndex={activeIndex}
        />
      )}
      {!toggle && (
        <CarouselChart onClick={handleClick} activeIndex={activeIndex} />
      )}
    </>
  );
};

export default WeatherCarousel;
