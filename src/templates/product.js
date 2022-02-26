import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '../components/Button';

import useStore from '../context/StoreContext';

import useInput from '../utils/useInput';


const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  const { addVariantToCart } = useStore();
  const bind = useInput(1);
  return (
  <Layout>
    <ProductContainer>
    <h1>{product.title}</h1>
      <Image src={product.images[0]?.src} alt="" />
      <div>{product.description}</div>
      <InputContainer>
        <label htmlFor="qty">Quantity: </label>
        <input placeholder="1" id="qty" type="number" {...bind} />
        <Button textColor='#fff' buttonColor='#00aeff' buttonText='Add to Cart' onClick={() => addVariantToCart(product, bind.value)}>Add to Cart</Button>
      </InputContainer>
    </ProductContainer>
  </Layout>
  )
};

export default ProductTemplate;

const ProductContainer = styled.div`
  max-width: 1000px;
  margin: auto;
`;

const InputContainer = styled.div`
  background: red;
  width: fit-content;
  margin: 30px auto 0 auto;
  display: flex;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
`;