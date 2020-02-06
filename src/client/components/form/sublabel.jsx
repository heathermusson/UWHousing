import React, { Component } from 'react';
import styled from 'styled-components'

const LabelContainer = styled.h4`
  margin: 5px 5px 0px 5px;
  color: #909090;
`;

export default function SubLabel(props) {

  return (
    <LabelContainer>
      {props.value}
    </LabelContainer>
  );
}
