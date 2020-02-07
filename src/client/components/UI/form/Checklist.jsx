import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const values = [
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

const Checklist = ( labels ) => (
  <ChecklistContainer>
    {values.map(label => (
      <Form.Check
        key={label}
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

export default Checklist;
