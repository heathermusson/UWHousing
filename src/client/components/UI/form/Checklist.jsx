import React from 'react';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

const ChecklistContainer = styled.h3`
  margin: 5px;
`;

const Checklist = ({ labels }) => (
  <ChecklistContainer>
    {labels.map(label => (
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
