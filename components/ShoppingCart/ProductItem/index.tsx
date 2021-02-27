import React from "react";
import Flex from "../../Flex";

import {
  Container,
  ProductPicture,
  ProductInfo,
  ProductName,
  ProductQuantity,
  QuantityController,
  Add,
  Remove,
  ProductPrice,
} from "./styles";

type ProductItemProps = {
  product: ProductProps;
  onAddProduct: (product: ProductProps) => void;
  onRemoveProduct: (product: ProductProps) => void;
};

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  onAddProduct,
  onRemoveProduct,
}) => {
  return (
    <Container>
      <ProductPicture />
      <ProductInfo>
        <ProductName>{product.name}</ProductName>
        <Flex flexDirection="row" justifyContent="space-between">
          <ProductQuantity>Quantity: {product.quantity}</ProductQuantity>
          <ProductPrice>${product.price * product.quantity}</ProductPrice>
        </Flex>
      </ProductInfo>
      <QuantityController>
        <Add onClick={() => onAddProduct(product)}>+</Add>
        <Remove onClick={() => onRemoveProduct(product)}>-</Remove>
      </QuantityController>
    </Container>
  );
};

export default ProductItem;
