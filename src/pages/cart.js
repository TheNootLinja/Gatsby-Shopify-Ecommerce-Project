import React from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import ProductRow from '../components/ProductRow';

const Cart = () => {
  return (
    <div>Cart</div>
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