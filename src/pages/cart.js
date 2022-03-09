import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout';
import ProductRow from '../components/ProductRow';
import useStore from '../context/StoreContext';

const Cart = () => {
  const { cart, checkout } = useStore();
  console.log(cart);
  console.log(checkout);
  return (
    <Layout>
      <Wrapper>
        {/* <HeaderWrapper>
          <Text>Product</Text>
          <Text>Product Name</Text>
          <Text>Quanity</Text>
          <Text>Remove Item</Text>
        </HeaderWrapper> */}
        {
          checkout.lineItems.length > 0 ? checkout.lineItems.map((item, index) => <ProductRow key={index} item={item} />) : <Text>No Noods!</Text>
        }
        <ButtonWrapper>
          <button disabled={checkout.lineItems.length === 0} onClick={() => window.open(checkout.webUrl)}>Checkout</button>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Cart;

const Wrapper = styled.div`
  margin: 10px;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;