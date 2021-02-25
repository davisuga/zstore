import React from "react";
import { Container, ErrorTitle, RefreshButton } from "./styles";

type NetworkingError = {
  status: number;
  statusText: string;
};
type ErrorModalProps = NetworkingError & { onRefresh: () => void };
const ErrorModal = ({ status, statusText, onRefresh }: ErrorModalProps) => {
  console.log(status, statusText);
  return (
    <Container>
      <ErrorTitle>Erro: {statusText || status}</ErrorTitle>
      <RefreshButton onClick={onRefresh}>Refresh</RefreshButton>
    </Container>
  );
};

export default ErrorModal;
