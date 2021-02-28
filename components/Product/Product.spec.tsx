import React from "react";
import {
  getByText,
  render,
  fireEvent,
  getByTestId,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Product from ".";

describe("ProductItem", () => {
  it("should render ProductItem", async () => {
    const { getByTestId, getByText } = render(
      <Product
        onAddToCart={() => ({})}
        name="Mango"
        price={15}
        available={20}
      />
    );
    const expectedPrice = "$15,";
    const expectedAvailable = `20 available`;
    expect(getByTestId("price").innerHTML).toBe(expectedPrice);
    expect(getByTestId("available").innerHTML).toBe(expectedAvailable);
    const productName = getByText("Mango");
    expect(productName).toBeInTheDocument();
  });
});
