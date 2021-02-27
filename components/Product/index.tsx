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
  available: number;
};

const Product = ({
  name,
  price,
  available,
  children,
  onAddToCart,
}: ProductComponentProps) => {
  const [availableUnits, setAvailableUnits] = useState(available);
  const handleClickBuy = () => {
    if (availableUnits > 0) {
      setAvailableUnits(availableUnits - 1);
      onAddToCart({ name, price, available: availableUnits });
    }
  };
  return (
    <Container>
      <Picture />
      <ProductDescription>
        <Name>{name}</Name>
        <Flex flexDirection="row">
          <Price>${price},</Price>
          <Available>{available} available</Available>
        </Flex>
      </ProductDescription>
      <BuyButton onClick={handleClickBuy} as="button">
        BUY
      </BuyButton>
      {children}
    </Container>
  );
};

export default Product;
