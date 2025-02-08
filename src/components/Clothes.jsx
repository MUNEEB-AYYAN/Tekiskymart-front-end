import React from "react";

const products = [
  {
    name: "Beautiful Wor...",
    price: "₹1200",
    oldPrice: "₹1450",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1708188649624_IMG-20240217-WA0001.jpg"
  },
  {
    name: "ZAINAB RAYO...",
    price: "₹1100",
    oldPrice: "₹1498",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1708189489196_IMG-20240217-WA0007.jpg"
  },
  {
    name: "Rk. Pathanii ...",
    price: "₹1550",
    oldPrice: "₹1800",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1708348067609_1000194666.jpg"
  },
  {
    name: "Kurta With Ka...",
    price: "₹1000",
    oldPrice: "₹1200",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1737475763240_kurta1.png"
  }
];

 const Clothes=()=> {
  return (
    <div className="p-4">
      {/* Category Header */}
      <div className="flex justify-between bg-gray-200 items-center border-b p-2 mb-4">
        <h2 className="text-xl font-bold">कपड़े</h2>
        <h2 className="text-xl font-bold">CLOTHES</h2>
        <h2 className="text-xl font-bold">کپڑے</h2>
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
      
      
    </div>
  );
}

export default Clothes