"use client";
import ProductCard from "@/app/components/ProductCard";
import { useState } from "react";
import {
  LiaLongArrowAltLeftSolid,
  LiaLongArrowAltRightSolid,
} from "react-icons/lia";
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

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
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

      <div className="flex justify-center mt-4 space-x-1 slate-gray text-xs">
        {currentPage !== 1 && (
          <span
            className="pagination-item cursor-pointer hover:bg-yellow-400 rounded-full"
            onClick={handlePrevPage}
          >
            <LiaLongArrowAltLeftSolid className="text-lg" />
          </span>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <span
            key={page}
            className={`pagination-item cursor-pointer hover:bg-yellow-400 rounded-full ${
              page === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </span>
        ))}
        {currentPage !== totalPages && (
          <span
            className="pagination-item cursor-pointer text-lg hover:bg-yellow-400 rounded-full"
            onClick={handleNextPage}
          >
            <LiaLongArrowAltRightSolid />
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
