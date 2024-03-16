"use client";
import { useState } from "react";
import sliderItem1 from "@/public/slider-item-1.png";
import sliderItem2 from "@/public/slider-item-2.png";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import icon from "@/public/icon-1.webp";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderItems = [sliderItem1.src, sliderItem2.src];

  const goToPrevious = () => {
    const isFirstItem = currentIndex === 0;
    const newIndex = isFirstItem ? sliderItems.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastItem = currentIndex === sliderItems.length - 1;
    const newIndex = isLastItem ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  /*   useEffect(() => {
    const interval = setInterval(goToNext, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]); */

  return (
    <div className="flex p-10 ml-40">
      <div className="flex flex-col">
        <button
          className="bg-yellow-400 cursor-pointer p-3 hover:bg-gray-300"
          onClick={goToPrevious}
        >
          <SlArrowLeft />
        </button>
        <button
          className="bg-yellow-400 cursor-pointer p-3 hover:bg-gray-300"
          onClick={goToNext}
        >
          <SlArrowRight />
        </button>
      </div>
      <div>
        <ul>
          {sliderItems.map((item, index) => (
            <li
              key={index}
              style={{ display: index === currentIndex ? "block" : "none" }}
            >
              <img src={item} alt="Slider Item" />
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-yellow-400 p-5  flex flex-col  items-center justify-center promotional-text-width">
        <img
          className="mb-5"
          src={icon.src}
          alt="icon"
          height={50}
          width={50}
        />
        <p className="font-serif dark-gray font-bold text-lg">
          Choose From Our Superb Range of Quality Oils, From Extra Virgin to
          Infused Oils!
        </p>
      </div>
    </div>
  );
};

export default Carousel;
