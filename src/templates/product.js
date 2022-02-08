import React from 'react';
import Layout from '../components/Layout/Layout';
import { productImg } from './product.module.css';

const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  console.log(product.images[0])
  return (
  <Layout>
    <h1>{product.title}</h1>
    <img className={productImg} src={product.images[0]?.originalSrc} alt="" />
    <div>{product.description}</div>
    <label htmlFor="qty">Quantity: </label>
    <input placeholder="1" id="qty" type="number" defaultValue={1} />
    <button onClick={() => alert("Added to Cart!")}>Add to Cart</button>
  </Layout>
  )
};

export default ProductTemplate;
