import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import Filters from '../components/Home/Filters.jsx';
import Map from '../components/UI/map/Map.jsx';
import styled from 'styled-components';

const FullPage = styled(Row)`
  height: 90vh;
`;

const HomePage = () => (
  <>
    <Header />
    <FullPage>
      <Filters />
      <Col
        sm={9}
        style={{
          padding: '0px',
        }}>
        <Map
          height="100%"
          width="100%"
          lat={43.473565}
          lng={-80.539364}
          zoom={15}
        />
      </Col>
    </FullPage>
  </>
);

export default HomePage;
