import styled from "styled-components";
import Flex from "../../components/Flex";

export const Container = styled(Flex)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-content: stretch;
  align-items: stretch;
  height: 97vh;
`;
export const ProductColumn = styled(Flex)`
  flex: 6 1 auto;
  height: 97vh;
`;

export const CheckoutColumn = styled(Flex)`
  flex: 3 1 auto;
  height: 97vh;
`;
