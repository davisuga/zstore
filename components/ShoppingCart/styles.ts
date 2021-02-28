import styled from "styled-components";
import Flex from "../Flex";

export const Container = styled(Flex)`
  background: lightgray;
  border-radius: 10px;
  flex-direction: column;
  align-self: stretch;
  margin: 10px;
  padding: 5px;
  width: 100%;
`;
export const Title = styled(Flex)`
  padding: 10px;
  justify-content: center;
  font-weight: bold;
  border-bottom: 1px solid black;
  margin-bottom: 10px;
  font-size: 1.6em;
`;
export const Subtotal = styled(Flex)`
  padding: 1.5em;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  flex: 0;
`;
export const Total = styled(Subtotal)`
  font-weight: bold;
`;
export const Discount = Subtotal;
export const Shipping = Subtotal;
export const ApplyButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: black;
  font-weight: lighter;
  padding: 13px;
  color: white;
  font-size: 0.9em;
  &:hover {
    transform: scale(1.06);
  }
  &:hover :active {
    transform: scale(0.9);
  }
  transition: transform 0.2s ease-out;
`;
export const DiscountArea = styled(Flex)`
  justify-content: space-between;
  padding: 10px;
`;
export const DiscountInput = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 24px;
  margin-right: 10px;
  border-radius: 5px;
  border: none;
  width: 100%;
  padding: 5px;
  font-size: 1.05em;
`;
