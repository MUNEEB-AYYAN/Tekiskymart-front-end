
import React from "react";

const products = [
  {
    id: 1,
    name: "Jewelry Box MOON CRAFT Wooden Jewelry Box Organizer - Classical Wood Jewlery Box",
    price: 250,
    oldPrice: 360,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707589308200_1.jpg",
  },
  {
    id: 2,
    name: "Jewelry Box 3 Case Pick End Now Wooden 3 Drawers jewellery Box.",
    price: 285,
    oldPrice: 600,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707590597569_2.jpg",
  },
  {
    id: 3,
    name: "Money Bank CraftsX2Z Wooden Piggy Bank Wooden Money Bo.",
    price: 215,
    oldPrice: 399,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707590698332_1.jpg",
  },
  {
    id: 4,
    name: "Show Peace TrackterHandcraft",
    price: 210,
    oldPrice: 390,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707590810204_1.jpg",
  },
  {
    id: 4,
    name: "Wood Top Handmade Pure Wood Brass Cannon Top.",
    price: 299,
    oldPrice: 500,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707591044637_1.jpg",
  },
  {
    id: 5,
    name: "Masala Box 2 cup Wooden Spice Box with Antique Lock Table Top Masala Dabba 2 Section.",
    price: 400,
    oldPrice: 500,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707591188099_2.jpg",
  },
  {
    id: 6,
    name: "Jar Multipurpose Jar & Container | For Sugar, Tea, Salt, Pickle, Pulses.",
    price: 249,
    oldPrice: 320,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707591744882_2.jpg",
  },
  {
    id: 7,
    name: "Ecopretier Hand MassagerWooden Acupressure Karela Hand & Foot Roller Massager.",
    price: 120,
    oldPrice: 320,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707591849039_1.jpg",
  },
  {
    id: 8,
    name: "Ecopretier Massager Strick RollAcupressure Roller Massager Brown Pointed",
    price: 200,
    oldPrice: 400,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707592124029_1.jpg",
  },
  {
    id: 9,
    name: "Ecopretier Massager Roller Acupressure Wooden Massager For Pain Relief.",
    price: 200,
    oldPrice: 400,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707592515874_1.jpg",
  }
  
  
];


const ProductCard = ({ product }) => {
  return (
  <div>

    <div className="bg-white shadow-md rounded-lg p-3 w-medium sm:w-60">
      <img
        src={product.image}
        alt={product.name}
        className="w-45 h-50 object-cover rounded-md"
        />
        
      <h3 className="text-sm font-semibold mt-2 truncate">{product.name}</h3>
      <div className="flex items-center gap-2 mt-1">
        <span className="text-red-600 font-bold">₹{product.price}</span>
        <span className="line-through text-gray-400 text-sm">₹{product.oldPrice}</span>
      </div>
    </div>
    </div>
  );
};

const ProductGrid = () => {
  return (
    <>
     <div className="border border-gray-300 bg-gray-100 py-4 flex justify-between items-center text-blue-700 font-bold px-6">
      <span className="text-lg">उपहार सामान</span>
      <span className="text-lg">GIFT-ITEMS</span>
      <span className="text-lg">تحف أشياء</span>
    </div>
    <div className="p-5">
      <div className="flex flex-wrap justify-center gap-4 ml-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    </>
  );
};

export default ProductGrid;
