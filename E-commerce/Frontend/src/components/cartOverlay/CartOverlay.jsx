import React from 'react';
import CartCard from '../cards/cartCard/CartCard';
import './cart.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../features/products/productSlice';
import { fetchItems } from '../../features/cart/cartSlice';

const CartOverlay = ({ open, onClose }) => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  console.log(cart);
  if (!open) return;

  const totalProducts = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  React.useEffect(() => {
    dispatch(fetchItems());
  }, []);

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