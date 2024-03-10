import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const ProductCardContainer = ({ children }: Props) => {
  return (
    <Box overflow="hidden" width="300px">
      {children}
    </Box>
  );
};

export default ProductCardContainer;
