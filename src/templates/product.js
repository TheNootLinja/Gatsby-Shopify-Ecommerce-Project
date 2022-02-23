import React from 'react';
import Layout from '../components/Layout/Layout';
import { productImg } from './product.module.css';

import useStore from '../context/StoreContext';

import useInput from '../utils/useInput';


const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  const { addVariantToCart } = useStore();
  const bind = useInput(1);
  return (
  <Layout>
    <h1>{product.title}</h1>
    <img className={productImg} src={product.images[0]?.src} alt="" />
    <div>{product.description}</div>
    <label htmlFor="qty">Quantity: </label>
    <input placeholder="1" id="qty" type="number" {...bind} />
    <button onClick={() => addVariantToCart(product, bind.value)}>Add to Cart</button>
  </Layout>
  )
};

export default ProductTemplate;
