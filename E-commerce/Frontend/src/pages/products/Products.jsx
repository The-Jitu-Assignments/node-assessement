import { useState, useEffect, useCallback } from 'react';
import Modal from '../../components/modal/Modal';
import './products.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, updateProduct } from '../../features/products/productSlice';
import ProductCard from '../../components/cards/productCard/ProductCard';
import { fetchItems } from '../../features/cart/cartSlice';

const Products = () => {
  const { products, productStatus } = useSelector(state => state.product);
  const { cart } = useSelector(state => state.cart);
  console.log('cart', cart);
  const [open, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleAddToCart = useCallback((product) => {
    const { id, productInCart, ...payload } = product;
    dispatch(updateProduct({ id, values: { ...payload, productInCart: 1 }}))
  }, [productStatus]);

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchItems());
  }, [handleAddToCart]);

  return (
    <div className='products--page'>
      <div className='products--page__header'>
        <button className='add--product__btn' onClick={() => setIsOpen(!open)}>
          Add Product
        </button>
        <Modal open={open} onClose={() => setIsOpen(false)} />
      </div>
      <div className='products--page__body'>
        {products.length ? 
        (
          <>
          {products?.map((data) => (
            <ProductCard key={data.id} data={data} addToCart={handleAddToCart} />
          ))}
          </>
        )  : (<div>We currently do not have any products</div>)
        }
      </div>
    </div>
  )
}

export default Products;