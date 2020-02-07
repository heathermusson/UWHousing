import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ButtonContainer = ({ children }) => (
  <Container>
    {children}
  </Container>
);

export default ButtonContainer;
