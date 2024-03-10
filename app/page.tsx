import product from "@/public/product_1.png";
import LandingPageBackgroundImage from "./components/LandingPageBackgroundImage";
export default function Home() {
  return (
    <>
      <LandingPageBackgroundImage
        imageUrl={product.src}
        slogan="This is the slogan of the company"
        buttonText="Products"
      />
    </>
  );
}
