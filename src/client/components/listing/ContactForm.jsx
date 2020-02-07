import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonContainer from '../buttons/ButtonContainer.jsx';
import PrimaryButton from '../buttons/Primary.jsx';
import styled from 'styled-components';

const StyledForm = styled(Form)`
  margin: 0px 15px 0px 15px;
  width: 100%;
`;

const FormTitle = styled.div`
  margin: 15px 0px 10px 15px;
  font-weight: 500;
`;

const ContactForm = ({ name }) => (
  <>
    <FormTitle>
      Contact {name}
    </FormTitle>
    <StyledForm>
      <Form.Group controlId="formName">
        <Form.Control
          placeholder="Name"
          style={{
            fontSize: '14px'
          }}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEmail">
        <Form.Control
          type="email"
          placeholder="Email"
          style={{
            fontSize: '14px'
          }}
          />
      </Form.Group>

      <Form.Group controlId="formMessage">
        <Form.Control
          as="textarea"
          rows="5"
          placeholder="Message"
          style={{
            fontSize: '14px'
          }}
        />
      </Form.Group>

      <ButtonContainer>
        <PrimaryButton label="SUBMIT" />
      </ButtonContainer>
    </StyledForm>
  </>
);

export default ContactForm;
