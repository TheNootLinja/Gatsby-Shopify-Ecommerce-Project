import React from 'react';
import styled from 'styled-components';

const PopularItems = () => {
  return (
    <PopularItemsContainer>
      <SectionLabel>What's Popular</SectionLabel>
    </PopularItemsContainer>
  )
}

export default PopularItems

const PopularItemsContainer = styled.div`

  background: #fff280;
  width: 95%;
  max-width: 900px;
  height: 200px;
  margin: auto;
`;

const SectionLabel = styled.h3`
  text-align: center;
`;