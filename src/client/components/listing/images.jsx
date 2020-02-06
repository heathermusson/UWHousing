import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image'

import styled from 'styled-components';

const ImageContainer = styled(Col)`
  padding: 0px;
`;

const ListingImage = styled(Image)`
  width: 100%;
`;

class Images extends Component {
    render() {
        return (
          <Row>
            <ImageContainer sm={6}>
              <ListingImage src="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-23624906-unapproved/original/5fc545e4-fd35-4f1f-b709-a42575ef808b.JPEG?aki_policy=xx_large" />
            </ImageContainer>
            <ImageContainer sm={3}>
              <ListingImage src="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-23624906-unapproved/original/5fa297f1-39da-4095-a5d7-02dd70c740cd.JPEG?aki_policy=large" />
              <ListingImage src="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-23624906-unapproved/original/f64cce22-ec62-4319-a995-fc2735d30ecf.JPEG?aki_policy=large" />
            </ImageContainer>
            <ImageContainer sm={3}>
              <ListingImage src="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-23624906-unapproved/original/ff4de4b3-a98f-4f32-b096-f3e04cd66024.JPEG?aki_policy=large" />
              <ListingImage src="https://a0.muscache.com/im/pictures/pro_photo_tool/Hosting-23624906-unapproved/original/bfcf3d5c-ae9c-4841-98ce-7a0a57c9fbf8.JPEG?aki_policy=large" />
            </ImageContainer>
          </Row>
        )
    }
}

export default Images;
