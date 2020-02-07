import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 5px;
  background-color: #2032a3;
  border: none;
  font-size: 13px;
  width: 100px;
  &:hover {
    background-color: #3852e6;
  }
`;

const PrimaryButton = ({ label }) => (
  <StyledButton
    variant="primary"
  >
    {label}
  </StyledButton>
);

export default PrimaryButton;
