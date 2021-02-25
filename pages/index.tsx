import ErrorModal from "../components/ErrorModal";
import Product, { ProductProps } from "../components/Product";
import api from "../services/axios";
import { CheckoutColumn, Container, ProductColumn } from "../styles/HomePage";

type HomePageProps = {
  products: ProductProps[];
  error: any;
};
export default function HomePage({ products, error }: HomePageProps) {
  return (
    <Container>
      {error && (
        <ErrorModal statusText={error.statusText} status={error.status} />
      )}
      <ProductColumn bg="blue">
        {!error &&
          products.length &&
          products.map((product, index) => (
            <Product
              key={index}
              name={product.name}
              price={product.price}
              available={product.available}
            ></Product>
          ))}
      </ProductColumn>
      <CheckoutColumn bg="purple"></CheckoutColumn>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const products = await api.get<{ products: ProductProps }>("products.json");
    return { props: { products: products.data.products } };
  } catch (error) {
    debugger;
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
