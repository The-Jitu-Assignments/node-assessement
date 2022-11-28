import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, fetchProducts } from '../../features/products/productSlice';
import './forms.css';

const AddProductForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    productName: '',
    imgUrl: '',
    productDescription: '',
    price: '',
    discountRate: ''
  })

  const handleChange = (e) => {
    setNewProduct((newProduct) => ({
      ...newProduct,
      [e.target.name]: e.target.value
    }))
  }

  const { productName, imgUrl, productDescription, price, discountRate } = newProduct

  const handleSubmit = () => {
    dispatch(createProduct({ productName, imgUrl, productDescription, price, discountRate }));
    onClose();
    dispatch(fetchProducts());
  }
  return (
    <div className='add--product__form'>
      <div className='product--form__item'>
        <label>Name</label>
        <input 
          type="text" 
          placeholder="enter product name" 
          name='productName' 
          value={newProduct.productName} 
          onChange={handleChange} 
        />
      </div>
      <div className='product--form__item'>
        <label>Image</label>
        <input 
          type="text" 
          placeholder='enter an image url' 
          name='imgUrl'
          value={newProduct.imgUrl}
          onChange={handleChange}
        />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">Description</label>
        <textarea 
          type="text"  
          placeholder='enter a short description for the product' 
          name='productDescription'
          value={newProduct.productDescription}
          onChange={handleChange}
        />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">
          Price
        </label>
        <input 
          type="number" 
          placeholder='enter product price'
          name='price'
          value={newProduct.price}
          onChange={handleChange}
        />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">
          Discount Rate
        </label>
        <input 
          type="number" 
          placeholder='enter the discount rate' 
          name='discountRate'
          value={newProduct.discountRate}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className='product--submit__btn' onClick={handleSubmit} >
        Submit
      </button>
    </div>
  )
}

export default AddProductForm