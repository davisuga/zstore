import ErrorModal from "../ErrorModal";
import Product from "../Product";
import api from "../../services/axios";
import { CheckoutColumn, Container, ProductColumn } from "./styles";
import { useRouter } from "next/router";
import ShopingCart from "../ShopingCart";

type HomePageProps = {
  products: ProductProps[];
  error: any;
};
export default function HomePage({ products, error }: HomePageProps) {
  const router = useRouter();
  return (
    <Container>
      {error && (
        <ErrorModal
          onRefresh={() => router.replace("/")}
          statusText={error.statusText}
          status={error.status}
        />
      )}
      <ProductColumn>
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
      <CheckoutColumn>
        <ShopingCart />
      </CheckoutColumn>
    </Container>
  );
}

export async function getStaticProps() {
  try {
    const products = await api.get<{ products: ProductProps }>("products.json");
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
