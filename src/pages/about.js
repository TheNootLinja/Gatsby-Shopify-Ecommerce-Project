import React from 'react';
import styled from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/Layout';

const about = () => {
  return (
    <Layout>
      <AboutContainer>
        <h1>About our Noods!</h1>
        <figure>
          <StaticImage src='../images/StockMan.jpeg'/>
          <figcaption>CEO Jeff Jameson</figcaption>
        </figure>
        <div>
        <h2>Why we started</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
           Facilis sunt sed minima eaque ea possimus, maxime velit. 
           Mollitia commodi eos exercitationem fuga nobis sit consequuntur 
           dolorem pariatur molestias quo, vitae, officiis tenetur fugiat
            non error aliquid maiores. Magnam a rerum amet quasi aut illum 
            ut excepturi, qui delectus nemo, sit molestias ipsam in. Dignissimos 
            nam explicabo dolores sapiente officiis! Sit accusamus beatae voluptatum 
            consequuntur dolore magni earum eligendi incidunt mollitia assumenda alias 
        </p>
        </div>
        <div>
          <h2>Where are we going</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis sunt sed minima eaque ea possimus, maxime velit. 
            Mollitia commodi eos exercitationem fuga nobis sit consequuntur 
            dolorem pariatur molestias quo, vitae, officiis tenetur fugiat
              non error aliquid maiores. Magnam a rerum amet quasi aut illum 
              ut excepturi, qui delectus nemo, sit molestias ipsam in. Dignissimos 
              nam explicabo dolores sapiente officiis! Sit accusamus beatae voluptatum 
              consequuntur dolore magni earum eligendi incidunt mollitia assumenda alias 
          </p>
        </div>
        <div>
          <h2>How we plan to get there</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Facilis sunt sed minima eaque ea possimus, maxime velit. 
            Mollitia commodi eos exercitationem fuga nobis sit consequuntur 
            dolorem pariatur molestias quo, vitae, officiis tenetur fugiat
              non error aliquid maiores. Magnam a rerum amet quasi aut illum 
              ut excepturi, qui delectus nemo, sit molestias ipsam in. Dignissimos 
              nam explicabo dolores sapiente officiis! Sit accusamus beatae voluptatum 
              consequuntur dolore magni earum eligendi incidunt mollitia assumenda alias 
          </p>
        </div>
      </AboutContainer>
    </Layout>
  )
};

export default about;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 95%;
  /* height: 80vh; */
  margin: 45px auto 0 auto;
  * > h2 {
    margin-bottom: 0;
    padding-left: 10px;
  }
`;