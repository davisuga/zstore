import { CheckoutColumn, Container, ProductColumn } from "../styles/HomePage";

export default function HomePage() {
  return (
    <Container>
      <ProductColumn bg="blue"></ProductColumn>
      <CheckoutColumn bg="purple"></CheckoutColumn>
    </Container>
  );
}
