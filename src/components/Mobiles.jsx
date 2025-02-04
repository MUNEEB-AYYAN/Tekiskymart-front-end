import React from 'react'

const products = [
  {
    name: "Gripp Back Co...",
    price: "₹169",
    oldPrice: "₹399",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709373882637_StarBucksphonecase2_1200x1200.webp"
  },
  {
    name: "flash pods pr...",
    price: "₹499",
    oldPrice: "₹999",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709374414301_61SMSFNL1aL._SX522_.jpg"
  },
  {
    name: "VMBS Power Sh...",
    price: "₹349",
    oldPrice: "₹699",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709376046545_l-19-all-in-one-quick-charging-with-retrieve-card-pin-data-cable-original-imagrvczzzy6hz6x.webp"
  },
  {
    name: "SuperVOOC Mob...",
    price: "₹499",
    oldPrice: "₹1299",
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1709380524164_33w-vooc-dart-wrap-rt01-with-type-c-cable-charging-adapter-original-imaghgn3yeseqgjj.webp"
  },
];
const Mobiles = () => {
  return (
    <div className="p-4">
      {/* Category Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold">मोबाइल्स</h2>
        <h2 className="text-xl font-bold">MOBILES</h2>
        <h2 className="text-xl font-bold">موبائلز</h2>
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
export default Mobiles