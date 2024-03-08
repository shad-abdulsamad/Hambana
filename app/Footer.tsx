import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const socialMedias = [
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      link: "https://www.facebook.com",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      link: "https://www.instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com",
    },
  ];

  return (
    <footer
      className="flex flex-col sm:flex-row justify-around p-5 bg-gray-700 text-gray-400"
      style={{ backgroundColor: "#3D4348" }}
    >
      <div className="flex flex-col max-w-xs mb-4 sm:mb-0">
        <h3 className="text-yellow-400 font-semibold text-lg mb-2">About Us</h3>
        <p className="text-sm">
          We love what we do and how we do! We put our care, quality and passion
          into creating our extra virgin olive oil. Our passion pushes us to
          continually craft the freshest extra virgin olive oil. We use
          traditional methods to produce oil so when you buy olive oil from us,
          you buy quality guarantee.
        </p>
        <p className="mt-3 pt-3 text-sm">2024&copy; All Right Reserved</p>
      </div>
      <div className="flex flex-col mb-4 sm:mb-0">
        <h3 className="text-yellow-400 font-semibold text-lg mb-2">
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
      <div>
        <h3 className="text-yellow-400 font-semibold text-lg mb-2">
          Contact Us
        </h3>
        <p className="text-sm mb-1">Address:</p>
        <p className="text-sm mb-1">Phone:</p>
        <p className="text-sm mb-4">Email:</p>
        <div className="flex justify-around space-x-2">
          {socialMedias.map((media) => (
            <a
              key={media.name}
              href={media.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-yellow-400 p-2 text-gray-700 hover:bg-yellow-500"
            >
              {media.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
