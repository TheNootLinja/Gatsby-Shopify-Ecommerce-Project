import React from 'react';
import { navigate } from 'gatsby';
import styled from 'styled-components';

const Button = ({textColor='white', buttonColor='#FEDBA1', buttonText='Testing', linkTo="/"}) => {
  return (
    <StyledButton 
    textColor={textColor} 
    buttonColor={buttonColor}
    onClick={()=>{navigate(`${linkTo}`)}}
    role='link'
    >
      {buttonText}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  cursor: pointer;
  background: ${(props) => props.buttonColor};
  color: ${(props) => props.textColor};
  width: 200px;
  height: 40px;
  font-size: 1.10rem;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  /* box-shadow: 3px 2px 5px rgba(125, 125, 125, .125), inset 0px 0px 5px rgba(0,0,0,.3); */
`;