import Link from "next/link";
import React from "react";

interface Props {
  imageUrl: string;
  slogan: string;
  buttonText: string;
}

const BackgroundImage = ({ imageUrl, slogan, buttonText }: Props) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="relative text-center">
        <h1 className="text-4xl font-bold text-white">{slogan}</h1>

        <button className="mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-light shadow-md hover:bg-yellow-600">
          <Link href="/products">{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
