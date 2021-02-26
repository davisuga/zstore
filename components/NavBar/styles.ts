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
export const Avatar = styled(Flex)`
  border-radius: 100px;
  background: black;

  max-height: 100%;
`;
export const UserName = styled.div`
  font-size: 2em;
`;
export const UserArea = styled(Flex)`
  justify-content: flex-end;
`;
