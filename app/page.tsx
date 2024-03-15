import React from "react";
import LandingPageBackgroundImage from "./components/LandingPageBackgroundImage";
import WhatWeDoCard from "./components/WhatWeDoCard";
import salts from "@/public/salt.png";
import vinegar from "@/public/vinegar.png";
import oliveOil from "@/public/virgin-oil.png";
import oliveBottle from "@/public/olive-bottle.jpg";
import ProductCard from "./components/ProductCard";
import Link from "next/link";
import Slider from "./components/Slider";
import Features from "./components/Features";
import Banner from "./components/Banner";

export default function Home() {
  return (
    <>
      <LandingPageBackgroundImage
        imageUrl={oliveOil.src}
        slogan="We Produce The Best Olive Oil"
        buttonText="Products"
      />
      <Banner />
      <section className="text-center mb-12 mt-5">
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-4">
          What We Do
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <WhatWeDoCard
            image={oliveOil.src}
            title="Extra Virgin Olive Oil"
            body="Olive oil is made simply by crushing olives and extracting the juice. It is the only cooking oil that is made without the use of chemicals."
          />
          <WhatWeDoCard
            image={vinegar.src}
            title="Aged Balsamic Vinegar"
            body="Balsamic vinegar is rich and has a complex flavour that balances the sweet and sour elements of the cooked grape juice with hints of wood."
          />
          <WhatWeDoCard
            image={salts.src}
            title="Gourmet Salts"
            body="Huge selection of gourmet salts for every flavor profile. Our variety of culinary sea salts add an impressive finishing touch to any meal."
          />
        </div>
      </section>
      <section>
        <h2 className="text-2xl text-center sm:text-3xl font-serif text-gray-800 mb-4">
          Our Range
        </h2>
        <Slider />
        <Features />
      </section>
      <section className="flex flex-col items-center">
        <h2 className="text-2xl text-center sm:text-3xl font-serif text-gray-800 mb-4 mt-5">
          Newest Products
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <ProductCard
            image={oliveBottle.src}
            title="Extra Virgin Olive Oil"
            price={28.99}
          />
          <ProductCard
            image={oliveBottle.src}
            title="Extra Virgin Olive Oil"
            price={28.99}
          />
          <ProductCard
            image={oliveBottle.src}
            title="Extra Virgin Olive Oil"
            price={28.99}
          />
          <ProductCard
            image={oliveBottle.src}
            title="Extra Virgin Olive Oil"
            price={28.99}
          />
        </div>
        <button className="mt-4 px-6 py-3 bg-yellow-400 text-gray-900 font-light shadow-md hover:bg-yellow-600">
          <Link href="/products">View All</Link>
        </button>
      </section>
    </>
  );
}
