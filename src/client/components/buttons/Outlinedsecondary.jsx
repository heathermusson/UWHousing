import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 5px;
  font-size: 13px;
  width: 100px;
  border: 1px solid;
  border-color: #1a3d75;
`;

const OutlinedSecondary = ({ label }) => (
  <StyledButton
    variant="outlined-secondary"
  >
    {label}
  </StyledButton>
);

export default OutlinedSecondary;
