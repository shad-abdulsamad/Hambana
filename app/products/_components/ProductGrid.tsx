import React from "react";
import ProductCard from "./ProductCard";
import productImage from "@/public/olive-bottle.jpg";

const ProductGrid = () => {
  // Static product data
  const products = [
    {
      id: 1,
      image: productImage,
      title: "Product 1",
      price: 20.99,
    },
    {
      id: 2,
      image: productImage,
      title: "Product 2",
      price: 30.49,
    },
    {
      id: 3,
      image: productImage,
      title: "Product 4",
      price: 25.99,
    },
    {
      id: 4,
      image: productImage,
      title: "Product 5",
      price: 25.99,
    },
    {
      id: 5,
      image: productImage,
      title: "Product 3",
      price: 25.99,
    },
    {
      id: 6,
      image: productImage,
      title: "Product 6",
      price: 25.99,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {products.map((product) => (
        <div key={product.id}>
          <ProductCard
            image={product.image.src}
            title={product.title}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
