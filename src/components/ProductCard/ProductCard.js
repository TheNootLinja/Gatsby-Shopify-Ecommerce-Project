import React from 'react';
import {  addButton, wrapper, contentWrapper, textWrapper, image, title, price } from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  console.log(product.node.title);
  console.log(product.node.priceRangeV2.maxVariantPrice.amount);
  return(
    <div className={wrapper}>
        <div className={addButton} onClick={() => alert('ADDED TO CART!')}><p>+</p></div>
        <div className={contentWrapper}>
            <img src={product.node.images[0].src} alt="" className={image} />
            <div className={textWrapper}>
              <p className={title}>{product.node.title}</p>
              <p className={price}>{product.node.priceRangeV2.maxVariantPrice.amount}</p>
            </div>
        </div>
    </div>
  )
}

export default ProductCard;