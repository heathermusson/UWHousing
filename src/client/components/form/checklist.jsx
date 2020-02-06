import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components'

const labels = [
  "Furnished",
  "Ensuite Bathroom",
  "Baloncy",
  "A/C",
  "Utilities Included",
  "Ensuite Laundry",
  "Gym"
];

const ChecklistContainer = styled.h3`
  margin: 5px;
  font-size: 14px;
`;

export default function Checklist(props) {

  return (
    <ChecklistContainer>
      {labels.map(label => (
        <Form.Check
          style={{
            paddingBottom: '10px'
          }}
          type={'checkbox'}
          id={label}
          label={label}
        />
      ))}
    </ChecklistContainer>
  );
}
