import React from 'react';
import { Link } from 'gatsby';
import {  addButton, wrapper, textWrapper, image, title, price } from './ProductCard.module.css';
import useStore from '../../context/StoreContext';
import useUI from '../../context/UIContext';

const ProductCard = ({ product }) => {
  const productLink = "/products/" + product.node.handle;
  const { addVariantToCart } = useStore();
  const { handleToastShow } = useUI();
  return(
    <div className={wrapper}>
        <button 
        className={`${addButton}`}
        onClick={() => {
          addVariantToCart(product.node, 1);
          handleToastShow();
          }
        }
        >
          +
        </button>
        <Link to={productLink}>
            <img src={product.node.images[0].src} alt="" className={image} />
            <div className={textWrapper}>
              <p className={title}>{product.node.title}</p>
              <p className={price}>{product.node.priceRangeV2.maxVariantPrice.amount}</p>
            </div>
        </Link>
    </div>
  )
}

export default ProductCard;