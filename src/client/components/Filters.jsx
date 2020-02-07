import React from 'react';
import Col from 'react-bootstrap/Col'
import Label from '../components/form/Label.jsx';
import SubLabel from '../components/form/SubLabel.jsx';
import LargeBoxSelector from '../components/form/LargeBoxSelector.jsx';
import BudgetSlider from '../components/form/BudgetSlider.jsx';
import SmallBoxSelector from '../components/form/SmallBoxSelector.jsx';
import CheckList from '../components/form/Checklist.jsx';
import ButtonContainer from '../components/buttons/ButtonContainer.jsx';
import PrimaryButton from '../components/buttons/Primary.jsx';
import OutlinedSecondary from '../components/buttons/OutlinedSecondary.jsx';
import styled from 'styled-components';

const FilterContainer = styled(Col)`
  padding-left: 30px;
`;

const Filter = styled.div`
  padding-top: 10px;
`;

const Selector = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: space-between;
  align-item: center;
  width: 100%;
  text-align: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Filters = () => (
  <FilterContainer sm={3}>
    <Filter>
      <Label value="Property Type" />
      <Selector>
        <LargeBoxSelector
          label="Apartment"
          icon="building"
        />
        <LargeBoxSelector
          label="House"
          icon="home"
        />
      </Selector>
    </Filter>

    <Filter>
      <Label value="Monthly Budget" />
      <BudgetSlider />
    </Filter>

    <Filter>
      <Label value="Property" />
      <SubLabel
        value="Bedrooms"
      />
      <Selector>
      <SmallBoxSelector label="1" />
      <SmallBoxSelector label="2" />
      <SmallBoxSelector label="3" />
      <SmallBoxSelector label="4" />
      <SmallBoxSelector label="5+" />
      </Selector>
      <SubLabel
        value="Bathrooms"
      />
      <Selector>
        <SmallBoxSelector label="1" />
        <SmallBoxSelector label="2" />
        <SmallBoxSelector label="3" />
        <SmallBoxSelector label="4" />
        <SmallBoxSelector label="5+" />
      </Selector>
    </Filter>

    <Filter>
      <Label value="Amenities" />
      <CheckList
        labels={[
          "Furnished",
          "Ensuite Bathroom",
          "Baloncy",
          "A/C",
          "Utilities Included",
          "Ensuite Laundry",
          "Gym"
        ]}
      />
    </Filter>

    <ButtonContainer>
      <OutlinedSecondary
        label="RESET"
      />
      <PrimaryButton
        label="APPLY"
      />
    </ButtonContainer>
  </FilterContainer>
);

export default Filters;
