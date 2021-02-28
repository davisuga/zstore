import React from "react";

import { Container, Button } from "./styles";

type AlertModalProps = {
  message: string;
  onConfirm: () => void;
};
const AlertModal = ({ message, onConfirm }: AlertModalProps) => {
  return (
    <Container>
      <h1>{message}</h1>
      <Button onClick={onConfirm}> Ok</Button>
    </Container>
  );
};

export default AlertModal;
