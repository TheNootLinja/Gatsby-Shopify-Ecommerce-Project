import React from 'react';
import styled from 'styled-components';

const Button = ({clickFunc, textColor='white', buttonColor='#FEDBA1', buttonText='TextHere', linkTo="/", marginAuto=true}) => {
  return (
    <StyledButton 
    textColor={textColor} 
    buttonColor={buttonColor}
    onClick={clickFunc}
    >
      {buttonText}
    </StyledButton>
  )
}

export default Button

const StyledButton = styled.button`
  background: ${(props) => props.buttonColor};
  cursor: pointer;
  color: ${(props) => props.textColor};
  width: 200px;
  height: 40px;
  font-size: 1.10rem;
  font-weight: 600;
  border: none;
  border-radius: 2px;
  box-shadow: 3px 2px 5px rgba(125, 125, 125, .125), inset 0px 2px 4px rgba(0,0,0,.11);
  @media (max-width: 768px) {
    width: 100px;
  }
`;