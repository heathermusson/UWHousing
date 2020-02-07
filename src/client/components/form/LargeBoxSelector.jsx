import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px !important;
  padding: 10px;
  flex: 1 !important;
  background-color: #F0F0F0 !important;
  border-radius: 5px !important;
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled(FontAwesomeIcon)`
  margin: 10px;
`;

const LargeBoxSelector = ( {label, icon} ) => (
  <ButtonBox key={label}>
    <ButtonImage icon={icon} size="2x" />
    <h3>{label}</h3>
  </ButtonBox>
);

export default LargeBoxSelector;
