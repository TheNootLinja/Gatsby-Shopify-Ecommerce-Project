import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import useStore from '../context/StoreContext';
import useUI from '../context/UIContext';

const ProductCard = ({ product, itemWidth = '200px', itemHeight = '300px', addPosition = '20px'}) => {
  const productLink = "/products/" + product.node.handle;
  const { addVariantToCart } = useStore();
  const { handleToastShow } = useUI();
  console.log(itemWidth);
  return(
    <Wrapper itemWidth>
        <AddButton 
        addPosition={addPosition}
        onClick={() => {
          addVariantToCart(product.node, 1);
          handleToastShow();
          }
        }
        >
          +
        </AddButton>
        <Link to={productLink}>
            <Image itemWidth={itemWidth} itemHeight={itemHeight} src={product.node.images[0].src} alt=""/>
            <TextWrapper itemWidth={itemWidth}>
              <Title>{product.node.title}</Title>
              <Price>${product.node.priceRangeV2.maxVariantPrice.amount}</Price>
            </TextWrapper>
        </Link>
    </Wrapper>
  )
}

export default ProductCard;

const Wrapper = styled.div`
  margin: auto;
  display: grid;
  justify-content: center;
  align-items: center;
  width: ${props => props.itemWidth};
  border-radius: 20px;
  gap: 10px;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 10px 40px rgba(52, 53, 99, 0.2),
    0px 1px 3px rgba(0, 0, 0, 0.5);
`;

const AddButton = styled.button`
  position: absolute;
  top: ${props => props.addPosition};
  right: ${props => props.addPosition};
  background-color: #B3694A;
  padding: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  margin: 0;
  border: 3px solid white;
  transition: all .25s;
  &:hover {
    transform: scale(1.3);
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: ${props => props.itemWidth};
  height: ${props => props.itemHeight};
  border-radius: 20px;
  margin: 0px;
`;

const TextWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  left: 0px;
  border-radius: 0 0 20px 20px;
  background: rgba(255, 255, 255, 0.2);
  width:  ${props => props.itemWidth};
  padding: 10px 0;
  backdrop-filter: blur(40px);
`;

const Title = styled.p`
  font-weight: 600;
  text-align: center;
  margin: 0;
  color: #fdff7d;
`;

const Price = styled.p`
  font-weight: normal;
  text-align: center;
  margin: 0;
  color: white;
`;