import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useUI from '../context/UIContext'

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
  background: #B3694A;
  border-radius: 0 0 20px 20px;
  position: absolute;
  /* transform: translate(calc(100vw - 300px), 0); */
  transition: all 1s;
  transform: ${(props) => `translate(calc(100vw - 300px), ${props.navMenuShow ? '45px' : '-400px'})`};
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  opacity: ${(props) => props.navMenuShow ? '100%' : '0'};
  @media (min-width: 850px) {
    display: none;
  }
`;