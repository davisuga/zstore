import React, { useEffect, useState } from "react";
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

type TotalPriceAndWeight = { price: number; weight: number };

type ShoppingCartProps = {
  cart: Cart;
  vouchers: VoucherHashTable;
  onAddProduct: (product: ProductProps) => void;
  onRemoveProduct: (product: ProductProps) => void;
};

export const calculateWeightAndPrice = (cart: Cart) => {
  const totalAmountReducer = (
    previousValue: TotalPriceAndWeight,
    currentValue: string
  ) => {
    const currentProduct = cart[currentValue];
    const price =
      currentProduct.price * currentProduct.quantity + previousValue.price;
    const weight = currentProduct.quantity * 1 + previousValue.weight;
    return { price, weight };
  };

  const calculatedTotal = Object.keys(cart).reduce(totalAmountReducer, {
    price: 0,
    weight: 0,
  });

  return calculatedTotal;
};

export const calculateShippingCosts = (
  cartPrice: number,
  cartWeight: number
) => {
  if (cartPrice > 400) {
    return 0;
  } else if (cartWeight <= 10) {
    return 30;
  } else {
    return 30 + Math.floor((cartWeight - 10) / 5) * 7;
  }
};

export const calculateVoucherDiscount = (
  vouchers: VoucherHashTable,
  productsPrice: number,
  shippingCosts: number,
  discountCode: string
) => {
  const voucherData = vouchers[discountCode];
  if (!voucherData) return 0;
  const totalWithShipping = productsPrice + shippingCosts;
  const voucherTypes = {
    percentual: (amount: number, total: number) => {
      return (amount / 100) * (total - shippingCosts);
    },
    fixed: (amount: number, total: number) => {
      return amount;
    },
    shipping: (minValue: number, total: number) => {
      if (total < minValue) return 0;
      return shippingCosts;
    },
  };

  const calculateDiscount = voucherTypes[voucherData.type];
  return calculateDiscount(
    voucherData.amount || voucherData.minValue,
    totalWithShipping
  );
};

const ShoppingCart = ({
  cart,
  onRemoveProduct,
  onAddProduct,
  vouchers,
}: ShoppingCartProps) => {
  const [subtotal, setSubtotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [shipping, setShipping] = useState(0);
  const [discountCode, setDiscountCode] = useState("");
  const [total, setTotal] = useState(0);
  const [cartWeight, setCartWeight] = useState(0);
  const [applyDiscount, setApplyDiscount] = useState(false);

  const onApplyDiscount = () => {
    const calculatedDiscount =
      calculateVoucherDiscount(vouchers, subtotal, shipping, discountCode) || 0;
    setDiscount(calculatedDiscount);
    setTotal(subtotal + shipping - calculatedDiscount);
  };

  useEffect(() => {
    const {
      price: productsPrice,
      weight: productsWeight,
    } = calculateWeightAndPrice(cart);
    setSubtotal(productsPrice);
    setCartWeight(productsWeight);
    const shippingCosts = calculateShippingCosts(productsPrice, productsWeight);
    setShipping(shippingCosts);
    setTotal(productsPrice + shippingCosts - discount);
  }, [cart]);

  return (
    <Container>
      <Title>Shopping Cart</Title>
      {Object.keys(cart).map((productName, index) => (
        <ProductItem
          key={index}
          onAddProduct={onAddProduct}
          onRemoveProduct={onRemoveProduct}
          product={{ ...cart[productName], name: productName }}
        />
      ))}
      <DiscountArea>
        <DiscountInput
          value={discountCode}
          onChange={(e) => setDiscountCode(e.target.value)}
          placeholder={"Discount code"}
        />
        <ApplyButton onClick={onApplyDiscount}>APPLY</ApplyButton>
      </DiscountArea>
      <Subtotal>
        <div>Subtotal:</div> <div data-testid="subtotal">${subtotal}</div>
      </Subtotal>
      <Shipping>
        <div>Shipping:</div> <div data-testid="shipping">${shipping}</div>
      </Shipping>
      <Discount>
        <div>Discount:</div> <div data-testid="discount">${discount}</div>
      </Discount>
      <Total>
        <div>Total:</div> <div data-testid="total">${total}</div>
      </Total>
    </Container>
  );
};

export default ShoppingCart;
