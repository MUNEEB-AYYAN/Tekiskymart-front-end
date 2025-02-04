import React from 'react'
import './App.css'
import './index.css'
import Home from './components/Home'
import Carousel from './components/carousel'
import Carousel2 from './components/Carousel2'



function App() {
  return (
    <div>
      {/* <h1 className='bg-red-600 text-white text-3xl'>Hello</h1> */}
      <Home></Home>
      <br></br>
      <Carousel></Carousel>
      <br></br>
      <Carousel2></Carousel2>
      
      
    </div>
  )
}

export default App