"use client";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import useProducts from "../useProducts";

const ProductGrid = () => {
  const products = useProducts();

  const productsPerPage = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = products.length;
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(startIndex + productsPerPage, totalProducts);

  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {currentProducts.map((product) => (
          <div key={product.id}>
            <ProductCard
              image={product.image.src}
              title={product.title}
              price={product.price}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <div>
          <ul className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <li
                key={page}
                className={`pagination-item cursor-pointer ${
                  page === currentPage ? "active" : ""
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
