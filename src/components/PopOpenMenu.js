import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useUI from '../context/UIContext';

const PopOpenMenu = () => {

  const { navMenuShow } = useUI();


  return (
    <PopOpenMenuContainer navMenuShow={navMenuShow}>
      <Link to='/products'>The Noods</Link>
      <Link to='/products'>The Noods</Link>
      <Link to='/products'>The Noods</Link>
    </PopOpenMenuContainer>
  )
}

export default PopOpenMenu

const PopOpenMenuContainer = styled.div`
  height: 400px;
  width: 300px;
  background: ${(props) => props.navMenuShow ? 'blue' : 'red'};
  border-radius: 0 0 20px 20px;
  position: absolute;
  transform: translate(calc(100vw - 300px), 0);
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  @media (min-width: 850px) {
    display: none;
  }
`;