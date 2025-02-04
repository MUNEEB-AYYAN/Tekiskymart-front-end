import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between bg-blue-800 font-semibold text-white p-1'>
        <Link to='/'>HOME</Link>
        <Link to='/gift'>GIFT-ITEMS</Link>
        <Link to='/dates'>DATES</Link>
        <Link to='/perfumes'>PERFUMES</Link>
        <Link to='/others'>OTHERS</Link>
        <Link to='/clothes'>CLOTHES</Link>
        <Link to='/snacks'>HOMEMADE SNACKS</Link>
        <Link to='/crockery'>CROCKERY</Link>
        <Link to='/watches'>WATCHES</Link>
        <Link to='/mobiles'>MOBILES</Link>
        <Link to='/dryfrt'>DRY FRUITS</Link>
        <Link to='/preorder'>PRE-ORDER</Link>
        <Link to='/sell'>SELL WITH US</Link>
        <Link to='/support'>CUSTOMER SUPPORT</Link>
    </div>
  )
}

export default Navbar