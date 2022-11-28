import React from 'react'
import AppRoutes from './AppRoutes'
import './App.css';
import { SidebarContext } from './context/SidebarContext';

const App = () => {
  const [sidebarContext, setSidebarContext] = React.useState(true);
  return (
    <SidebarContext.Provider value={[sidebarContext, setSidebarContext]}>
      <AppRoutes />
    </SidebarContext.Provider>
  )
}

export default App