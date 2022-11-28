import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../features/user/UserSlice';
import './pages.css';

const LoginPage = () => {
  const [user, setUser] = useState({
    name: '',
    email: ''
  });

  const handleChange = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value
    }))
  }

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(login(user))
    navigate('/')
  }

  return (
    <div className='login--container'>
      <div className='login--form'>
        <h2>
          Login Page
        </h2>
        <div className='login--data'>
          <label>Email:</label>
          <input 
            type="text" 
            placeholder='enter your name' 
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className='login--data'>
          <label>Password:</label>
          <input 
            type="email" 
            placeholder='enter your email address' 
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className='auth--btn__container'>
          <button className='login--btn' onClick={handleSubmit}>
            Login
          </button>
          <span className='auth--link' onClick={() => navigate('/register')}>
            I don't have an account yet
          </span>
        </div>
      </div>
    </div>
  )
}

export default LoginPage;