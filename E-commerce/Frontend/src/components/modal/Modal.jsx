import React from 'react';
import AddProductForm from '../forms/AddProductForm';
import './modal.css';

const Modal = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className='overlay' onClick={onClose}>
      <div className='modal--container' onClick={(e) => e.stopPropagation()}>
        <div className='modal--header'>
          <h2>Create new product</h2>
          <div className="closeBtn" onClick={onClose}>X</div>
        </div>
        <div className="modal--body">
          <AddProductForm onClose={onClose} />
        </div>
      </div>
    </div>
  )
}

export default Modal