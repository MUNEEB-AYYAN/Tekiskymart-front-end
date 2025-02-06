import React, { useState } from 'react'
import './App.css'
import './index.css'
import Home from './components/Home'
import Carousel from './components/carousel'
import Carousel2 from './components/Carousel2'
import ProductCard from './components/ProductCard'
import Gift from './components/Gift'
import NavPage from './pages/NavPage'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './components/Login'



function App() {
  return (
    <>
    <div>
        <Header></Header>
        <NavPage></NavPage>
        <Footer /> 
      </div>

      <div >
        <Login />

      </div>
    </>
  )
}

export default App
