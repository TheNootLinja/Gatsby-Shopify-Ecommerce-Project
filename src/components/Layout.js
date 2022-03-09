import React from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import '../global.css';
import useUI from '../context/UIContext';

import PopOpenMenu from './PopOpenMenu';
import ToastAlert from '../components/ToastAlert';

const Layout = ({ children, backgroundColor='##FEDBA1' }) => {
  const { handleNavMenuShow } = useUI();
  return (
  <Wrapper>
      <ToastAlert />
      <PopOpenMenu/>
      <NavBar>
      <SiteTitle role='link' onClick={() => navigate('/')}>Send Noods</SiteTitle>
          <NavLinks>
            <LinkItem>
              <Link to="/">
                Noods Home
              </Link>
            </LinkItem>
            <LinkItem>
              <Link to="/products">
                The Noods
              </Link>
            </LinkItem>
            <LinkItem>
              <Link to="/cart">
                Cart of Noods
              </Link>
            </LinkItem>
            <LinkItem>
              <Link to="/about">
                About Noods
              </Link>
            </LinkItem>
          </NavLinks>
          <HamburgerContainer onClick={handleNavMenuShow}>
            <HamburgerBar/>
            <HamburgerBar/>
            <HamburgerBar/>
          </HamburgerContainer>
      </NavBar>
      <ContentContainer>
        {children}
      </ContentContainer>
  </Wrapper>
  )
};

export default Layout;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
`;

const HamburgerContainer = styled.div`
  height: 40px;
  width: 40px;
  position: absolute;
  right: 5%;
  padding-top: 8px;
  @media (min-width: 850px) {
    display: none;
  }
`;

const HamburgerBar = styled.div`
  height: 5px;
  width: 100%;
  background: #fff;
  margin-bottom: 7px;
`;

const NavBar = styled.nav`
  background: #B3694A;
  height: 45px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  box-shadow: 0px 2px 10px rgba(0,0,0,0.25);
`;

const SiteTitle = styled.header`
  width: fit-content;
  font-size: 35px;
  margin-right: 0;
  color: #fff;
  cursor: pointer;
`;

const LinkItem = styled.li`
  margin-right: 20px;
  > * {
    text-decoration: none;
    color: #fff;
    font-size: 1.25rem;
    margin-right: 20px;
  }
`;

const NavLinks = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  align-items: center;
  width: fit-content;
  @media (max-width: 850px) {
    display: none;
  }
`;

const ContentContainer = styled.div`
  /* margin-top: 45px; */
`;


