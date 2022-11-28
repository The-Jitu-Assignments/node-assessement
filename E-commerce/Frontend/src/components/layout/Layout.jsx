import React, { useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { SidebarContext } from '../../context/SidebarContext';
import { fetchItems } from '../../features/cart/cartSlice';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import './layout.css';

const Layout = ({ children }) => {
  const dispatch = useDispatch();
  const { user } = useSelector(state => state.user);
  const [ sidebarContext ] = useContext(SidebarContext);
  if (!user) {
    return <Navigate to={"/login"} />
  }

  useEffect(() => {
    dispatch(fetchItems())
  }, []);
  return (
    <div className='layout'>
      {sidebarContext && (
      <div className='layout--left'>
        <Sidebar />
      </div>
      )}
      <div className='layout--right'>
        <div className='layout--right__top'> 
          <Header />
        </div>
        <div className='layout--right__bottom'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
