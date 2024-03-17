"use client";
import icon from "@/public/icon-1.webp";
import sliderItem1 from "@/public/slider-item-1.png";
import sliderItem2 from "@/public/slider-item-2.png";
import Image from "next/image";
import { useState } from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import "./Carousel.css";

const Carousel = () => {
  const images = [sliderItem1, sliderItem2];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-buttons">
        <button aria-label="Previous Slide" onClick={prevSlide}>
          <SlArrowLeft />
        </button>
        <button aria-label="Next Slide" onClick={nextSlide}>
          <SlArrowRight />
        </button>
      </div>
      <div className="red">
        <div className="slider">
          <Image src={images[current]} alt={`Slider item ${current + 1}`} />
        </div>
      </div>
      <div className="yellow">
        <Image className="mb-2" src={icon} alt="icon" height={50} width={50} />
        <p className="font-bold dark-gray text-xl font-serif">
          Choose From Our Superb Range of Quality Oils, From Extra Virgin to
          Infused Oils!
        </p>
      </div>
    </div>
  );
};

export default Carousel;
