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
  margin: 30px auto 0 auto;
  width: 95%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`;