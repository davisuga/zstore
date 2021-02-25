import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 20%;
  left: 50%;
  width: 200px;
  background: white;
  border: gray 1px solid;
  border-radius: 10px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 5px #0004;
  padding: 5px;
  flex-direction: column;
  align-items: center;
`;
export const ErrorTitle = styled.h1`
  font-weight: bold;
  font-family: system-ui;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
`;
export const RefreshButton = styled.button`
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
