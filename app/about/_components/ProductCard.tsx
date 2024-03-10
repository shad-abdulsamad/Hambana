import React from "react";
import ProductCardContainer from "./ProductCardContainer";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

interface Props {
  image: string;
  title: string;
  body: string;
}

const ProductCard = ({ image, title, body }: Props) => {
  return (
    <ProductCardContainer>
      <Card>
        <Image src={image} maxWidth="100%" height="auto" />
        <CardBody>
          <Heading
            className="slate-gray font-serif font-semibold text-xl mt-3 p-2 transition-text"
            textAlign="center"
            mb={2}
          >
            <Link href="#">{title}</Link>
          </Heading>
          <Text className="text-sm concrete-gray" textAlign="center">
            {body}
          </Text>
        </CardBody>
      </Card>
    </ProductCardContainer>
  );
};

export default ProductCard;
