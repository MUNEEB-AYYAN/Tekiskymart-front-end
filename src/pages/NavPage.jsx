import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import Gift from '../components/Gift'
import Dates from '../components/Dates'
import Perfumes from '../components/Perfumes'
import Others from '../components/Others'
import Clothes from '../components/Clothes'
import Snacks from '../components/Snacks'
import Crockery from '../components/Crockery'
import Watches from '../components/Watches'
import Mobiles from '../components/Mobiles'
import Dryfrt from '../components/Dryfrt'
import Preorder from '../components/Preorder'
import Sell from '../components/Sell'
import Support from '../components/Support'
import Navbar from '../components/Navbar'
import Login from '../components/Login'

const NavPage = () => {
  return (
    <div>
        <div>
            <Navbar />
        </div>


        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/gift' element={<Gift />}/>
            <Route path='/dates' element={<Dates />}/>
            <Route path='/perfumes' element={<Perfumes />}/>
            <Route path='/others' element={<Others />}/>
            <Route path='/clothes' element={<Clothes />}/>
            <Route path='/snacks' element={<Snacks />}/>
            <Route path='/crockery' element={<Crockery />}/>
            <Route path='/watches' element={<Watches />}/>
            <Route path='/mobiles' element={<Mobiles />}/>
            <Route path='/dryfrt' element={<Dryfrt />}/>
            <Route path='/preorder' element={<Preorder />}/>
            <Route path='/sell' element={<Sell />}/>
            <Route path='/support' element={<Support />}/>
            <Route path='/login' element={<Login />}/>
        </Routes>
    </div>
  )
}

export default NavPage