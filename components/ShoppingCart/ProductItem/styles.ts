import styled from "styled-components";
import Flex from "../../Flex";

export const Container = styled(Flex)`
  margin: 10px;
  flex-direction: row;
`;
export const ProductPicture = styled(Flex)`
  flex: 2;
  background-color: gray;
  border-radius: 5px;
`;
export const ProductName = styled.div`
  width: 100%;
  margin: 5px;
`;

export const QuantityController = styled(Flex)`
  flex: 1;
  flex-direction: column;
`;
export const Add = styled(Flex)`
  flex: 1;
  justify-content: center;
  border: 1px black solid;
  cursor: pointer;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background: darkgray;
`;
export const Remove = styled(Add)`
  border-top: none;
  border-top-right-radius: 0;
  border-top-left-radius: 0;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;

export const ProductInfo = styled(Flex)`
  justify-content: space-between;
  flex-direction: column;
  flex: 10;
`;
export const ProductPrice = styled.div`
  margin: 5px;
`;
export const ProductQuantity = ProductPrice;
