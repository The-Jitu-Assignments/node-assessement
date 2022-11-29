import React from 'react';
import { useSelector } from 'react-redux';
import '../cards.css';

const ProductCard = ({ data, addToCart }) => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <div className='product--card'>
      <div className='product--card__top'>
        <img src={data.imgUrl} alt="product--img" />
      </div>
      <div className='product--card__bottom'>
        <div className='product--card__header'>
          <div className='product--name'>{data.productName}</div>
          <div>Ksh.{data.price}</div>
        </div>
        <div className='product--description'>
          {data.productDescription}
        </div>
        <div className='product--card__header'>
          <div className='product--rate'>
            {data.discountRate}%
          </div>
          <button className='product--cart' onClick={() => addToCart(data)} disabled={cart.some(cartItem => cartItem.id === data.id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard