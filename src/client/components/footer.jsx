import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'
import styled from 'styled-components';

const ContentContainer = styled(Container)`
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 0px;
  font-size: 14px;
  color: #686868;
`;

class Footer extends Component {

  render() {
    return (
      <>
        <hr />
        <ContentContainer>
          <p>Copyright 2020 - UW Housing.</p>
        </ContentContainer>
      </>
    )
  }
}

export default Footer;
