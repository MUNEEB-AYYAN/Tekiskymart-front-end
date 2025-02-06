import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-around  mb-2 w-[99vw] bg-blue-500 font-semibold p-3 text-white'>
        <Link className=' hover:border-b-2 ml-1' to='/'>HOME</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/gift'>GIFT-ITEMS</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/dates'>DATES</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/perfumes'>PERFUMES</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/others'>OTHERS</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/clothes'>CLOTHES</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/snacks'>HOMEMADE SNACKS</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/crockery'>CROCKERY</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/watches'>WATCHES</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/mobiles'>MOBILES</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/dryfrt'>DRY FRUITS</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/preorder'>PRE-ORDER</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/sell'>SELL WITH US</Link>
        <Link className=' hover:border-b-2 ml-1'  to='/support'>CUSTOMER SUPPORT</Link>
    </div>
  )
}

export default Navbar