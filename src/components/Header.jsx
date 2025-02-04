import React from 'react'
import x from '../assets/images/cart.png'

const Header = () => {

    // let data = [
    //     {
    //         img1:"https://www.instagram.com/tekiskymart/?hl=en",
    //         img2:""
    //     }
    // ]
  return (
    <>
    <div className='flex justify-between p-2 bg-blue-800 px-16'>
        <div className='flex p-2'>
           <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-instagram-new-square1-128.png"
            className='w-[40px] rounded-full px-[2px]' 
            alt="" />
           <img src="https://img.icons8.com/?size=512&id=118497&format=png" 
           className='w-[40px]'
           alt="" />
           
        </div>
        <p className='text-white font-bold p-2'>Delivery Only in Nanded</p>
    </div>  
    <div className='flex justify-between px-4'>
        <div>
            <img src="https://tekiskymart.com/static/media/TekiskyMartNewLogo-removebg-preview.929802cde3ff522f7030.png"
            className='w-36 ml-8'
            alt="" />
        </div>
        <div>
            <input type="text" 
            className='border-1 w-[450px] mt-12 rounded p-2'
            />
        </div>
        <div className='w-10 mt-12 mr-6'><img src={x} alt="" /></div>
    </div>
    </>
  )
}

export default Header