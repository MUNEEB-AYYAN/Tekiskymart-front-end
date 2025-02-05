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
];

const ProductCard = ({ product }) => {
  return (
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
  );
};

const ProductGrid = () => {
  return (
    <div className="p-5">
      <h2 className="text-xl font-bold text-center mb-5">GIFT ITEMS</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
