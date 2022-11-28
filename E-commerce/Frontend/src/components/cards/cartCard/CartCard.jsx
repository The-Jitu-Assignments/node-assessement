import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
// import { decreaseItemQuantity } from '../../../features/products/productSlice';
import { removeItemFromCart, increaseItemQuantity, decreaseItemQuantity } from '../../../features/cart/cartSlice';

const CartCard = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  console.log(cart);

  const handleRemove = (data) => {
    dispatch(decreaseItemQuantity({ id: data.cartId, value: {
      cartId: data.cartId,
      id: data.id,
      name: data.name,
      image: data.image,
      price: data.price,
      count: data.count - 1
    }}))
  }

  const cartItem = useMemo(() => (
    <>
      {cart.map((item) => (
        <div key={item.id} className='cart--card'>
          <div className='cart--card__img'>
            <img src={item.image} alt="cart-item" />
          </div>
          <div className='cart--card__details'>
            <div>
              {item.name}
            </div>
            <div className='cart--item__count'>
              Quantity: {item.count}
            </div>
            <div>
              Ksh. {item.price * item.count}
            </div>
          </div>
          <div className='cart--card__icons'>
            <button className='cart--card__btn' onClick={() => dispatch(increaseItemQuantity({id: item.cartId, value: {
              cartId: item.cartId,
              id: item.id,
              name: item.name,
              image: item.image,
              price: item.price,
              count: item.count + 1,
            }}))}>
              <BiUpArrow />
            </button>
            <button className='cart--card__btn' onClick={() => dispatch(removeItemFromCart(item.cartId))}>
              <AiOutlineDelete />
            </button>
            <button className='cart--card__btn' onClick={() => handleRemove(item)} disabled={item.count === 1}>
              <BiDownArrow />
            </button>
          </div>
        </div>
      ))}
    </>
  ), [cart]);

  return (
    <>
      {cart.length ? cartItem : 'Your cart is empty'}
    </>
  )
}

export default CartCard