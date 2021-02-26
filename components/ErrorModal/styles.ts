import styled, { keyframes } from "styled-components";
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
export const Container = styled.div`
  position: absolute;
  display: flex;
  top: 20%;
  left: 50%;
  width: auto;
  background: white;
  border: gray 1px solid;
  border-radius: 10px;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 5px #0004;
  padding: 12px;
  flex-direction: column;
  align-items: center;
  animation: 1s ${keyframes} ease-out;
`;
export const ErrorTitle = styled.h1`
  font-weight: bold;
  font-family: system-ui;
  margin-bottom: 6px;
  font-size: 1.6em;
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
export const LoadingButton = styled(RefreshButton)`
  background: "#222";
`;
export const ActivityIndicator = styled.div`
  border: 16px solid black;
  border-radius: 70%;
  border-top: 16px solid white;
  border-bottom: 16px solid white;
  width: auto;
  height: auto;
  animation: 0.6s ${spin} infinite linear;
`;
