import BackgroundImage from "./components/BackgroundImage";
import product from "@/public/product_1.png";
export default function Home() {
  return (
    <>
      <BackgroundImage
        imageUrl={product.src}
        slogan="This is the slogan of the company"
      />
      <h3></h3>
    </>
  );
}
