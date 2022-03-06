import React from 'react';
import styled from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/Layout';
import PopularItems from '../components/PopularItems';
import LinkButton from '../components/LinkButton';
import { StaticImage } from 'gatsby-plugin-image';
import HeroSection from '../components/HeroSection';

const IndexPage = ({data}) => {
  const shopifyData = data?.allShopifyProduct?.edges;
  return(
    <Layout>
      <HomeContainer>
        <HeroSection />
        <ContentContainer>
          <PopularItems shopifyData={shopifyData}/>
          <PastaInfo>
            <InfoTitle>Many kinds of noods... All tasteful of course!</InfoTitle>
            <PastaInfoItem>
              <ImageContainer>
                <StaticImage alt="" src="../images/EggNoodles.jpeg"/>
              </ImageContainer>
              <div>
                <h3>Egg Noodles</h3>
                <PastaInfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque sit amet diam efficitur, molestie magna a, mollis 
                  nunc. Nullam suscipit venenatis orci, nec tempus massa 
                  aliquet non. Donec sed mi nulla. Proin in ex ut nisi 
                  fringilla tincidunt nec non lacus. Curabitur consectetur 
                  posuere nulla id maximus.</PastaInfoText>
                <ShopNow><Link to='/products'>SHOP NOW</Link></ShopNow>
              </div>
            </PastaInfoItem>
            <PastaInfoItem>
              <div>
                <h3>Whole Wheat</h3>
                <PastaInfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque sit amet diam efficitur, molestie magna a, mollis 
                  nunc. Nullam suscipit venenatis orci, nec tempus massa 
                  aliquet non. Donec sed mi nulla. Proin in ex ut nisi 
                  fringilla tincidunt nec non lacus. Curabitur consectetur 
                  posuere nulla id maximus.</PastaInfoText>
                <ShopNow><Link to='/products'>SHOP NOW</Link></ShopNow>
              </div>
              <ImageContainer>
                <StaticImage alt="" src="../images/WholeWheatNoodles.jpeg" height={200} width={200}/>
              </ImageContainer>
            </PastaInfoItem>
            <PastaInfoItem>
              <ImageContainer>
                <StaticImage alt="" src="../images/Ravioli.jpeg" width={200} height={200}/>
              </ImageContainer>
              <div>
                <h3>Ravioli</h3>
                <PastaInfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque sit amet diam efficitur, molestie magna a, mollis 
                  nunc. Nullam suscipit venenatis orci, nec tempus massa 
                  aliquet non. Donec sed mi nulla. Proin in ex ut nisi 
                  fringilla tincidunt nec non lacus. Curabitur consectetur 
                  posuere nulla id maximus.</PastaInfoText>
                <ShopNow><Link to='/products'>SHOP NOW</Link></ShopNow>
              </div>
            </PastaInfoItem>
            <PastaInfoItem>
              <div>
                <h3>Ramen</h3>
                <PastaInfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque sit amet diam efficitur, molestie magna a, mollis 
                  nunc. Nullam suscipit venenatis orci, nec tempus massa 
                  aliquet non. Donec sed mi nulla. Proin in ex ut nisi 
                  fringilla tincidunt nec non lacus. Curabitur consectetur 
                  posuere nulla id maximus.</PastaInfoText>
                <ShopNow><Link to='/products'>SHOP NOW</Link></ShopNow>
              </div>
              <ImageContainer>
                <StaticImage alt="" src="../images/RamenNoodles.jpeg" height={200} width={200}/>
              </ImageContainer>
            </PastaInfoItem>
            <PastaInfoItem>
            <ImageContainer>
              <StaticImage alt="" src="../images/WholeGrainNoodles.jpeg" height={200} width={200}/>
            </ImageContainer>
              <div>
                <h3>Whole Grain</h3>
                <PastaInfoText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Quisque sit amet diam efficitur, molestie magna a, mollis 
                  nunc. Nullam suscipit venenatis orci, nec tempus massa 
                  aliquet non. Donec sed mi nulla. Proin in ex ut nisi 
                  fringilla tincidunt nec non lacus. Curabitur consectetur 
                  posuere nulla id maximus.</PastaInfoText>
                <ShopNow><Link to='/products'>SHOP NOW</Link></ShopNow>
              </div>
            </PastaInfoItem>
          </PastaInfo>
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

const HomeContainer = styled.div`
  position: relative;
`;

const ContentContainer = styled.div`
  width: 95%;
  margin: auto;
`;

const PastaInfo = styled.div`
  width: fit-content;
  margin: 50px auto 0 auto;
`;

const ImageContainer = styled.div`
  border-radius: 10px;
  width: 20%;
  height: fit-content;
  overflow: hidden;
  min-width: 150px;
  /* @media (max-width: 730px) {
    height: 150px;
    width: 150px;
  } */
`;

const InfoTitle = styled.h2`
    width: fit-content;
    margin: 0 auto 30px auto;
`;

const PastaInfoItem = styled.div`
  margin: auto;
  max-width: 1030px;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const PastaInfoText = styled.p`
  max-width: 500px;
`;

const ShopNow = styled.p`
  border-bottom: 2px solid black;
  width: fit-content;
  & > * {
    text-decoration: none;
    color: black;
  }
`;