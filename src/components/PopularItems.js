import React from 'react';
import styled from 'styled-components';

const PopularItems = ({shopifyData}) => {
  shopifyData.map(item => console.log(item.node.priceRangeV2.maxVariantPrice.amount))
  return (
    <PopularItemsContainer>
      <SectionLabel>What's Popular</SectionLabel>
      <PopularItemsGrid>
        {
        shopifyData?.map((product, index) => 
          <PopularItem key={index}>
            <p>{product.node.title}</p>
            <Image src={product.node.images[0].src} alt=""/>
            <p>{product.node.priceRangeV2.maxVariantPrice.amount}</p>
          </PopularItem>
        )
        }
      </PopularItemsGrid>
    </PopularItemsContainer>
  )
}

export default PopularItems

const PopularItemsContainer = styled.div`
  background: #fff280;
  width: 95%;
  max-width: 900px;
  height: 350px;
  margin: auto;
`;

const PopularItemsGrid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  width: 95%;
`;

const PopularItem = styled.div`
  height: 280px;
  width: 100%;
  background: #b1873a;
  margin: auto;
  text-align: center;
`;

const Image = styled.img`
  width: 150px;
  height: 175px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0px;
`;

const SectionLabel = styled.h3`
  text-align: center;
`;