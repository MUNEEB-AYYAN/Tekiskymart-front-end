import { useState } from "react";
import img1 from '../assets/images/img2.png'

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex w-[800px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <div className="flex flex-col justify-center items-center w-1/2 p-8">
          <img
            src={img1} // Replace with actual logo
            alt="Tekisky Mart Logo"
            className="mb-4"
          />
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
          <div className="w-full">
            <label className="block mb-2 text-gray-700">Mobile Number:</label>
            <input
              type="text"
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="w-full mt-4 relative">
            <label className="block mb-2 text-gray-700">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10"
            >
              Show 
            </button>
          </div>
          <button className="mt-6 w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700">
            SIGN IN
          </button>
        </div>

        {/* Right Side - Welcome Message */}
        <div className="w-1/2 bg-gradient-to-r rounded- text-center rounded-bl-[40%] rounded-tl-[40%] from-blue-500 to-blue-700 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-semibold mb-2">Welcome To Tekisky Mart!</h2>
          <p className="text-sm">Admin / Seller Dashboard</p>
        </div>
      </div>
    </div>
  );
}
