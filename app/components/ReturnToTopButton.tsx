"use client";
import React, { useState, useEffect } from "react";
import "./ReturnToTopButton.css";
import { MdKeyboardArrowUp } from "react-icons/md";

const ReturnToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const bodyHeight = document.body.scrollHeight;
      const scrollPercentage = (scrollTop / (bodyHeight - windowHeight)) * 100;
      setIsVisible(scrollPercentage > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`return-to-top-button ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
    >
      <MdKeyboardArrowUp />
    </button>
  );
};

export default ReturnToTopButton;
