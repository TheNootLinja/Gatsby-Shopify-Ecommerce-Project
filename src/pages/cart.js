import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import ProductRow from '../components/ProductRow';
import useStore from '../context/StoreContext';

const Cart = () => {
  const { cart, checkout } = useStore();
  console.log(cart);
  console.log(checkout);
  return (
    <Layout>
      <Wrapper>
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Quanity</Text>
          <Text>Remove Item</Text>
        </HeaderWrapper>
        {
          checkout.lineItems.length > 0 ? checkout.lineItems.map((item, index) => <ProductRow key={index} item={item} />) : <Text>No Noods!</Text>
        }
        {/* Cart contents go here later */}
        <ButtonWrapper>
          <button disabled={checkout.lineItems.length === 0} onClick={() => window.open(checkout.webUrl)}>Checkout</button>
        </ButtonWrapper>
      </Wrapper>
    </Layout>
  )
}

export default Cart;

const Wrapper = styled.div`
  margin: 40px;
`;

const HeaderWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 330px);
  gap: 40px;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;