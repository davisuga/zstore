import HomePage from "../components/HomePage";
import api from "../services/axios";
import { serializeProducts, serializeVouchers } from "../utils/serializers";

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

    const productsData = serializeProducts(products.data.products);
    const vouchersData = serializeVouchers(vouchers.data.vouchers);
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
