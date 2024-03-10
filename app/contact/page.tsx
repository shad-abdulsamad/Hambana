"use client";
import React from "react";
import Map from "./_components/Map";
import Form from "./_components/Form";
import BackgroundImage from "../components/BackgroundImage";
import olive from "@/public/olive-oil.jpg";
const Contact = () => {
  return (
    <>
      <BackgroundImage imageUrl={olive.src} title="Contact" />
      <div className="flex flex-col items-center">
        <Form />
        <Map />
      </div>
    </>
  );
};

export default Contact;
