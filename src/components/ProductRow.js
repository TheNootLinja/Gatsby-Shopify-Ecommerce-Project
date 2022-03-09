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
    </Wrapper>
    <Divider />
    </ProductRowWrapper>
  )
}

export default ProductRow

const ProductRowWrapper = styled.div``;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  align-items: center;
  margin-top: 5px;
`;

const ProductWrapper = styled.div`
  display: grid;
  /* grid-template-columns: 80px auto; */
  align-items: center;
  width: 95%;
  max-width: 395px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 20px;
  margin: auto;
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;
  width: 70px;
`;

const DeleteButton = styled.p`
  color: #a61b2b;
  font-size: 14px;
  cursor: pointer;
  text-align: center;
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  margin-top: 5px;
  background: rgba(0,0,0,.06);
`;