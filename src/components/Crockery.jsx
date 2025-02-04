import React from 'react'
const products = [
  {
    name: "Dinner Set 10...",
    price: "₹5300",
    oldPrice: "₹6500",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1708690267361_IMG-20240216-WA0049.jpg"
  },
  {
    name: "Dinner Set",
    price: "₹2500",
    oldPrice: "₹3000",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709374881830_2.jpg"
  },
  {
    name: "Dinner Set",
    price: "₹2800",
    oldPrice: "₹3200",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709374989705_2.jpg"
  },
  {
    name: "Dinner Set",
    price: "₹3600",
    oldPrice: "₹4000",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709375154669_2.jpg"
  },
  {
    name: "Dinner Set",
    price: "₹4500",
    oldPrice: "₹5500",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709375339935_3.jpg"
  },
  {
    name: "Dinner Set",
    price: "₹5000",
    oldPrice: "₹6000",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709375471273_2.jpg"
  },
  {
    name: "Dinner Set",
    price: "₹5500",
    oldPrice: "₹6500",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709375581021_3.jpg"
  },
  {
    name: "Lemon Set",
    price: "₹450",
    oldPrice: "₹550",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709375696115_1.jpg"
  }
];

 const Crockery=()=> {
  return (
    <div className="p-4">
      {/* Category Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">क्रॉकरी</h2>
        <h2 className="text-xl font-bold">CROCKERY</h2>
        <h2 className="text-xl font-bold">کراکری</h2>
      </div>
      
      {/* Product Grid */}
      <div className="flex flex-wrap px-2 gap-4">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg w-[15%] overflow-hidden shadow-lg">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
            <div className="p-2">
              <h3 className="text-sm font-semibold truncate">{product.name}</h3>
              <div className="text-red-500 font-bold">{product.price} <span className="text-gray-500 line-through">{product.oldPrice}</span></div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Customer Support Chat */}
      <div className="fixed bottom-4 right-4 bg-white p-4 shadow-lg rounded-lg w-80">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">Customer Support</p>
            <p className="text-xs text-gray-500">34 minutes ago</p>
          </div>
        </div>
        <p className="text-sm mt-2">Welcome to our site, if you need help simply reply to this message, we are online and ready to help.</p>
        <input 
          type="text" 
          placeholder="Type here and press enter..." 
          className="w-full mt-2 p-2 border rounded-lg text-sm" 
        />
      </div>
    </div>
  );
}
export default Crockery