import styled from "styled-components";
import Flex from "../Flex";

export const Container = styled(Flex)`
  width: 100vw;
  background-color: lightgray;
  height: 8vh;
  position: sticky;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  justify-content: space-between;
`;
export const Title = styled.div`
  font-weight: bold;
  font-size: 2.4em;
`;
export const Avatar = styled.img`
  align-self: center;
  max-width: 35px;
  max-height: 100%;
  border-radius: 10px;
  margin-right: 5px;
`;
export const UserName = styled.div`
  font-size: 1.2em;
  max-height: 100%;
  display: flex;
  flex-grow: 1;
`;
export const UserArea = styled(Flex)`
  justify-content: flex-end;
  max-height: 100%;
  align-items: center;
`;
