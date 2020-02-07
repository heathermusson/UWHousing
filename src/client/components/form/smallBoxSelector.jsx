import React from 'react';
import SubLabel from './SubLabel.jsx';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  height: 40px;
  margin: 5px !important;
  flex: 1 !important;
  background-color: #F0F0F0 !important;
  border-radius: 5px !important;
  align-items: center;
  justify-content: center;
`;

const SmallBoxSelector = ({ label }) => (
  <ButtonBox key={label}>
    {label}
  </ButtonBox>
);

export default SmallBoxSelector;
