import React, { useState } from "react";
import {
  Total,
  Title,
  Subtotal,
  Discount,
  Shipping,
  Container,
  ApplyButton,
  DiscountArea,
  DiscountInput,
} from "./styles";
import ProductItem from "./ProductItem";
// import { Container } from './styles';
type Product = {
  name: string;
  quantity: number;
  price: number;
};
const ShoppingCart: React.FC = ({ products }) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [total, setTotal] = useState(0);
  const onApplyDiscount = () => {};

  return (
    <Container>
      <Title>Shopping Cart</Title>
      {/* {products.map((product) => (
        <ProductItem product={product} />
      ))} */}
      <DiscountArea>
        <DiscountInput
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder={"Discount code"}
        />
        <ApplyButton onClick={onApplyDiscount}>APPLY</ApplyButton>
      </DiscountArea>
      <Subtotal>
        <div>Subtotal:</div> <div>{subtotal}</div>
      </Subtotal>
      <Discount>
        <div>Discount:</div> <div>{discount}</div>
      </Discount>
      <Shipping>
        <div>Shipping:</div> <div>{shipping}</div>
      </Shipping>
      <Total>
        <div>Total:</div> <div>{total}</div>
      </Total>
    </Container>
  );
};

export default ShoppingCart;
