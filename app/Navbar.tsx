/* import React from "react";
import Sidebar from "./components/Sidebar";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around">
      <Sidebar />
      <Link href="/">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </Link>
    </nav>
  );
};

export default Navbar;
 */
"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsSticky(scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`flex justify-around ${isSticky ? "sticky-navbar" : ""}`}>
      <Sidebar />
      <Link href="/">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </Link>
    </nav>
  );
};

export default Navbar;
