import React from "react";
import ProductCardContainer from "./ProductCardContainer";
import { Card, CardBody, Heading, Image, Text } from "@chakra-ui/react";

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
            className="slate-gray font-serif font-semibold text-2xl"
            textAlign="center"
            mb={2}
          >
            {title}
          </Heading>
          <Text textAlign="center">{body}</Text>
        </CardBody>
      </Card>
    </ProductCardContainer>
  );
};

export default ProductCard;
