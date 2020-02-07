import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import PrimaryButton from '../components/buttons/Primary.jsx';
import styled from 'styled-components';

const CenteredRow = styled(Row)`
  display: flex;
  align-items: center;
`;

const MainImage = styled(Image)`
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 20px;
`;

const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const StyledForm = styled(Form)`
  font-size: 14px;
  font-weight: 500;
`;

const Create = () => (
  <>
    <Header />
    <Container
      style={{
        height: '81vh',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <CenteredRow>
        <Col sm={6}>
          <MainImage src="https://cdn.dribbble.com/users/1387827/screenshots/3810865/house-8.png" />
        </Col>
        <Col sm={6}>
          <Title>Tell us about your property!</Title>
          <StyledForm>
            <Form.Group controlId="propertyTitle">
              <Subtitle>Give your property a name</Subtitle>
              <Form.Control
                style={{
                  fontSize: '14px'
                }}
                placeholder="e.g. Amazing 3 bedroom apartment!"
              />
            </Form.Group>

            <Form.Group controlId="propertyDescription">
              <Subtitle>Tell us more about it!</Subtitle>
              <Form.Control
                as="textarea"
                rows="3"
                style={{
                  fontSize: '14px'
                }}
              />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group controlId="propertyBedrooms">
                  <Subtitle>How many bedrooms are available?</Subtitle>
                  <Form.Control
                    as="select"
                    style={{
                      fontSize: '14px'
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="propertyBathrooms">
                  <Subtitle>How many bathrooms are there?</Subtitle>
                  <Form.Control
                    as="select"
                    style={{
                      fontSize: '14px'
                    }}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="propertyTerm">
                  <Form.Group controlId="propertyPrice">
                    <Subtitle>What is the rent price per month?</Subtitle>
                    <Form.Control
                      placeholder="eg. $1200"
                      style={{
                        fontSize: '14px'
                      }}
                    />
                  </Form.Group>
                </Form.Group>
              </Col>
              <Col>
                <Subtitle>What term are you looking to sublet for?</Subtitle>
                <Form.Control
                  as="select"
                  style={{
                    fontSize: '14px'
                  }}
                >
                  <option>Summer 2020</option>
                  <option>Fall 2020</option>
                  <option>Winter 2021</option>
                </Form.Control>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="propertyAmenities">
                  <Subtitle>Amenities</Subtitle>
                  <Form.Control
                    as="select"
                    multiple
                    style={{
                      fontSize: '14px'
                    }}
                  >
                    <option>Utilities Included</option>
                    <option>Ensuite Washrooms</option>
                    <option>Ensuite Laundry</option>
                    <option>Wifi</option>
                    <option>A/C</option>
                    <option>Heating</option>
                    <option>Cable TV</option>
                    <option>Dishwasher</option>
                    <option>Furnished</option>
                    <option>Balcony</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="buildingAmenities">
                  <Subtitle>Building Amenities</Subtitle>
                  <Form.Control
                    as="select"
                    multiple
                    style={{
                      fontSize: '14px'
                    }}
                  >
                    <option>Gym</option>
                    <option>Study Spaces</option>
                    <option>Rooftop Terrace</option>
                    <option>Bike Storage</option>
                    <option>Visitor Parking</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <PrimaryButton
              label="SUBMIT"
            />
          </StyledForm>
        </Col>
      </CenteredRow>
    </Container>
    <Footer />
  </>
);

export default Create;
