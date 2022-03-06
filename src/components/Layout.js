import React from 'react';
import styled from 'styled-components';
import { Link, navigate } from 'gatsby';
import '../global.css';

import PopOpenMenu from './PopOpenMenu';
import ToastAlert from '../components/ToastAlert';

const Layout = ({ children, backgroundColor='##FEDBA1' }) => {
  return (
  <Wrapper>
      <ToastAlert />
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
          <HamburgerContainer>
            <HamburgerBar/>
            <HamburgerBar/>
            <HamburgerBar/>
          </HamburgerContainer>
      </NavBar>
      <PopOpenMenu/>
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
  display: flex;
  align-items: center;
  justify-content: space-around;
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


