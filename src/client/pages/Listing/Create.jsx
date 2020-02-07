import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Header from '../../components/Header.jsx';
import Footer from '../../components/Footer.jsx';
import CreateForm from '../../components/Listing/CreateForm.jsx';
import styled from 'styled-components';

const CreateContainer = styled(Container)`
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
`;

const MainImage = styled(Image)`
  width: 100%;
`;

const Create = () => (
  <>
    <Header />
    <CreateContainer>
      <Row>
        <Col sm={6}>
          <MainImage src="https://cdn.dribbble.com/users/1387827/screenshots/3810865/house-8.png" />
        </Col>
        <Col sm={6}>
          <CreateForm />
        </Col>
      </Row>
    </CreateContainer>
    <Footer />
  </>
);

export default Create;
