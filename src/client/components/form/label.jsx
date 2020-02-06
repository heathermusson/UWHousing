import React, { Component } from 'react';
import styled from 'styled-components'

const label = "Property Type";

const LabelContainer = styled.h2`
  margin: 5px;
`;

export default function Label(props) {

  return (
    <LabelContainer>
      {props.value}
    </LabelContainer>
  );
}
