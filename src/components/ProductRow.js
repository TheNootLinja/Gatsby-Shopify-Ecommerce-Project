import React from 'react';
import styled from 'styled-components';
import useStore from '../context/StoreContext';

const ProductRow = ({ item }) => {
  // const { product, quantity } = item;
  const { removeLineItem, checkout } = useStore();
  console.log(item)
  return (
    <ProductRowWrapper>
    <Wrapper>
      <ProductWrapper>
        <Image src={item.variant.image.src} alt={item.title} />
      </ProductWrapper>
        <Subtitle>{item.title}</Subtitle>
      <Subtitle>{item.quantity} in cart</Subtitle>
      <DeleteButton onClick={() => removeLineItem(checkout.id, item.id)}>Remove</DeleteButton>
      <DeleteIcon onClick={() => removeLineItem(checkout.id, item.id)} >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="red" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      </DeleteIcon>
    </Wrapper>
    <Divider />
    </ProductRowWrapper>
  )
}

export default ProductRow

const ProductRowWrapper = styled.div`
  padding: 10px;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-items: center;
  margin: auto;
  margin-top: 5px;
`;

const ProductWrapper = styled.div`
  display: grid;
  align-items: center;
  width: 95%;
  max-width: 600px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 20px;
  margin: auto;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  @media (min-width: 800px) {
    width: 150px;
    height: 150px;
  }
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  width: 70px;
  margin: auto;
  text-align: center;
`;

const DeleteButton = styled.button`
  border: none;
  background: #c41f32;
  color: white;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
  height: 30px;
  width: 120px;
  border-radius: 2px;
  box-shadow: 2px 2px 5px rgba(0,0,0,0.2);
  display: none;
  @media (min-width: 550px) {
    display: inline;
  }
`;

const DeleteIcon = styled.button`
  border: none;
  background: none;
  width: 50px;
  height: 50px;
  margin: auto;
  @media (min-width: 550px) {
    display: none;
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin: 20px auto 0 auto;
  background: rgba(0,0,0,.06);
`;