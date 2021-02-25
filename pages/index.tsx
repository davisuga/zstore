import HomePage from "../components/HomePage";
import api from "../services/axios";

export default function Home({ products, error }) {
  return <HomePage {...{ products, error }} />;
}

export async function getStaticProps() {
  try {
    const products = await api.get("products.json");
    return { props: { products: products.data.products } };
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
