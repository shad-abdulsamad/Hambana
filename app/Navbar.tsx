"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import "./Navbar.css";

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
    <nav
      className={`navbar flex justify-around ${
        isSticky ? "sticky-navbar" : "transparent-navbar"
      }`}
    >
      <Sidebar />

      {isSticky ? null : (
        <Link className="z-10 logo" href="/">
          <Image src={logo} alt="Logo" width={120} height={120} />
        </Link>
      )}
    </nav>
  );

  /*   return (
    <nav
      className={`navbar flex justify-around ${
        isSticky ? "sticky-navbar" : "transparent-navbar"
      }`}
    >
      <Sidebar />

      <Link className={`z-10 logo ${isSticky ? "show-logo" : ""}`} href="/">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </Link>
    </nav>
  ); */
};
export default Navbar;
