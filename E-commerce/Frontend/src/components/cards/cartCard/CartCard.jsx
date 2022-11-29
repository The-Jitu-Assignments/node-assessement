import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { AiOutlineDelete } from 'react-icons/ai';
import { decreaseItemQuantity, fetchItems } from '../../../features/cart/cartSlice';
import { fetchProducts, updateProduct } from '../../../features/products/productSlice';

const CartCard = ({ cart, removeItemFromCart, increaseItemQuantity }) => {
  const dispatch = useDispatch();

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
            <img src={item.imgUrl} alt="cart-item" />
          </div>
          <div className='cart--card__details'>
            <div>
              {item.productName}
            </div>
            <div className='cart--item__count'>
              Quantity: {item.quantity}
            </div>
            <div>
              Ksh. {item.price * item.quantity}
            </div>
          </div>
          <div className='cart--card__icons'>
            <button className='cart--card__btn' onClick={() => increaseItemQuantity(item)}>
              <BiUpArrow />
            </button>
            <button className='cart--card__btn' onClick={() => removeItemFromCart(item)}>
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