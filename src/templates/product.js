import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout';
import Button from '../components/Button';
import useUI from '../context/UIContext';

import useStore from '../context/StoreContext';

import useInput from '../utils/useInput';


const ProductTemplate = ({ pageContext }) => {
  const { product } = pageContext;
  const { addVariantToCart } = useStore();
  const { handleToastShow } = useUI();
  const bind = useInput(1);
  const clickFunc = () => {
    addVariantToCart(product, bind.value);
    handleToastShow();
  }
  return (
  <Layout>
    <ProductContainer>
        <Image src={product.images[0]?.src} alt="" />
        <ProductInfoContainer>
          <h1>{product.title}</h1>
          <p>${product.priceRangeV2.maxVariantPrice.amount}</p>
          <p>{product.description}</p>
        </ProductInfoContainer>
        <InputContainer>
          <InputQuantityContainer>
            <label htmlFor="qty">Quantity: </label>
            <Input placeholder="1" id="qty" type="number" {...bind} />
          </InputQuantityContainer>
            <Button
            textColor='#fff' 
            buttonColor='#00aeff' 
            buttonText='Add to Cart' 
            clickFunc={clickFunc}>Add to Cart</Button>
        </InputContainer>
    </ProductContainer>
  </Layout>
  )
};

export default ProductTemplate;

const ProductContainer = styled.div`
  max-width: 1000px;
  margin: 45px auto 0 auto;
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: center;

`;

const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const InputContainer = styled.div`
  width: fit-content;
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const InputQuantityContainer = styled.div`
  margin-bottom: 20px;
`;

const Input = styled.input`
  height: 30px;
  margin-left: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
  align-items: center;
`;

const Image = styled.img`
  height: 300px;
  width: 300px;
  border-radius: 30px;
`;