import React from "react";
import { getByText, render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import HomePage from "./";
import { serializeVouchers, serializeProducts } from "../../utils/serializers";

describe("HomePage", () => {
  const api = global.makeApi();
  let serializedVouchers: VoucherHashTable;
  let serializedProducts: Cart;

  it("should render HomePage", async () => {
    const voucherData = await api.vouchers();
    const productData = await api.products();
    serializedVouchers = serializeVouchers(voucherData.vouchers);
    serializedProducts = serializeProducts(productData.products);

    const { getByText } = render(
      <HomePage
        vouchers={serializedVouchers}
        products={serializedProducts}
        error={null}
      />
    );
    expect(getByText("Shopping")).toBeInTheDocument();
    expect(getByText("Banana")).toBeVisible();
    expect(getByText("CHECKOUT")).toBeVisible();
  });

  it("should display an error", async () => {
    const error = await api.error();
    const { getByText } = render(
      <HomePage vouchers={null} products={null} error={error} />
    );
    expect(getByText("Error: Internal Server Error (500)")).toBeInTheDocument();
  });
});
