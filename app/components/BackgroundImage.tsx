import React from "react";

interface Props {
  imageUrl: string;
  slogan: string;
}

const BackgroundImage = ({ imageUrl, slogan }: Props) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">{slogan}</h1>
        <button className="mt-4 px-6 py-3 bg-yellow-400 concrete-gray font-semibold shadow-md hover:bg-yellow-600">
          Products
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
