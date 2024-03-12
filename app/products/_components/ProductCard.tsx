import React from "react";

interface Props {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: Props) => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col items-center overflow-hidden w-64 max-w-xs border border-concrete-gray  rounded-lg m-4">
        <img
          src={image}
          alt={title}
          className="w-full object-contain h-48"
          loading="lazy"
        />
        <div className="p-4">
          <h2 className="text-gray-800 font-semibold text-lg mb-2 text-center">
            {title}
          </h2>
          <p className="text-xl text-gray-800 font-semibold text-center">
            ${price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
