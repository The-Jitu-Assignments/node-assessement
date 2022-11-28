import React from 'react'
import { useNavigate } from 'react-router-dom';
import './sidebar.css';
import { BiHomeSmile, BiShoppingBag, BiLogOutCircle } from 'react-icons/bi';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../features/user/UserSlice';
import { SidebarContext } from '../../context/SidebarContext';
import { SiAboutdotme } from 'react-icons/si'
import { MdOutlineContactless } from 'react-icons/md'


const iconData = [
  {
    icon: <BiHomeSmile />,
    name: 'Home',
    path: '/'
  },
  {
    icon: <BiShoppingBag />,
    name: 'Products',
    path: '/products'
  },
  {
    icon: <SiAboutdotme />,
    name: 'About',
    path: '/about'
  },
  {
    icon: <MdOutlineContactless />,
    name: 'Contact Us',
    path: '/contact'
  }
]

const Sidebar = () => {
  const { user } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [sidebarContext, setSidebarContext] = React.useContext(SidebarContext);

  const handleNavigate = (path) => {
    navigate(path)
    setSidebarContext(!sidebarContext)
  }
  return (
    <div className='sidebar'>
      <div className='sidebar--header'>
        <div className='app--title'>
          Bluck
        </div>
        <div className='sidebar--btn' onClick={() => setSidebarContext(!sidebarContext)}>
          X
        </div>
      </div>
      <div className='sidebar--profile'>
        <div className='profile--intro'>
          Welcome Back,
        </div>
        <div>
          {user.name || 'Default user'}
        </div>
        <div className='profile--email'>
          {user.email || 'You do not have any email'}
        </div>
      </div>
      <div className='sidebar--links'>
        <h3>Application</h3>
        <div className='sidebar--links__item'>
          <ul>
            {iconData.map((item, i) => (
              <li key={i} onClick={() => handleNavigate(item.path)}>
                <span className='sidebar--icons'>
                  {item.icon}
                </span>
                <span>
                  {item.name}
                </span>
              </li>
            ))}
            <li onClick={() => dispatch(login(false))}>
              <span className='sidebar--icons'>
                <BiLogOutCircle />
              </span>
              <span>
                Logout
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar