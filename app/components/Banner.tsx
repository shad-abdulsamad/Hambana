import React from "react";

const Banner = () => {
  const info = [
    {
      icon: "Icon1",
      title: "Gourmet Flavour",
      description:
        "We focus on providing our clients only the freshest products from around the world.",
    },
    {
      icon: "Icon2",
      title: "Special Oils",
      description:
        "The taste, the aroma and the natural ingredients of olive oils are kept unaltered.",
    },
    {
      icon: "Icon3",
      title: "Health Benefits",
      description:
        "The health benefits of olive oil are unrivaled, and research reveals new every day.",
    },
    {
      icon: "Icon4",
      title: "Extraordinary Taste",
      description:
        "We produce every day the extraordinary just-pressed organic olive oil.",
    },
  ];

  return (
    <section className="bg-yellow-400 p-4 md:flex md:justify-around">
      {info.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-2 text-center p-10 mb-10 md:mb-0 md:p-4"
        >
          <div className="bg-slate-gray rounded-full p-4 w-20 h-20 flex items-center justify-center mb-4">
            {/* Placeholder for icon */}
            <span>{item.icon}</span>
          </div>
          <h3 className="text-lg font-semibold font-serif">{item.title}</h3>
          <p className="text-sm font-light">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Banner;
