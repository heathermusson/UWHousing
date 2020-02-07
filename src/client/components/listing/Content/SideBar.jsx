import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ContactForm from './ContactForm.jsx';
import styled from 'styled-components';

const Container = styled.div`
  border: 1px solid #DCDCDC;
  margin: 20px;
  padding: 20px;
`;

const SidebarRow = styled(Row)`
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100%;
  border-bottom: 1px solid #DCDCDC;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  font-weight: semi-bold;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
`;

const SideBar = ({ price, priceUnits, name }) => (
  <Container>
    <Row>
      <PriceContainer><Price>{price}</Price> {priceUnits}</PriceContainer>
    </Row>
    <SidebarRow>
      <ContactForm
        name={name}
      />
    </SidebarRow>
  </Container>
);

export default SideBar;
