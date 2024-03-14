import olive from "@/public/olive-oil.jpg";
import BackgroundImage from "../components/BackgroundImage";
import ProductGrid from "./_components/ProductGrid";
import Categories from "./_components/Categories";

const ProductsPage = () => {
  return (
    <>
      <BackgroundImage imageUrl={olive.src} title="Products" />
      <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr]">
        <div className="ml-5 mt-3 lg:col-span-1">
          <Categories />
        </div>
        <div className="flex flex-wrap justify-center gap-4 lg:col-span-1">
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
