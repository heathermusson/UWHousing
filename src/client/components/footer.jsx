import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

const ContentContainer = styled(Container)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  font-size: 14px;
  color: #686868;
`;

const Footer = () => (
  <>
    <hr />
    <ContentContainer>
      <p>Copyright 2020 - UW Housing.</p>
    </ContentContainer>
  </>
);

export default Footer;
