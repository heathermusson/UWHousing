import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ContentContainer = styled(Container)`
  display: flex;
  align-items: center;
  height: 10vh;
  padding: 0px;
  color: #686868;
`;

const Seperator = styled.hr`
  margin: 0;
`;

const Footer = () => (
  <>
    <Seperator />
    <ContentContainer>
      <h4>Copyright 2020 - UW Housing.</h4>
    </ContentContainer>
  </>
);

export default Footer;
