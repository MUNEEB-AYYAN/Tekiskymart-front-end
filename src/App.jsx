import React, { useState } from 'react'
import './App.css'
import './index.css'
import NavPage from './pages/NavPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'

const App = () => {
  // const [showLogin, setShowLogin] = useState(false)
  return (
    <>
    <div className='overflow-x-hidden'>
      
      <div>
        <Header></Header>
        <NavPage></NavPage>
        <Footer /> 
      </div>

      <div >
        <Login />

      </div>


      

    </div>
    </>
  )
}

export default App  