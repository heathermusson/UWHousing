import React, { Component } from 'react';
import styled from 'styled-components';

const labels = ["Apartment","House"];

const Selector = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  align-item: center;
  width: 100%;
  text-align: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  /*height: 70px;*/
  margin: 5px !important;
  padding: 10px;
  flex: 1 !important;
  background-color: #F0F0F0 !important;
  border-radius: 5px !important;
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.div`
  width: 40%;
  height: 40px;
  background-color: grey;
`; 


export default function LargeBoxSelector(props) {
  return (
    <Selector>
      {labels.map(label => (
        <ButtonBox
          key={label}
        >
          <ButtonImage />

          <h3>{label}</h3>
        </ButtonBox>
      ))}
    </Selector>
  );
}
