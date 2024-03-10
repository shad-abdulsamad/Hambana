import Link from "next/link";
import React from "react";

interface Props {
  imageUrl: string;
  slogan: string;
  path: string;
}

const BackgroundImage = ({ imageUrl, slogan, path }: Props) => {
  return (
    <div
      className="hidden lg:flex min-h-screen items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="absolute inset-0 bg-slate-900 opacity-60"></div>

      <div className="relative text-center">
        <h1 className="text-6xl font-bold font-serif text-white">{slogan}</h1>
        <h3 className="text-wheat font-serif text-2xl mt-3 p-3">
          <Link
            className=" text-white hover:text-yellow-400 transition-all"
            href="/"
          >
            Home
          </Link>
          {" / "}
          {path}
        </h3>
      </div>
    </div>
  );
};

export default BackgroundImage;
