import styled from "styled-components";
import Flex from "../Flex";

export const Container = styled(Flex)`
  flex-direction: column;
  justify-content: flex-start;
  flex-grow: 1;
  max-height: 200px;
  width: auto;
  background: white;
  margin: 10px;
  border-radius: 10px;
  box-shadow: 0px 5px 5px lightgray;
  border: 1px solid #0000;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  }
  transition: box-shadow 0.2s ease, transform 0.2s ease;
`;
export const Picture = styled(Flex)`
  flex-grow: 4;
  background: gray;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
`;
export const Name = styled(Flex)`
  font-size: 1.5em;
`;
export const ProductDescription = styled(Flex)`
  flex-direction: column;
  padding: 7px;
`;
export const BuyButton = styled(Flex)`
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  color: white;
  font-weight: bold;
  border: none;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;
export const Price = styled(Flex)`
  margin-right: 5px;
`;
export const Available = styled(Flex)``;
