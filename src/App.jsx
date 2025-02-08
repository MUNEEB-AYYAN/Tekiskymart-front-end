import React from 'react'
import './App.css'
import './index.css'

import NavPage from './pages/NavPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'   
import { useLocation } from 'react-router-dom'
import SupportChat from './components/SupportChat'

function App() {

  const location = useLocation();
  return (

    <>
    {
      location.pathname !== "/login" ?
      <div className='overflow-x-hidden'>
        <Header />
        <NavPage />
        <Footer /> 
        <SupportChat /> 
      </div>  
    :
      <Login />
     }
    


    </>
  )
} 

export default App