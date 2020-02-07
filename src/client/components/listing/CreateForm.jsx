import React from 'react';
import { Container, Row, Col, Image, Form, Button } from 'react-bootstrap';
import PrimaryButton from '../../components/UI/buttons/Primary.jsx';
import styled from 'styled-components';

const CreateContainer = styled(Container)`
  height: 80vh;
  min-height: 600px;
  display: flex;
  align-items: center;
`;

const Subtitle = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

const StyledForm = styled(Form)`
  font-size: 14px;
  font-weight: 500;
`;

const CreateForm = () => (
  <>
    <h1>Tell us about your property!</h1>
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

            <Form.Group controlId="propertyPrice">
              <Subtitle>What is the rent price per month?</Subtitle>
              <Form.Control
                placeholder="eg. $1200"
                style={{
                  fontSize: '14px'
                }}
              />
            </Form.Group>

        </Col>
        <Col>
          <Form.Group controlId="propertyTerm">
            <Subtitle>What term are you looking to sublet?</Subtitle>
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
          </Form.Group>
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
  </>
);

export default CreateForm;
