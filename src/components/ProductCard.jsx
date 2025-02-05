import { div } from "framer-motion/client";
import React from "react";

const products = [
  {
    id: 1,
    name: "Show Peace Rikshaw",
    price: 270,
    oldPrice: 360,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707637277034_1.jpg",
  },
  {
    id: 2,
    name: "Show Peace Golden Cycle",
    price: 370,
    oldPrice: 550,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707637162718_1.jpg",
  },
  {
    id: 3,
    name: "Show Peace Black Cycle",
    price: 249,
    oldPrice: 599,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707636873500_1.jpg",
  },
  {
    id: 4,
    name: "Tea Cup Stand-Wooden Coasters Set of 6 Squares for Dining Table.",
    price: 210,
    oldPrice: 390,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707635962153_1.jpg",
  },
  {
    id: 4,
    name: "Charpai Set of 3-Wooden and Jute Miniature Charpai Cot Set of 3 Toy for Kids.",
    price: 299,
    oldPrice: 500,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707635715171_3.jpg",
  },
  {
    id: 5,
    name: "Jewelry Box 4x4-Wooden Jewelry Box for Women Jewel Organizer Square Elephant Décor, 4 x 4 inches",
    price: 299,
    oldPrice: 500,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707593531859_2.jpg",
  },
  {
    id: 6,
    name: "Agarbatti Dhoop Wooden Incense Holder | Agarbatti Stand | Dhoop Stand.",
    price: 120,
    oldPrice: 320,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707593422006_1.jpg",
  },
  {
    id: 7,
    name: "Agarbatti Case Karigar Creations Sheesham Wooden and Brass Agarbati Holder.",
    price: 120,
    oldPrice: 320,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707593332603_1.jpg",
  },
  {
    id: 8,
    name: "Door Bell Door Bells Ornaments Hanging, Decoration Pendant for",
    price: 200,
    oldPrice: 400,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707593107771_2.jpg",
  },
  {
    id: 9,
    name: "Ecopretier Massager Medium Wooden Handheld Foot Roller Acupressure Massager Reflexology Tools.",
    price: 200,
    oldPrice: 400,
    image: "https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707592966404_2.jpg",
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
    <div className="p-5">
      <h2 className="text-xl font-bold text-center mb-5">GIFT ITEMS</h2>
      <div className="flex flex-wrap justify-center gap-4 ml-4 ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
