import React, { useState } from "react";
import {
  Container,
  ErrorTitle,
  RefreshButton,
  ActivityIndicator,
} from "./styles";

type NetworkingError = {
  status: number;
  statusText: string;
};
type ErrorModalProps = NetworkingError & { onRefresh: () => void };
const ErrorModal = ({ status, statusText, onRefresh }: ErrorModalProps) => {
  const [loading, setLoading] = useState(false);
  return (
    <Container>
      <ErrorTitle>
        Error: {statusText} ({status})
      </ErrorTitle>

      <RefreshButton
        onClick={() => {
          setLoading(true);
          onRefresh();
        }}
      >
        {loading ? <ActivityIndicator /> : "Try again"}
      </RefreshButton>
    </Container>
  );
};

export default ErrorModal;
