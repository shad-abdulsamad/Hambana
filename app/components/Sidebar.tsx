"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {isOpen ? (
        <RxCross1
          className="fixed cursor-pointer text-white text-3xl m-4 top-0 left-0 z-50 hover:text-yellow-400"
          onClick={toggleSidebar}
        />
      ) : (
        <FaBars
          className="fixed cursor-pointer text-black text-2xl m-5 top-0 left-0 z-50 hover:text-yellow-400"
          onClick={toggleSidebar}
        />
      )}

      <div
        className={`fixed top-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } w-80 h-full bg-gray-800 transition-transform duration-300 ease-in-out z-40`}
      >
        <ul className="list-none p-6 m-7 font-light">
          <li className="p-4 text-white hover:bg-yellow-400">
            <Link onClick={toggleSidebar} href="/">
              Home
            </Link>
          </li>
          <li className="p-4 text-white hover:bg-yellow-400">
            <Link onClick={toggleSidebar} href="/products">
              Products
            </Link>
          </li>
          <li className="p-4 text-white hover:bg-yellow-400">
            <Link onClick={toggleSidebar} href="/about">
              About Us
            </Link>
          </li>
          <li className="p-4 text-white hover:bg-yellow-400">
            <Link onClick={toggleSidebar} href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
