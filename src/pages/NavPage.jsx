import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Gift from '../components/Gift'

const NavPage = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='gift' element={<Gift />}/>
            <Route path='gift' element={<Dates />}/>
            <Route path='gift' element={<Perfumes />}/>
            <Route path='gift' element={<Others />}/>
            <Route path='gift' element={<Clothes />}/>
            <Route path='gift' element={<Snacks />}/>
            <Route path='gift' element={<Crockery />}/>
            <Route path='gift' element={<Watches />}/>
            <Route path='gift' element={<Mobiles />}/>
            <Route path='gift' element={<DryFruits />}/>
            <Route path='gift' element={<Preorder />}/>
            <Route path='gift' element={<Sell />}/>
            <Route path='gift' element={<Support />}/>
        </Routes>
    </div>
  )
}

export default NavPage