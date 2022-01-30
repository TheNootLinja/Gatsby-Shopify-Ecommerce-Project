import React from 'react';
import { Link } from 'gatsby';
import { contentWrapper } from './Layout.module.css';

const Layout = ({ children }) => {
  return (
  <div className="wrapper">
      <nav>
          <ul>
            <li>
              <Link to="/">
                Noods Home
              </Link>
            </li>
            <li>
              <Link to="/products">
                The Noods
              </Link>
            </li>
            <li>
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
