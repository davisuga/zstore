import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProductItem from ".";

describe("ProductItem", () => {
  it("should render ProductItem", async () => {
    const product = { price: 15, quantity: 5, name: "Mango" };
    const { getByTestId, getByText } = render(
      <ProductItem
        onAddProduct={() => ({})}
        onRemoveProduct={() => ({})}
        product={product}
      />
    );
    const expectedQuantity = "Quantity: 5";
    const expectedPrice = `$${product.quantity * product.price}`;
    expect(getByTestId("quantity").innerHTML).toBe(expectedQuantity);
    expect(getByTestId("price").innerHTML).toBe(expectedPrice);
    const addButton = getByText("+");
    expect(addButton).toBeInTheDocument();
  });
});
