import styled from "styled-components";
import Flex from "../Flex";

export const Container = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  height: 100vh;
`;
export const ProductColumn = styled(Flex)`
  flex: 3 1 auto;
  height: 100vh;
  max-width: 66vw;
`;

export const CheckoutColumn = styled(Flex)`
  flex: 3 1 auto;
  height: 100vh;
`;
