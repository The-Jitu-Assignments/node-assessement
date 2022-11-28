import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className='homepage'>
      <div className='homepage--intro'>
        Introducing
      </div>
      <div className='homepage--title'>
        Bluck
      </div>
      <div className='homepage--intro'>
        A Simple E-commerce App built with React, Redux and Firebase
      </div>
      <div className='homepage--btn' onClick={() => navigate('/products')}>
        Get Started
      </div>
    </div>
  )
}

export default Homepage;