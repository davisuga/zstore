import HomePage from "../components/HomePage";
import api from "../services/axios";

export default function Home({ products, error, vouchers }) {
  return <HomePage {...{ products, error, vouchers }} />;
}

export async function getStaticProps() {
  try {
    const productsPromise = api.get<{ products: ProductProps[] }>(
      "products.json"
    );
    const voucherPromise = api.get<{ vouchers: Voucher[] }>("vouchers.json");
    const [products, vouchers] = await Promise.all([
      productsPromise,
      voucherPromise,
    ]);

    const productsData = products.data.products.reduce((acc, product) => {
      return {
        ...acc,
        [product.name]: { price: product.price, available: product.available },
      };
    }, {});
    const vouchersData = vouchers.data.vouchers.reduce((acc, voucher) => {
      return {
        ...acc,
        [voucher.code]: {
          type: voucher.type,
          minValue: voucher.minValue || null,
          amount: voucher.amount,
        },
      };
    }, {});
    return { props: { products: productsData, vouchers: vouchersData } };
  } catch (error) {
    return {
      props: {
        error: {
          status: error?.response?.status || 500,
          message: error?.response.statusText || error.message,
        },
      },
    };
  }
}
