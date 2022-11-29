import { useState, useEffect } from 'react';
import Modal from '../../components/modal/Modal';
import './products.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../../features/products/productSlice';
import { addToCart } from '../../features/cart/cartSlice';
import ProductCard from '../../components/cards/productCard/ProductCard';

const Products = () => {
  const { products } = useSelector(state => state.product);
  const { cart } = useSelector(state => state.cart);
  console.log('cart', cart);
  const [open, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts())
  }, []);

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
            <ProductCard key={data.id} data={data} />
          ))}
          </>
        )  : (<div>We currently do not have any products</div>)
        }
      </div>
    </div>
  )
}

export default Products;