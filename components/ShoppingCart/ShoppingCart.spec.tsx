import React from "react";
import "@testing-library/jest-dom/extend-expect";
import ShoppingCart, {
  calculateWeightAndPrice,
  calculateShippingCosts,
  calculateVoucherDiscount,
} from ".";
import { serializeVouchers, serializeProducts } from "../../utils/serializers";
import { render } from "@testing-library/react";

describe("ShoppingCart", () => {
  const api = global.makeApi();
  let serializedVouchers: VoucherHashTable;
  let serializedProducts: Cart;
  let initialCart = {
    Mango: { price: 15, quantity: 5 },
    Apple: { price: 20, quantity: 7 },
    Banana: { price: 10, quantity: 10 },
    Orange: { price: 30, quantity: 3 },
  };
  it("calculates the subtotal and the weight of the cart", () => {
    const { price, weight } = calculateWeightAndPrice(initialCart);
    expect(price).toBe(405);
    expect(weight).toBe(25);
  });
  it("calculates the shipping the cart", () => {
    const cheaperCart = {
      Mango: { price: 15, quantity: 5 },
      //One Apple less
      Apple: { price: 20, quantity: 6 },
      Banana: { price: 10, quantity: 10 },
      Orange: { price: 30, quantity: 3 },
    };
    const { price, weight } = calculateWeightAndPrice(cheaperCart);
    const shipping = calculateShippingCosts(price, weight);
    expect(shipping).toBe(44);
  });
  it("calculates the discount of the cart", async () => {
    const voucherData = await api.vouchers();
    serializedVouchers = serializeVouchers(voucherData.vouchers);

    const cart = {
      Mango: { price: 15, quantity: 5 },
      Apple: { price: 20, quantity: 6 },
      Banana: { price: 10, quantity: 10 },
      Orange: { price: 30, quantity: 3 },
    };
    const { price, weight } = calculateWeightAndPrice(cart);
    const shipping = calculateShippingCosts(price, weight);
    const discount = calculateVoucherDiscount(
      serializedVouchers,
      price,
      shipping,
      "#SHIPIT"
    );
    expect(discount).toBe(44);
  });
  it("should render ShoppingCart", async () => {
    const voucherData = await api.vouchers();
    const productData = await api.products();
    serializedVouchers = serializeVouchers(voucherData.vouchers);
    serializedProducts = serializeProducts(productData.products);

    const { getByText } = render(
      <ShoppingCart
        vouchers={serializedVouchers}
        cart={initialCart}
        onAddProduct={() => ({})}
        onRemoveProduct={() => ({})}
      />
    );
    expect(getByText("Shopping Cart")).toBeInTheDocument();
  });
  it("should display 0 shipping costs", () => {
    const { getByText, getByTestId } = render(
      <ShoppingCart
        vouchers={serializedVouchers}
        cart={initialCart}
        onAddProduct={() => ({})}
        onRemoveProduct={() => ({})}
      />
    );

    const expectedShipping = '<div data-testid="shipping">$0</div>';
    expect(getByTestId(`shipping`).outerHTML).toBe(expectedShipping);
  });
  it("should display the calculated total", () => {
    const { getByText, getByTestId } = render(
      <ShoppingCart
        vouchers={serializedVouchers}
        cart={initialCart}
        onAddProduct={() => ({})}
        onRemoveProduct={() => ({})}
      />
    );
    const expectedTotal = '<div data-testid="total">$405</div>';
    expect(getByTestId(`total`).outerHTML).toBe(expectedTotal);
  });
  it("should display the calculated discount", () => {
    const { getByText, getByTestId } = render(
      <ShoppingCart
        vouchers={serializedVouchers}
        cart={initialCart}
        onAddProduct={() => ({})}
        onRemoveProduct={() => ({})}
      />
    );
    const expectedDiscount = '<div data-testid="discount">$0</div>';
    expect(getByTestId(`discount`).outerHTML).toBe(expectedDiscount);
  });

  it("should display $44 as shipping cost", () => {
    const cart = {
      Mango: { price: 15, quantity: 5 },
      Apple: { price: 20, quantity: 7 },
      Banana: { price: 10, quantity: 9 },
      Orange: { price: 30, quantity: 3 },
    };
    const { getByTestId } = render(
      <ShoppingCart
        vouchers={serializedVouchers}
        cart={cart}
        onAddProduct={() => ({})}
        onRemoveProduct={() => ({})}
      />
    );
    const expectedDiscount = '<div data-testid="shipping">$44</div>';
    expect(getByTestId(`shipping`).outerHTML).toBe(expectedDiscount);
  });
});
