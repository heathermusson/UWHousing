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

const StyledForm = styled(Form)`
  font-size: 14px;
  font-weight: 500;
`;

const CreateForm = () => (
  <>
    <h1>Tell us about your property!</h1>
    <StyledForm>
      <Form.Group controlId="propertyTitle">
        <h3>Give your property a name</h3>
        <Form.Control
          style={{
            fontSize: '14px'
          }}
          placeholder="e.g. Amazing 3 bedroom apartment!"
        />
      </Form.Group>

      <Form.Group controlId="propertyDescription">
        <h3>Tell us more about it!</h3>
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
            <h3>How many bedrooms are available?</h3>
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
            <h3>How many bathrooms are there?</h3>
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
              <h3>What is the rent price per month?</h3>
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
            <h3>What term are you looking to sublet?</h3>
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
            <h3>Amenities</h3>
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
            <h3>Building Amenities</h3>
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
