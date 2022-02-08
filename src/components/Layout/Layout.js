import React from 'react';
import { Link } from 'gatsby';
import { siteTitle, wrapper, contentWrapper, linkItem, navLinks, navBar } from './Layout.module.css';
import '../../global.css'

const Layout = ({ children }) => {
  return (
  <div className={wrapper}>
      <nav className={navBar}>
      <header className={siteTitle}>Send Noods</header>
          <ul className={navLinks}>
            <li className={linkItem}>
              <Link to="/">
                Noods Home
              </Link>
            </li>
            <li className={linkItem}>
              <Link to="/products">
                The Noods
              </Link>
            </li>
            <li className={linkItem}>
              <Link to="/about">
                About Noods
              </Link>
            </li>
          </ul>
      </nav>
      <div className={contentWrapper}>
        {children}
      </div>
  </div>
  )
};

export default Layout;
