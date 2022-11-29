import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../features/user/UserSlice';

const RegisterPage = () => {
  const { successStatus } = useSelector(state => state.user);
  const [user, setUser] = React.useState({
    userName: '',
    userEmail: '',
    userPassword: ''
  });

  const handleChange = (e) => {
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value 
    }))
  }
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleSubmit = async () => {
    const res = await dispatch(registerUser(user));
    console.log(res);
    if (res.payload.message === 'User created successfully') {
      navigate('/login')
    }
    return;

  };

  // React.useEffect(() => {
  //   if (successStatus) navigate('/');
  // }, [ successStatus ])

  return (
    <div className='login--container'>
      <div className='login--form'>
        <h2>
          Sign up page
        </h2>
        <div className='login--data'>
          <label>Name:</label>
          <input 
            type="text" 
            placeholder='enter a name'
            name='userName'
            value={user.userName}
            onChange={handleChange} 
          />
        </div>
        <div className='login--data'>
          <label>Email:</label>
          <input 
            type="email" 
            placeholder='enter an email' 
            name='userEmail'
            value={user.userEmail}
            onChange={handleChange}
          />
        </div>
        <div className='login--data'>
          <label>Password:</label>
          <input 
            type="password" 
            placeholder='enter your password' 
            name='userPassword'
            value={user.userPassword}
            onChange={handleChange}
          />
        </div>
        <div className='auth--btn__container'>
          <button className='login--btn' onClick={handleSubmit}>
            Register
          </button>
          <span className='auth--link' onClick={() => navigate('/login')}>
            Already have an account
          </span>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage