import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import ProductRow from '../components/ProductRow';

const Cart = () => {
  return (
    <Layout>
      <Wrapper>
        <HeaderWrapper>
          <Text>Product</Text>
          <Text>Quanity</Text>
          <Text>Remove Item</Text>
        </HeaderWrapper>
        {/* Cart contents go here later */}
        <ButtonWrapper>
          <button onClick={() => console.log('Redirect to checkout page')}>Checkout</button>
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