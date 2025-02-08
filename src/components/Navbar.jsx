import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between  w-[99vw] bg-blue-700 font-normal py-4 text-white'>
        <Link className=' hover:border-b-2 ' to='/'>HOME</Link>
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