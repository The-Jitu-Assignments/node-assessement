import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createProduct, fetchProducts } from '../../features/products/productSlice';
import './forms.css';

const AddProductForm = ({ onClose }) => {
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
    name: '',
    imageUrl: '',
    description: '',
    price: '',
    discountRate: ''
  })

  const handleChange = (e) => {
    setNewProduct((newProduct) => ({
      ...newProduct,
      [e.target.name]: e.target.value
    }))
  }

  const { name, imageUrl, description, price, discountRate } = newProduct

  const handleSubmit = () => {
    dispatch(createProduct({ name, imageUrl, description, price, discountRate, count: 1 }));
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
          name='name' 
          value={newProduct.name} 
          onChange={handleChange} 
        />
      </div>
      <div className='product--form__item'>
        <label>Image</label>
        <input 
          type="text" 
          placeholder='enter an image url' 
          name='imageUrl'
          value={newProduct.imageUrl}
          onChange={handleChange}
        />
      </div>
      <div className='product--form__item'>
        <label htmlFor="">Description</label>
        <textarea 
          type="text"  
          placeholder='enter a short description for the product' 
          name='description'
          value={newProduct.description}
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