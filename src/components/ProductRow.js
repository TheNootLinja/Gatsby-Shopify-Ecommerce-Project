import React from 'react';
import styled from 'styled-components';
import useStore from '../context/StoreContext';

const ProductRow = ({ item }) => {
  // const { product, quantity } = item;
  const { removeLineItem, checkout } = useStore();
  console.log(item)
  return (
    <Wrapper>
      <ProductWrapper>
        <Image src={item.variant.image.src} alt={item.title} />
        <Subtitle>{item.title}</Subtitle>
        {/* <p>{product.variants[0].shopifyId}</p> */}
      </ProductWrapper>
      <Subtitle>{item.quantity}</Subtitle>
      <DeleteButton onClick={() => removeLineItem(checkout.id, item.id)}>Remove</DeleteButton>
    </Wrapper>
  )
}

export default ProductRow

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
  align-items: center;
`;

const ProductWrapper = styled.div`
  display: grid;
  grid-template-columns: 80px auto;
  gap: 20px;
  align-items: center;
  width: 330px;
`;

const Image = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 20px;
`;

const Subtitle = styled.p`
  font-weight: bold;
  font-size: 14px;
`;

const DeleteButton = styled.p`
  color: #a61b2b;
  font-size: 14px;
  cursor: pointer;
`;