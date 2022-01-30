import React from 'react';
import { graphql } from 'gatsby';
import ProductCard from '../components/ProductCard/ProductCard'
import { wrapper } from './products.module.css'

const products = ({data}) => {
    const shopifyData = data.allShopifyProduct.edges;
    console.log(shopifyData)
  return(
    <div className={wrapper}>
    {
      shopifyData?.map((product, index) => <ProductCard  product={product} key={index}/>)
    }
  </div>
  )
};

export default products;

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