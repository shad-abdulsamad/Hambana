import Link from "next/link";
import React from "react";

const Categories = () => {
  const fixedWidthStyle = { width: "250px" };

  return (
    <div
      className="bg-gray-100 p-10 text-gray-800 mt-5"
      style={fixedWidthStyle}
    >
      <h2 className="text-xl font-bold mb-4">Categories</h2>
      <ul className="list-none space-y-2">
        <li className="flex items-center">
          <span className="text-orange-500 mr-2">•</span>
          <Link href="#">A Delicate Blend</Link>
        </li>
        <li className="flex items-center">
          <span className="text-orange-500 mr-2">•</span>
          <Link href="#">Extra Virgin</Link>
        </li>
        <li className="flex items-center">
          <span className="text-orange-500 mr-2">•</span>
          <Link href="#">High Quality</Link>
        </li>
        <li className="flex items-center">
          <span className="text-orange-500 mr-2">•</span>
          <Link href="#">New Harvest</Link>
        </li>
        <li className="flex items-center">
          <span className="text-orange-500 mr-2">•</span>
          <Link href="#">Organic Only</Link>
        </li>
        <li className="flex items-center">
          <span className="text-orange-500 hover:bg-yellow-400 mr-2">•</span>
          <Link href="#">Original Taste</Link>
        </li>
      </ul>
    </div>
  );
};

export default Categories;
