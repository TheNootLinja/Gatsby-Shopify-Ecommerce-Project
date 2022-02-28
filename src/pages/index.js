import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import PopularItems from '../components/PopularItems';
import LinkButton from '../components/LinkButton';
import PastasImg from '../images/pastas.jpg'

const IndexPage = ({data}) => {
  const shopifyData = data?.allShopifyProduct?.edges;
  return(
    <Layout>
      <HomeContainer>
        <HeaderContainer>
          <PageHeader>Send Noods?</PageHeader>
          <PageSubHeader>That's what we do!</PageSubHeader>
          <PageBlurbHeader>From Alfabeto to Ziti, we are your one stop shop for all of your pasta needs.</PageBlurbHeader>
          <LinkButton buttonText='Shop Now' textColor='#000' linkTo='/products'/>
        </HeaderContainer>
        <ContentContainer>
          <PopularItems shopifyData={shopifyData}/>
        </ContentContainer>

      </HomeContainer>
    </Layout>
  )
};

export default IndexPage;

export const query = graphql`
  query {
    allShopifyProduct(limit:3) {
      edges {
        node {
          id
          title
          handle
          variants {
            shopifyId
          }
          priceRangeV2 {
            maxVariantPrice {
              amount
            }
          }
          description
          images {
            src
          }
        }
      }
    }
  }
`;

const HomeContainer = styled.div``;

const BackgroundImage = styled.img``;

const HeaderContainer = styled.div`
  width: 92%;
  margin: 25vh auto 25vh auto;
  margin-top: 25vh;
  text-align: center;
`;

const ContentContainer = styled.div``;

const PageHeader = styled.h1`
  text-align: center;
  font-size: 60px;
  margin-bottom: 5px;
  color: white;
`;

const PageSubHeader = styled.h2`
  margin-top: 5px;
  margin-bottom: 21px;
  text-align: center;
  font-size: 31px;
  color: white;
`;

const PageBlurbHeader = styled.p`
  font-size: 25px;
  text-align: center;
  color: white;
  margin-bottom: 67px;
`;