import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  const socialMedias = [
    { name: <FaFacebookF />, link: "https://facebook.com" },
    { name: <FaInstagram />, link: "https://instagram.com" },
    { name: <FaLinkedin />, link: "https://linkedin.com" },
  ];
  return (
    <footer
      className="flex justify-around p-5"
      style={{ backgroundColor: "#3D4348" }}
    >
      <div className="flex flex-col" style={{ maxWidth: "300px" }}>
        <h3 className="text-yellow-400 font-semibold font-serif">About Us</h3>
        <p style={{ color: "#929685" }} className="text-sm">
          We love what we do and how we do! We put our care, quality and passion
          into creating our extra virgin olive oil. Our passion pushes us to
          continually craft the freshest extra virgin olive oil. We use
          traditional methods to produce oil so when you buy olive oil from us,
          you buy quality guarantee.
        </p>
      </div>
      <div className="flex flex-col" style={{ color: "#929685" }}>
        <h3 className="text-yellow-400 font-semibold font-serif">
          Information
        </h3>
        <Link href="/" className="text-sm hover:text-yellow-400">
          Home
        </Link>
        <Link href="/products" className="text-sm hover:text-yellow-400">
          Products
        </Link>
        <Link href="/about" className="text-sm hover:text-yellow-400">
          About
        </Link>
        <Link href="/contact" className="text-sm hover:text-yellow-400">
          Contact
        </Link>
      </div>
      <div style={{ color: "#929685" }}>
        <h3 className="text-yellow-400 flex flex-col font-semibold font-serif">
          Contact Us
        </h3>
        <p className="text-sm">Address:</p>
        <p className="text-sm">Phone:</p>
        <p className="text-sm">Email:</p>
        <div className="flex justify-around mt-3 space-x-2">
          {socialMedias.map((icon) => (
            <div className="rounded-full bg-yellow-400 p-2 text-gray-700">
              <Link href={icon.link}>{icon.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
