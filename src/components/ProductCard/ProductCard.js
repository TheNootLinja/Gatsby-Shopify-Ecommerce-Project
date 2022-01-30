import React from 'react';
import { Link } from 'gatsby';
import {  addButton, wrapper, textWrapper, image, title, price } from './ProductCard.module.css';

const ProductCard = ({ product }) => {
  const productLink = "/" + product.node.handle;
  return(
    <div className={wrapper}>
        <div className={addButton} onClick={() => alert('ADDED TO CART!')}><p>+</p></div>
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