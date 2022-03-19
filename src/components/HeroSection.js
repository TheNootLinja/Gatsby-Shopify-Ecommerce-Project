import React from 'react';
import styled from 'styled-components';

import backgroundImage from '../images/PastasBackground.jpg'

import LinkButton from '../components/LinkButton';

const HeroSection = () => {
  return (
    <HeroSectionContainer image = {backgroundImage}>
      <PageHeader>Send Noods?</PageHeader>
      <PageSubHeader>That's what we do!</PageSubHeader>
      <PageBlurbHeader>From Alfabeto to Ziti, we are your one stop shop for all of your pasta needs.</PageBlurbHeader>
      <LinkButton buttonText='Shop Now' textColor='#000' linkTo='/products'/>
    </HeroSectionContainer>
  )
}

export default HeroSection

const HeroSectionContainer = styled.div`
  display:flex;
  z-index: -5;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 92%;
  height: 92vh;
  width: 100vw;
  margin: auto;
  background-image: url(${props => props.image});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: inset 0px 0px 50vw 10px rgba(0,0,0,1);
  @media (max-width: 720px) {
    height: 600px;
  }
`;

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
  font-size: 22px;
  text-align: center;
  color: white;
  margin-bottom: 67px;
  width: 90%;
`;