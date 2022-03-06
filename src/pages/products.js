import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ProductCard from '../components/ProductCard';
import Layout from '../components/Layout';
import ToastAlert from '../components/ToastAlert';

const products = ({data}) => {
    const shopifyData = data.allShopifyProduct.edges;
  return(
    <Layout>
      <Wrapper>
        {
        shopifyData?.map((product, index) => <ProductCard  product={product} key={index}/>)
        }
      </Wrapper>
  </Layout>
  )
};

export default products;

const Wrapper = styled.div`
  display: grid;
  margin: 25px auto 0 auto;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 40px;
  width: 95%;
  max-width: 1300px;
  @media (max-width: 750px) {
    grid-template-columns: repeat(2, auto);
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(1, auto);
  }
`;

export const query = graphql`
  query {
    allShopifyProduct {
      edges {
        node {
          id
          title
          handle
          variants {
            shopifyId
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          description
          images {
            src
          }
        }
      }
    }
  }
`;