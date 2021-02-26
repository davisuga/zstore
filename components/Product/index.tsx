import React, { useState } from "react";
import {
  Container,
  Name,
  Available,
  Price,
  ProductDescription,
  BuyButton,
  Picture,
} from "./styles";
import Flex from "../Flex";

export type ProductComponentProps = {
  name: string;
  price: number;
  available: number;
  onAddToCart?: ({ name, price }: BasicProductInfo) => void;
  children?: React.ReactNode;
};
type BasicProductInfo = {
  name: string;
  price: number;
};
const Product = ({
  name,
  price,
  available,
  children,
  onAddToCart,
}: ProductComponentProps) => {
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
