import React from "react";
import oliveOil from "@/public/olive-oil.jpg";

const Slider = () => {
  return (
    <div className="flex w-full max-w-xl mx-auto">
      <img className="flex-none w-3/5" src={oliveOil.src} alt="product" />
      <div className="flex-none w-2/5 bg-yellow-400 p-4 flex flex-col justify-center items-start">
        <p className="slate-gray text-lg font-bold font-serif text-center p-3">
          Choose from Our Superb Range of Quality Oils, From Extra Virgin to
          Infused Oils!
        </p>
      </div>
    </div>
  );
};

export default Slider;
