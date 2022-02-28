import React from 'react';
import styled from 'styled-components';

const Button = ({textColor='white', buttonColor='#FEDBA1', buttonText='TextHere', linkTo="/"}) => {
  return (
    <StyledButton 
    textColor={textColor} 
    buttonColor={buttonColor}
    >
      {buttonText}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background: ${(props) => props.buttonColor};
  color: ${(props) => props.textColor};
  width: 200px;
  height: 40px;
  margin-left: 20px;
  font-size: 1.10rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  box-shadow: 3px 2px 5px rgba(125, 125, 125, .125), inset 0px 0px 10px rgba(0,0,0,.3);
  @media (max-width: 768px) {
    width: 100px;
  }
`;