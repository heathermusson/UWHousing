import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import Filters from '../components/Filters.jsx';
import Map from '../components/map/Map.jsx';
import styled from 'styled-components';

const HomePage = () => (
  <>
    <Header />
    <Row>
      <Filters />
      <Col
        sm={9}
        style={{
          padding: '0px',
        }}>
        <Map style={{height: '100%'}}/>
      </Col>
    </Row>
  </>
);

export default HomePage;
