import React from 'react';
import { Link } from 'gatsby';
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
          <Link to={`/products/${product.node.handle}`}>
            <PopularItem key={index}>
              <Image src={product.node.images[0].src} alt=""/>
              <ItemInfoContainer>
                <ItemTitle>{product.node.title}</ItemTitle>
                <ItemPrice>${product.node.priceRangeV2.maxVariantPrice.amount}</ItemPrice>
              </ItemInfoContainer>
            </PopularItem>
          </Link>
        )
        }
      </PopularItemsGrid>
    </PopularItemsContainer>
  )
}

export default PopularItems

const PopularItemsContainer = styled.div`
  width: 100%;
  /* max-width: 900px; */
  height: fit-content;
  margin: auto;
  padding-bottom: 43px;
  display: block;
  overflow: scroll;
  text-decoration: none;
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
  max-width: 900px;

  & > * {
    text-decoration: none;
  }
  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
  }
`;

const PopularItem = styled.div`
  border-radius: 20px;
  height: fit-content;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  position: relative;
  /* box-shadow: 0 0 25px 10px rgba(0,0,0,.15); */
`;

const ItemInfoContainer = styled.div`
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  position: absolute;
  bottom: 0;
  width: 100%;
  border-radius: 0 0 20px 20px;
`;


const ItemTitle = styled.p`
  white-space: nowrap;
  overflow: hidden;
  color: #fdff7d;
  margin: 10px auto 0 auto;
`;

const ItemPrice = styled.p`
  margin: 0 auto 10px auto;
  color: #fdff7d;
`;

const Image = styled.img`
  width: 150px;
  height: 175px;
  object-fit: cover;
  border-radius: 20px;
  margin: 0px;
  width: 100%;
  height: 100%;
`;

const SectionLabel = styled.h3`
  text-align: center;
  margin: 2rem auto 1rem auto;
`;