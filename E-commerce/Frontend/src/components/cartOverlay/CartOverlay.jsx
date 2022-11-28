import React from 'react';
import CartCard from '../cards/cartCard/CartCard';
import './cart.css';
import { useSelector } from 'react-redux';

const CartOverlay = ({ open, onClose }) => {
  const { cart } = useSelector(state => state.cart);
  if (!open) return;

  const totalProducts = cart.reduce((total, item) => total + item.price * item.count, 0);


  return (
    <div className='overlay' onClick={onClose}>
      <div className='cart--body' onClick={(e) => e.stopPropagation()}>
        <div className='cart--header'>
          <h2>Your Items</h2>
          <div onClick={onClose} className='closeBtn'>x</div>
        </div>
        <div className='cart--item__container'>
          <CartCard />
        </div>
        <div className='cart--footer'>
          Your Total Price is : Ksh. {totalProducts}
        </div>
      </div>
    </div>
  )
}

export default CartOverlay