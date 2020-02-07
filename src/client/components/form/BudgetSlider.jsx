import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const label = "Property Type";

const SliderBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 5px;
  align-items: center;
`;

const Label = () => (
  <SliderBox>
    <h3>From $</h3>
    <Form.Control
      as="select"
      style={{
        width: "30%",
        margin: '5px'
      }}
    >
      <option>300</option>
      <option>400</option>
      <option>500</option>
      <option>600</option>
      <option>700</option>
      <option>800</option>
      <option>900</option>
      <option>1000</option>
      <option>1100</option>
      <option>1200</option>
      <option>1300</option>
      <option>1400</option>
      <option>1500</option>
      <option>1600</option>
      <option>1700</option>
      <option>1800</option>
      <option>1900</option>
      <option>2000</option>
    </Form.Control>
    <h3>to $</h3>
    <Form.Control
      as="select"
      style={{
        width: "30%",
        margin: '5px'
      }}
    >
      <option>300</option>
      <option>400</option>
      <option>500</option>
      <option>600</option>
      <option>700</option>
      <option>800</option>
      <option>900</option>
      <option>1000</option>
      <option>1100</option>
      <option>1200</option>
      <option>1300</option>
      <option>1400</option>
      <option>1500</option>
      <option>1600</option>
      <option>1700</option>
      <option>1800</option>
      <option>1900</option>
      <option>2000</option>
    </Form.Control>
  </SliderBox>
);

export default Label;
