import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import Images from '../components/listing/Images.jsx';
import Content from '../components/listing/Content.jsx';
import styled from 'styled-components';

const Listing = () => (
  <>
    <Header />
    <Images />
    <Content
      title="4 Bedroom Apartment Close to the Universities!"
      term="Summer 2020"
      bedrooms="4"
      bathrooms="2"
      description={[
        "Furnished 4 bedroom apartment available for sublet for the Summer 2020 term! Beautiful space with ensuite washroom. Close to many amenities and less than a 5 minute drive to Conestoga Mall. Building features include study spaces, rooftop terrace, wireless internet, bike storage, and visitor parking.",
        "Furnished 4 bedroom apartment available for sublet for the Summer 2020 term! Beautiful space with ensuite washroom. Close to many amenities and less than a 5 minute drive to Conestoga Mall. Building features include study spaces, rooftop terrace, wireless internet, bike storage, and visitor parking.",
      ]}
      amenities={[
        "Utilities Included",
        "Ensuite Washrooms",
        "Ensuite Laundry",
        "Wifi",
        "A/C",
        "Heating",
        "Cable TV",
        "Dishwasher",
        "Furnished",
        "Balcony"
      ]}
      buildingAmenities={[
        "Gym",
        "Study Spaces",
        "Rooftop Terrace",
        "Bike Storage",
        "Visitor Parking"
      ]}
    />
    <Footer />
  </>
);

export default Listing;
