export const serializeProducts = (products: ProductProps[]): Cart => {
  return products.reduce((acc, product) => {
    return {
      ...acc,
      [product.name]: { price: product.price, available: product.available },
    };
  }, {});
};

export const serializeVouchers = (vouchers: Voucher[]): VoucherHashTable => {
  return vouchers.reduce((acc, voucher) => {
    return {
      ...acc,
      [voucher.code]: {
        type: voucher.type,
        minValue: voucher.minValue || null,
        amount: voucher.amount,
      },
    };
  }, {});
};
