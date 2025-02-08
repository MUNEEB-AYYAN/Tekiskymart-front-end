import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className=" bg-gray-900 mt-2 text-white py-10">
        <div className="container mx-auto px-6">
        <div className="flex justify-around">
            <div>
                <h3 className="text-lg font-semibold border-b-1 border-blue-900 pb-2">POPULAR</h3>
                <ul className="mt-3 space-y-2">
                    <li><a href="#" className="hover:text-blue-400">Sell With Us</a></li>
                    <li><a href="#" className="hover:text-blue-400">Pre-Order</a></li>
                    <li><a href="#" className="hover:text-blue-400">Customer Support</a></li>
                </ul>
            </div>

            
            <div>
                <h3 className="text-lg font-semibold border-b-1 border-blue-900 pb-2">OUR COMMITMENT</h3>
                <ul className="mt-3 space-y-2">
                    <li>Delivery Within 24 Hours</li>
                    <li>Returns Without Questions</li>
                    <li>Quality Product At Best Price</li>
                    <li>Low Price Compare To Your Retail Outlet</li>
                </ul>
            </div>

            
            <div>
                <h3 className="text-lg font-semibold border-b-1 border-blue-900 pb-2">SERVICES</h3>
                <ul className="mt-3 space-y-2">
                    <li>Corporate Training</li>
                    <li>Corporate Trainers</li>
                    <li>IT Consultancy</li>
                    <li>Software Development</li>
                    <li>IT Services</li>
                    <li>Website Development</li>
                </ul>
            </div>

            
            <div>
                <h3 className="text-lg font-semibold border-b-1 border-blue-900 pb-2">CONTACT</h3>
                <p className="mt-3">
                    2nd Floor, Opposite WaterTank, <br />
                    WorkShop Corner, Nanded, <br />
                    Maharashtra 431605 INDIA
                </p>
                <p className="mt-2">+91 8625817334, +91 9890796149</p>
                <p className="mt-2">Sales@Tekisky.Com</p>
                <Link to='login' >Login</Link>
                {/* className="mt-2 block hover:underline">Login */}
            </div>
        </div>

        
        <div className="text-center mt-10 border-t border-gray-700 pt-4">
            <p>Copyright © Tekisky Pvt Ltd All Rights Reserved.</p>
            <p>+91 7387737731, +91 8625817334</p>
            <p>Sales@Tekisky.Com</p>
        </div>

        
        <div className="fixed bottom-5 right-5 flex flex-col space-y-3">
            
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="bg-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-600 transition"
            >
                Up arrow
            </button>
            
            <button className="bg-blue-700 p-3 rounded-full shadow-lg hover:bg-blue-700 transition">
                msg
            </button>
        </div>
        </div>
  </footer>
  )
}

export default Footer

