import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import useUI from '../context/UIContext'

const PopOpenMenu = () => {

  const { navMenuShow, handleNavMenuShow } = useUI();


  return (
    <PopOpenMenuContainer navMenuShow={navMenuShow}>
      <NavItem onClick={handleNavMenuShow}>
        <Link to='/'>Home</Link>
      </NavItem>
      <NavItem onClick={handleNavMenuShow}>
        <Link to='/products'>The Noods</Link>
      </NavItem>
      <NavItem onClick={handleNavMenuShow}>
        <Link to='/cart'>Cart of Noods</Link>
      </NavItem>
      <NavItem onClick={handleNavMenuShow}>
        <Link to='/about'>About the Noods</Link>
      </NavItem>
    </PopOpenMenuContainer>
  )
}

export default PopOpenMenu

const PopOpenMenuContainer = styled.div`
  height: 275px;
  width: 100%;
  background: #e7a75d;
  border-radius: 0 0 20px 20px;
  position: absolute;
  /* transform: translate(calc(100vw - 300px), 0); */
  transition: all .5s;
  transform: ${(props) => `translate(0, ${props.navMenuShow ? '45px' : '-400px'})`};
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 1;
  opacity: ${(props) => props.navMenuShow ? '100%' : '0'};
  @media (min-width: 850px) {
    display: none;
  }
`;

const NavItem = styled.p`
  & > a {
    color: black;
    text-decoration: none;
    font-size: 1.5rem;
  }
  :first-of-type {
    margin-top: 40px;
  }
`;