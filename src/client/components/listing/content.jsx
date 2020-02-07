import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Map from '../map/Map.jsx';
import SideBar from './SideBar.jsx';
import styled from 'styled-components';

const ContentContainer = styled(Container)`
  margin-top: 60px;
  margin-bottom: 60px;
`;

const Subtitle = styled.div`
  font-size: 16px;
  color: #686868;
`;

const SubtitleItem = styled.span`
  padding: 10px 30px 0px 0px;
`;

const Description = styled.div`
  padding-top: 20px;
`;

const SectionTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  padding-bottom: 10px;
`;

const Amenities = styled.ul`
  columns: 2;
`;

const Amenity = styled.li`
  padding-bottom: 5px;
`;

const Breadcrumb = styled.a`
  text-decoration: none;
  color: #686868;
  &:hover {
    text-decoration: none;
    color: #000000;
  }
`;

const BreadcrumbRow = styled(Row)`
  flex: display;
  margin-bottom: 10px;
`;

const Icon = styled(FontAwesomeIcon)`
  align-self: flex-end;
  padding-bottom: 8px;
`;


const Content = ({ title, term, bedrooms, bathrooms, amenities, buildingAmenities }) => (
  <ContentContainer>
    <BreadcrumbRow>
      <Icon icon="chevron-left" /><Breadcrumb href="#">Back</Breadcrumb>
    </BreadcrumbRow>
    <Row>
      <Col
        sm={8}
        style={{
          padding: '0px'
        }}
      >
        <h5>{title}</h5>

        <Subtitle>
          <SubtitleItem>{term}</SubtitleItem>
          <SubtitleItem>{bedrooms} Bedrooms</SubtitleItem>
          <SubtitleItem>{bathrooms} Bathrooms</SubtitleItem>
        </Subtitle>

        <Description>
          {description.map(paragraph => (
            <p>{paragraph}</p>
          ))}
        </Description>

        <SectionTitle>
          Amenities
        </SectionTitle>
        <Amenities>
          {amenities.map(item => (
            <Amenity>{item}</Amenity>
          ))}
        </Amenities>

        <SectionTitle>
          Building Amenities
        </SectionTitle>
        <Amenities>
          {buildingAmenities.map(item => (
            <Amenity>{item}</Amenity>
          ))}
        </Amenities>

        <SectionTitle>
          Location
        </SectionTitle>
        <Map
          height="100%"
          width="80vh"
          lat={43.473565}
          lng={-80.539364}
          zoom={18}
        />
      </Col>
      <Col
        sm={4}
        style={{
          padding: '0px'
        }}
      >
        <SideBar
          name="John Smith"
          email="jsmith@uwaterloo.ca"
          price="$2400"
          priceUnits="/month"
        />
      </Col>
    </Row>
  </ContentContainer>
);

export default Content;
