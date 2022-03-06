import React from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';

const PopularItems = ({shopifyData}) => {
  shopifyData.map(item => console.log(item.node.priceRangeV2.maxVariantPrice.amount))
  return (
    <PopularItemsContainer>
      <SectionLabel>What's Popular</SectionLabel>
      <PopularItemsGrid>
        {
        shopifyData?.map((product, index) => 
          <PopularItem key={index}>
            <ItemTitle><p>{product.node.title}</p></ItemTitle>
            <Image src={product.node.images[0].src} alt=""/>
            <ItemPrice>{product.node.priceRangeV2.maxVariantPrice.amount}</ItemPrice>
          </PopularItem>
          // <ProductCard  addPosition='5px' itemWidth = '100px' itemHeight = '150px' product={product} key={index}/>
        )
        }
      </PopularItemsGrid>
    </PopularItemsContainer>
  )
}

export default PopularItems

const PopularItemsContainer = styled.div`
  width: 100%;
  max-width: 900px;
  height: 350px;
  margin: auto;
  padding-bottom: 43px;
  display: block;
  overflow: scroll;
  @media (max-width: 1190px) {
    height: fit-content;
  }
`;

const PopularItemsGrid = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: repeat(3, 1fr);
  margin: auto;
  width: 100%;
`;

const PopularItem = styled.div`
  border-radius: 10px;
  height: 280px;
  width: 100%;
  background: #b1873a;
  margin: auto;
  text-align: center;
  @media (max-width: 1190px) {
    height: 250px;
  }
  @media (max-width: 600px) {
    height: 190px;
  }
  @media (max-width: 450px) {
    font-size: 13px;
  }
`;

const ItemTitle = styled.p`
  height: 15%;
`;

const ItemPrice = styled.p`
  margin-top: 3px;
`;

const Image = styled.img`
  width: 150px;
  height: 175px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0px;
  @media (max-width: 1190px) {
    width: 100px;
    height: 125px;
  }
  @media (max-width: 600px) {
    width: 75px;
    height: 100px;
  }
`;

const SectionLabel = styled.h3`
  text-align: center;
`;