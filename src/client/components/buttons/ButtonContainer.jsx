import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export default function PrimaryButton(props) {

  return (
    <Container>
      {props.children}
    </Container>
  );
}
