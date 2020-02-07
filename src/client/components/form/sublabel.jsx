import React from 'react';
import styled from 'styled-components'

const LabelContainer = styled.h4`
  margin: 5px 5px 0px 5px;
  color: #909090;
`;

const SubLabel = ({ value }) => (
  <LabelContainer>
    {value}
  </LabelContainer>
);

export default SubLabel;
