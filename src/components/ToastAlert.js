import React from 'react';
import styled from "styled-components";
import useUI from '../context/UIContext';

const ToastAlert = () => {
  const { toastShow } = useUI();
  return (
    <ToastAlertContainer show={toastShow}>Item Added To Cart!</ToastAlertContainer>
  )
}

export default ToastAlert;

const ToastAlertContainer = styled.div`
  font-family: sans-serif;
  font-weight: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 300px;
  background: #f4f5ab;
  position: fixed;
  top: 20vh;
  z-index: 1;
  right: ${(props) => props.show ? '0px' : '-300px'};
  transition: all 1s;
  border-radius: 10px 0 0 10px;
  box-shadow: -10px 5px 10px #ccc, -3px 3px 3px #ccc;
  opacity: ${(props) => props.show ? '100%' : '0'};
`;