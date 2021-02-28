import styled from "styled-components";
import Flex from "../Flex";

export const Container = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const ProductColumn = styled(Flex)`
  flex: 3 1 auto;
  flex-flow: row wrap;
`;

export const CheckoutColumn = styled(Flex)`
  flex: 3 1 auto;
  flex-direction: column;
  justify-content: center;
  padding: 8px;
`;
