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
  & > * {
    text-decoration: none;
  }
  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
  }
`;

const PopularItem = styled.div`
  border-radius: 10px;
  height: fit-content;
  width: 100%;
  /* background: #b1873a; */
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  box-sizing: border-box;
  position: relative;
`;

const ItemInfoContainer = styled.div`
  /* background: rgba(0,0,0,0.5); */
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
  /* margin-top: 10px; */
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
  /* @media (max-width: 1190px) {
    width: 100px;
    height: 125px;
  }
  @media (max-width: 750px) {
    width: 75%;
  }
  @media (max-width: 600px) {
    width: 75px;
    height: 100px;
  } */
`;

const SectionLabel = styled.h3`
  text-align: center;
  margin: 2rem auto 1rem auto;
`;