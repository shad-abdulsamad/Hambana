import React from "react";
import ProductCard from "./_components/ProductCard";
import BackgroundImage from "../components/BackgroundImage";
import oliveOil from "@/public/virgin-oil.png";
import vinegar from "@/public/vinegar.png";
import salts from "@/public/salt.png";
import olive from "@/public/olive-oil.jpg";

const About = () => {
  return (
    <>
      <BackgroundImage imageUrl={olive.src} title="About" />
      <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <section className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-4">
              Vision & Mission
            </h2>
            <p className="text-gray-600 text-base sm:text-lg">
              The aim of Hambana Company in selling and distributing these
              products is to provide the best quality products in Kurdistan and
              Iraq. To that end, we have made every effort to achieve this goal
              and our customers and partners are witnesses to this fact. In
              addition, Hambana company wants to work on strengthening domestic
              production and establishing business links with foreign companies
              to do business jointly.
              <br />
              <br />
              Our mission is to produce different products in a scientific
              manner and under the supervision of the health sector and make it
              available to customers in an advanced manner
            </p>
          </section>
          <section className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-4">
              What We Do
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              <ProductCard
                image={oliveOil.src}
                title="Extra Virgin Olive Oil"
                body="Olive oil is made simply by crushing olives and extracting the juice. It is the only cooking oil that is made without the use of chemicals."
              />
              <ProductCard
                image={vinegar.src}
                title="Aged Balsamic Vinegar"
                body="Balsamic vinegar is rich and has a complex flavour that balances the sweet and sour elements of the cooked grape juice with hints of wood."
              />
              <ProductCard
                image={salts.src}
                title="Gourmet Salts"
                body="Huge selection of gourmet salts for every flavor profile. Our variety of culinary sea salts add an impressive finishing touch to any meal."
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default About;
