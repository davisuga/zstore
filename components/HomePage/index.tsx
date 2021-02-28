import ErrorModal from "../ErrorModal";
import Product from "../Product";
import { useState } from "react";
import { CheckoutColumn, Container, ProductColumn } from "./styles";
import { useRouter } from "next/router";
import ShoppingCart from "../ShoppingCart";
import NavBar from "../NavBar/Index";
import CheckoutButton from "../CheckoutButton";
import AlertModal from "../AlertModal";

type HomePageProps = {
  products: Cart;
  vouchers: VoucherHashTable;
  error: any;
};

export default function HomePage({ products, error, vouchers }: HomePageProps) {
  const router = useRouter();
  const [productsInCart, setProductsInCart] = useState<Cart>({});
  const [showModal, setShowModal] = useState(false);
  const handleAddProduct = ({
    name,
    price,
  }: {
    name: string;
    price: number;
  }) => {
    const productData = products[name];

    const hasAvailableProducts =
      !productsInCart[name] ||
      productData.available > productsInCart[name].quantity;
    if (hasAvailableProducts) {
      const currentAmountInTheCart = productsInCart[name]?.quantity || 0;
      const newProduct = { price, quantity: currentAmountInTheCart + 1 };
      setProductsInCart({ ...productsInCart, [name]: newProduct });
    }
  };
  const handleRemoveProduct = ({ name }: { name: string }) => {
    const productData = productsInCart[name];
    console.log("product quantity in the cart: ", productData.quantity);
    if (productData.quantity > 1) {
      const updatedProductData = {
        ...productData,
        quantity: productData.quantity - 1,
      };
      setProductsInCart({ ...productsInCart, [name]: updatedProductData });
    } else if (productData.quantity <= 1) {
      const newCart = Object.assign({}, productsInCart);
      delete newCart[name];
      setProductsInCart(newCart);
      console.log("deleting product ", name, "...");
    }
  };
  if (error) {
    return (
      <ErrorModal
        onRefresh={() => router.replace("/")}
        statusText={error.message}
        status={error.status}
      />
    );
  }
  return (
    <Container>
      {showModal && (
        <AlertModal message="Success!" onConfirm={() => setShowModal(false)} />
      )}
      <NavBar title={"Shopping"} username={"John Doe"}></NavBar>

      <ProductColumn>
        {!error &&
          Object.keys(products).map((productName, index) => {
            const productData = products[productName];

            return (
              <Product
                key={index}
                name={productName}
                price={productData.price}
                available={productData.available}
                onAddToCart={handleAddProduct}
              ></Product>
            );
          })}
      </ProductColumn>
      <CheckoutColumn>
        <ShoppingCart
          onRemoveProduct={handleRemoveProduct}
          onAddProduct={handleAddProduct}
          cart={productsInCart}
          vouchers={vouchers}
        />
        <CheckoutButton onClick={() => setShowModal(true)}>
          CHECKOUT
        </CheckoutButton>
      </CheckoutColumn>
    </Container>
  );
}
