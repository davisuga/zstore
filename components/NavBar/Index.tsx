import React from "react";
import Flex from "../Flex";

import { Container, Title, Avatar, UserName, UserArea } from "./styles";

const NavBar = ({ children, title, username }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
      <UserArea>
        <Avatar />
        <UserName>{username}</UserName>
      </UserArea>
    </Container>
  );
};

export default NavBar;
