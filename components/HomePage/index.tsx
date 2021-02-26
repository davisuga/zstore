import ErrorModal from "../ErrorModal";
import Product from "../Product";
import { useState } from "react";
import { CheckoutColumn, Container, ProductColumn } from "./styles";
import { useRouter } from "next/router";
import ShopingCart from "../ShopingCart";
import NavBar from "../NavBar/Index";

type HomePageProps = {
  products: ProductProps[];
  error: any;
};

type Cart = {
  [productName: string]: {
    price: number;
    quantity: number;
  };
};
export default function HomePage({ products, error }: HomePageProps) {
  const router = useRouter();
  const [productsInCart, setProductsInCart] = useState<Cart>({});

  const handleAddProduct = ({ name, price }) => {
    console.time("addToCart");
    const currentAmountInTheCart = productsInCart[name]?.quantity || 0;
    const newProduct = { price, quantity: currentAmountInTheCart + 1 };
    setProductsInCart({ ...productsInCart, [name]: newProduct });
    console.timeEnd("addToCart");
  };
  return (
    <Container>
      <NavBar title={"Shopping"} username={"John Doe"}>
        {/* TODO: Remove this button */}
        <button onClick={() => router.replace("/")}>Refresh</button>
      </NavBar>
      {error && (
        <ErrorModal
          onRefresh={() => router.replace("/")}
          statusText={error.message}
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
              onAddToCart={handleAddProduct}
            ></Product>
          ))}
      </ProductColumn>
      <CheckoutColumn>
        <ShopingCart />
      </CheckoutColumn>
    </Container>
  );
}
