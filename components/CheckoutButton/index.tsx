import React from "react";

import { Container } from "./styles";

const CheckoutButton = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default CheckoutButton;
