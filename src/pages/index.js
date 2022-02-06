import React from 'react';
import {homePage, homePageBackground} from './index.module.css'
import Layout from '../components/Layout/Layout';
import PastasImg from '../images/pastas.jpg'

const IndexPage = () => {
  return(
    <Layout>
      <img src={PastasImg} className={homePageBackground} />
      <div className={homePage}>
        <p>Still Here!</p>
      </div>
    </Layout>
  )
};

export default IndexPage;
