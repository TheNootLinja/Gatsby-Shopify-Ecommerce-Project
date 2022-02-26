import React from 'react';
import { graphql } from 'gatsby';
import ProductCard from '../components/ProductCard/ProductCard';
import Layout from '../components/Layout/Layout';
import { wrapper } from './products.module.css';
import ToastAlert from '../components/ToastAlert';

const products = ({data}) => {
    const shopifyData = data.allShopifyProduct.edges;
  return(
    <Layout>
      <ToastAlert/>
      <div className={wrapper}>
        {
        shopifyData?.map((product, index) => <ProductCard  product={product} key={index}/>)
        }
      </div>
  </Layout>
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