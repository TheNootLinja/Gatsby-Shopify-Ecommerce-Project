import React from 'react';
import {homePage, homePageBackground, mainContentContainer, sendNoods, sendNoodsUnder, mainText} from './index.module.css'
import Layout from '../components/Layout/Layout';
import PastasImg from '../images/pastas.jpg'

const IndexPage = () => {
  return(
    <Layout>
      <div className={homePage}>
        <div className={mainContentContainer}>
          <h1 className={sendNoods}>Send Noods?</h1>
          <h2 className={sendNoodsUnder}>That's what we do!</h2>
          <p className={mainText}>From Alfabeto to Ziti, we are your one stop shop for all of your pasta needs. We even carry specialy ramen cups that we really think you’ll love!</p>
        </div>
      </div>
    </Layout>
  )
};

export default IndexPage;
