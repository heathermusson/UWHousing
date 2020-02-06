import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import TestMap from '../components/map/Map.jsx';
import Filters from '../components/Filters.jsx';

import styled from 'styled-components';

class HomePage extends Component {
    render() {
        return (
          <>
            <Header />
            <Row>
              <Filters />
              <Col
                sm={9}
                style={{
                  padding: '0px',
                }}>
                <TestMap style={{height: '100%'}}/>
              </Col>
            </Row>
          </>
        )
    }
}

export default HomePage;
