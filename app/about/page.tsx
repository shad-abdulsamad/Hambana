import React from "react";
import ProductCard from "./_components/ProductCard";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-3xl font-serif slate-gray">Vision & Mission</h2>
      <h2 className="text-3xl font-serif slate-gray">What We Do</h2>
      <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8">
        <ProductCard
          image="https://media.istockphoto.com/id/516358950/photo/portion-of-white-sugar.jpg?s=612x612&w=0&k=20&c=MzRtVTXjrft4xEMvGbOozroo2fZYsiDjSF2cPkINMhI="
          title="Sugar"
          body="Huge selection of gourmet salts for every flavor profile. Our variety of culinary sea salts add an impressive finishing touch to any meal."
        />
        <ProductCard
          image="https://media.istockphoto.com/id/516358950/photo/portion-of-white-sugar.jpg?s=612x612&w=0&k=20&c=MzRtVTXjrft4xEMvGbOozroo2fZYsiDjSF2cPkINMhI="
          title="Sugar"
          body="Huge selection of gourmet salts for every flavor profile. Our variety of culinary sea salts add an impressive finishing touch to any meal."
        />
        <ProductCard
          image="https://media.istockphoto.com/id/516358950/photo/portion-of-white-sugar.jpg?s=612x612&w=0&k=20&c=MzRtVTXjrft4xEMvGbOozroo2fZYsiDjSF2cPkINMhI="
          title="Sugar"
          body="Huge selection of gourmet salts for every flavor profile. Our variety of culinary sea salts add an impressive finishing touch to any meal."
        />
      </div>
    </div>
  );
};

export default About;
