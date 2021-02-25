import React from "react";
import Flex from "../Flex";

export type ProductProps = {
  name: string;
  price: number;
  available: number;
  children?: React.ReactNode;
};

const Product = ({ name, price, available, children }: ProductProps) => {
  return (
    <Flex>
      {name}
      {price}
      {available}
      {children}
    </Flex>
  );
};

export default Product;
