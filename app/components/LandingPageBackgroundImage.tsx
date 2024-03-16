/* import Link from "next/link";
import React from "react";

interface Props {
  imageUrl: string;
  slogan: string;
  buttonText: string;
  header: string;
}

const BackgroundImage = ({ imageUrl, header, slogan, buttonText }: Props) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 dark-image-background opacity-50"></div>

      <div className="relative text-center">
        <h1 className="text-4xl text-wheat mb-10 inline-block underline">
          {header}
        </h1>
        <p className="text-7xl font-bold text-wheat text-wrap font-serif">
          {slogan}
        </p>

        <button className="mt-10 px-6 py-3 bg-yellow-400 text-gray-900 font-light shadow-md hover:bg-yellow-600">
          <Link href="/products">{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
 */

import Link from "next/link";
import React from "react";

interface Props {
  imageUrl: string;
  slogan: string;
  buttonText: string;
  header: string;
}

const BackgroundImage = ({ imageUrl, header, slogan, buttonText }: Props) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 dark-image-background opacity-50"></div>

      <div className="relative text-center">
        <h1 className="text-4xl md:text-5xl lg:text-4xl text-wheat mb-10">
          {header}
        </h1>
        <p className="text-4xl md:text-5xl lg:text-6xl font-bold text-wheat text-wrap font-serif">
          {slogan}
        </p>

        <button className="mt-10 px-6 py-3 bg-yellow-400 text-gray-900 font-light shadow-md hover:bg-yellow-600">
          <Link href="/products">{buttonText}</Link>
        </button>
      </div>
    </div>
  );
};

export default BackgroundImage;
