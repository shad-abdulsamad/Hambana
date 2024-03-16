import oliveBottle from "@/public/olive-bottle.jpg";
import salts from "@/public/salt.png";
import vinegar from "@/public/vinegar.png";
import oliveOil from "@/public/olive-oil.jpg";
import olive from "@/public/virgin-oil.png";
import Link from "next/link";
import Banner from "./components/Banner";
import Carousel from "./components/Carousel";
import Features from "./components/Features";
import LandingPageBackgroundImage from "./components/LandingPageBackgroundImage";
import ProductCard from "./components/ProductCard";
import WhatWeDoCard from "./components/WhatWeDoCard";

export default function Home() {
  return (
    <>
      <LandingPageBackgroundImage
        imageUrl={oliveOil.src}
        header="We Produce"
        slogan="The Best Olive Oil!"
        buttonText="Products"
      />
      <Banner />
      <section
        className="text-center mb-12 p-10"
        style={{ backgroundColor: "#F9F7F2" }}
      >
        <h2 className="text-2xl sm:text-3xl font-serif text-gray-800 mb-4">
          What We Do
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          <WhatWeDoCard
            image={olive.src}
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

      <h2 className="text-2xl text-center sm:text-3xl font-serif text-gray-800 mb-4">
        Our Range
      </h2>
      <Carousel />
      <Features />

      <section
        className="flex flex-col items-center"
        style={{ backgroundColor: "#F9F7F2" }}
      >
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
