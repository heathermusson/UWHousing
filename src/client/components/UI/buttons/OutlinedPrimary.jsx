import React from 'react';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  margin: 5px;
  font-size: 13px;
  width: 100px;
  border: 1px solid;
  border-color: #2032a3;
`;

const OutlinedPrimary = ({ label }) => (
  <StyledButton
    variant="outlined-primary"
  >
    {label}
  </StyledButton>
);

export default OutlinedPrimary;
