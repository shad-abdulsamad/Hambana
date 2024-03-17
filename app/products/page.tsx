import olive from "@/public/olive-oil.jpg";
import BackgroundImage from "../components/BackgroundImage";
import Categories from "./_components/Categories";
import ProductGrid from "./_components/ProductGrid";

const ProductsPage = () => {
  return (
    <>
      <BackgroundImage imageUrl={olive.src} title="Products" />
      <div className="grid grid-cols-1 lg:grid-cols-[200px,1fr] gap-4">
        <div className="ml-5 mt-3 order-2 lg:order-1">
          <Categories />
        </div>
        <div className="order-1 lg:order-2 flex flex-wrap justify-center gap-4">
          <ProductGrid />
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
