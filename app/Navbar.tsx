import React from "react";
import Sidebar from "./components/Sidebar";
import logo from "../public/logo.png";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex justify-around" style={{ backgroundColor: "#EEECE8" }}>
      <Sidebar />
      <Link href="/">
        <Image src={logo} alt="Logo" width={120} height={120} />
      </Link>
    </nav>
  );
};

export default Navbar;
