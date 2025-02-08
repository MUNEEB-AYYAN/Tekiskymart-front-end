import { useState } from "react";
import img1 from '../assets/images/img2.png'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Loader_1 from "./Loader_1";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setformData] = useState({
    name:"",
    email:"",
    password:""
});

const [loading, setLoading] = useState(false);
const navigate = useNavigate();

const handleChange = (e)=>{
  setformData({...formData,
    [e.target.name]: e.target.value
  });
}

const handleSubmit= async (e)=>{
  e.preventDefault();
  setLoading(true)

  try {
    await axios.post(`${BaseUrl}/create`, formData);

    setTimeout(()=>{
      navigate("/");
    },1500);

  }catch(e){
    console.log(e);
    setLoading(false);
    
  }
}

  return (
    
    <div className="flex items-center p-4 justify-center min-h-screen bg-gray-100">
      <div className="flex w-[800px] bg-white rounded-2xl shadow-lg overflow-hidden">
        {/* Left Side - Login Form */}
        <form  onSubmit={handleSubmit}
         className="flex flex-col justify-center items-center w-1/2 h-1/2 p-8">
          <img
            src={img1} // Replace with actual logo
            alt="Tekisky Mart Logo"
            className="mb-4"
            
          />
          <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
          <div className="w-full">
            <label className="block mb-2 text-gray-700">Username</label>
            <input
              type="text"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none"
              placeholder="Enter your Name "
              name="name"
              value={formData.name}

            />
          </div>
          <div className="w-full mt-4 relative">
            <label className="block mb-2 text-gray-700">Password:</label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none"
              placeholder="Enter your Password"
              value={formData.password}
              name = "password"
            />
            <button
              type="submit"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10"
            >
              Show 
            </button>
          </div>
          <button className="mt-8 w-1/2 bg-blue-800 text-white p-2 rounded-lg hover:bg-blue-900">
            SIGN IN
          </button>
        </form>

        {/* Right Side - Welcome Message */}
        <div className="w-1/2 bg-gradient-to-r rounded- text-center rounded-bl-[40%] rounded-tl-[40%] from-blue-800 to-blue-900 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-3xl font-semibold mb-2">Welcome To Tekisky Mart!</h2>
          <p className="text-sm">Admin / Seller Dashboard</p>
        </div>
      </div>
    </div>
  );
}
