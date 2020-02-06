import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 5px;
  background-color: #1a3d75;
  border: none;
  font-size: 13px;
  width: 100px;
`;

export default function PrimaryButton(props) {

  return (
    <StyledButton
      variant="primary"
    >
      {props.label}
    </StyledButton>
  );
}
