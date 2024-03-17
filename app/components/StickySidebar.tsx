"use client";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./StickySidebar.css";

const StickySidebar = () => {
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
    <>
      <div className="sticky-sidebar-container">
        {socialMedias.map((social) => (
          <a
            href={social.link}
            key={social.name}
            className="social-icon"
            target="_blank"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </>
  );
};

export default StickySidebar;
