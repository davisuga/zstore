import React, { useState } from "react";
import {
  Container,
  Name,
  Available,
  Price,
  ProductDescription,
  BuyButton,
  Picture,
} from "../../styles/Product";
import Flex from "../Flex";

export type ProductProps = {
  name: string;
  price: number;
  available: number;
  onAddToCart?: () => void;
  children?: React.ReactNode;
};
const Product = ({
  name,
  price,
  available,
  children,
  onAddToCart,
}: ProductProps) => {
  const [availableUnits, setAvailableUnits] = useState(available);

  return (
    <Container>
      <Picture />
      <ProductDescription>
        <Name>{name}</Name>
        <Flex flexDirection="row">
          <Price>${price},</Price>
          <Available>{availableUnits} available</Available>
        </Flex>
      </ProductDescription>
      <BuyButton onClick={() => onAddToCart({ name, price })} as="button">
        BUY
      </BuyButton>
      {children}
    </Container>
  );
};

export default Product;
