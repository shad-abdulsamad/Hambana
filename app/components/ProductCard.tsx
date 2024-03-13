import React from "react";
import "./ProductCard.css";

interface Props {
  image: string;
  title: string;
  price: number;
}

const ProductCard = ({ image, title, price }: Props) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h2 className="product-title">{title}</h2>
      <p className="product-price">{price}</p>
    </div>
  );
};

export default ProductCard;
