import React from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 1rem 0;
  box-shadow: 0 4px 2px -2px gray;
`;

const HeaderTitle = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Container maxWidth="lg">
        <HeaderTitle>CTNA Meeting Tally</HeaderTitle>
      </Container>
    </HeaderContainer>
  );
};
