import React from 'react';
import { graphql } from 'gatsby';
import './products.css';

const products = (data) => {
  const shopifyData = data.data.allShopifyProduct.edges;
  console.log(shopifyData);
  return <div>
      {shopifyData.map(product => {
        return <div  key={product.node.id} className="product-card">
                <p>{product.node.title}</p>
                <img src={product.node.images.src} alt="" />
            </div>
      })}
  </div>;
};

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

export default products;
