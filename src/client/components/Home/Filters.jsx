import React from 'react';
import Col from 'react-bootstrap/Col'
import Label from '../../components/UI/form/Label.jsx';
import SubLabel from '../../components/UI/form/SubLabel.jsx';
import LargeBoxSelector from '../UI/form/LargeBoxSelector.jsx';
import BudgetSlider from '../UI/form/BudgetSlider.jsx';
import SmallBoxSelector from '../UI/form/SmallBoxSelector.jsx';
import CheckList from '../UI/form/Checklist.jsx';
import ButtonContainer from '../UI/buttons/ButtonContainer.jsx';
import PrimaryButton from '../UI/buttons/Primary.jsx';
import OutlinedPrimary from '../UI/buttons/OutlinedPrimary.jsx';
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
      <PrimaryButton
        label="APPLY"
      />
    </ButtonContainer>
  </FilterContainer>
);

export default Filters;
