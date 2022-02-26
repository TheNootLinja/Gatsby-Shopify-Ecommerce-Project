import React from 'react';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';
import PastasImg from '../images/pastas.jpg'

const IndexPage = () => {
  return(
    <Layout>
      <HomeContainer>
        <HeaderContainer>
          <PageHeader>Send Noods?</PageHeader>
          <PageSubHeader>That's what we do!</PageSubHeader>
          <PageBlurbHeader>From Alfabeto to Ziti, we are your one stop shop for all of your pasta needs. We even carry specialy ramen cups that we really think you’ll love!</PageBlurbHeader>
        </HeaderContainer>
      </HomeContainer>
    </Layout>
  )
};

export default IndexPage;

const HomeContainer = styled.div`
  background: red;
`;

const HeaderContainer = styled.div`
  width: 92%;
  margin-top: 25vh;
`;

const PageHeader = styled.h1`
  text-align: center;
  font-size: 60px;
  margin-bottom: 0;
`;

const PageSubHeader = styled.h2`
  margin-top: 5px;
  margin-bottom: 92px;
  text-align: center;
  font-size: 31px;
`;

const PageBlurbHeader = styled.p`
  font-size: 25px;
`;