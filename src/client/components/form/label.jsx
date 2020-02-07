import React from 'react';
import styled from 'styled-components'

const label = "Property Type";

const LabelContainer = styled.h2`
  margin: 5px;
`;

const Label = ({ value }) => (
  <LabelContainer>
    {value}
  </LabelContainer>
);

export default Label;
