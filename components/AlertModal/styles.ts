import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 20%;
  left: 50%;
  width: auto;
  background: white;
  border: gray 1px solid;
  border-radius: 10px;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 5px #0004;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  font-size: 2em;
  z-index: 10;
`;
export const Button = styled.button`
  background: black;
  display: flex;
  min-height: 30px;
  border: 1px solid gray;
  padding: 5px;
  border-radius: 5px;
  align-self: stretch;
  justify-content: center;
  font-weight: bold;
  color: white;
`;
