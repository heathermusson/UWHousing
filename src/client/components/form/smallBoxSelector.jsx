import React, { Component } from 'react';
import SubLabel from './SubLabel.jsx';
import styled from 'styled-components';

const labels = ["1","2","3","4","5","6+"];

const Selector = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center
`;

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

export default function SmallBoxSelector(props) {

  return (
    <>
      <SubLabel
        value={props.label}
      />
      <Selector>
        {labels.map(label => (
          <ButtonBox
            key={label}
          >
            {label}
          </ButtonBox>
        ))}
      </Selector>
    </>
  );
}
