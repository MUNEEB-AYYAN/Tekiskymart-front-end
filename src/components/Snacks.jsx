import React from "react";

const products = [
  {
    name: "Kalonji Papdi...",
    price: "₹1200",
    oldPrice: "₹1450",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1708499371149_WhatsApp%20Image%202024-02-05%20at%2000.27.50_0de9a16d.jpg"
  }
];

const Snacks=()=> {
  return (
    <div className="p-4">
      {/* Category Header */}
      <div className="flex justify-between bg-gray-200 items-center border-b p-2 mb-4">
        <h2 className="text-xl font-bold">घरगुती चवींचे</h2>
        <h2 className="text-xl font-bold">HOMEMADE SNACKS</h2>
        <h2 className="text-xl font-bold">گھریلو سنیکس</h2>
      </div>
      
      {/* Product Grid */}
      <div className="flex gap-4">
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


export default Snacks