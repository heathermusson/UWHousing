import React from 'react';
import Col from 'react-bootstrap/Col'
import Label from '../components/form/Label.jsx';
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

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;

const Filters = () => (
  <FilterContainer sm={3}>
    <Filter>
      <Label value="Property Type" />
      <LargeBoxSelector> </LargeBoxSelector>
    </Filter>

    <Filter>
      <Label value="Monthly Budget" />
      <BudgetSlider />
    </Filter>

    <Filter>
      <Label value="Property" />
      <SmallBoxSelector
        label="Bedrooms"
      />
      <SmallBoxSelector
        label="Bathrooms"
      />
    </Filter>

    <Filter>
      <Label value="Amenities" />
      <CheckList />
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
