// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { ChevronLeft, ChevronRight } from "lucide-react";
import m1 from '../assets/images/dates.jpg'
import m2 from '../assets/images/Ajmal musk.webp'
import m3 from '../assets/images/Aqua.jpeg'
import m4 from '../assets/images/cloths.jpg'
import m5 from '../assets/images/heal.jpg'
import m6 from '../assets/images/kurta.png'
import m7 from '../assets/images/perfumes.jpg'
import m8 from '../assets/images/watch.webp'
import m9 from '../assets/images/jwelery.jpg'
// import { img } from "framer-motion/client";



// const Carousel2=()=> {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const prevSlide = () => {
//     setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
//   };

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg shadow-lg flex items-center">
//       {/* <button
//         onClick={prevSlide}
//         className="absolute left-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
//       >
//         <ChevronLeft size={24} />
//       </button> */}
//       <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
//         {cards.map((card, index) => (
//           <motion.div
//             key={index}
//             className="w-full flex-shrink-0 p-4 bg-white shadow-md rounded-lg text-center"
//           >
//             <img src={card.img} alt={card.title} className="w-full h-40 object-contain rounded-md mb-2" />
//             <h3 className="font-bold text-lg">{card.title}</h3>
//             <p className="text-gray-500 line-through">MRP: {card.mrp}</p>
//             <p className="text-red-500 font-bold">Offer Price: {card.price}</p>
//           </motion.div>
//         ))}
//       </div>
//       {/* <button
//         onClick={nextSlide}
//         className="absolute right-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
//       >
//         <ChevronRight size={24} />
//       </button> */}
//       <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
//         {cards.map((_, index) => (
//           <span
//             key={index}
//             className={`w-3 h-3 rounded-full transition-all ${
//               index === currentIndex ? "bg-white" : "bg-gray-400"
//             }`}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// }


// export default Carousel2


import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";


const cards = [
  { title: "Ajmal AQUA Floral", price: "₹400", mrp: "₹600", img: m1 },
  { title: "Kurta With Kali", price: "₹1000", mrp: "₹1200", img: m2 },
  { title: "Sahara Kimia Dates", price: "₹160", mrp: "₹215", img: m3 },
  { title: "Ajmal Musk Rijali", price: "₹500", mrp: "₹550", img: m4 },
  { title: "Ajmal Musk Rijali", price: "₹500", mrp: "₹550", img: m5 },
  { title: "Ajmal Musk Rijali", price: "₹500", mrp: "₹550", img: m6 },
  { title: "Ajmal Musk Rijali", price: "₹500", mrp: "₹550", img: m7 },
  { title: "Ajmal Musk Rijali", price: "₹500", mrp: "₹550", img: m8 },
  { title: "Ajmal Musk Rijali", price: "₹500", mrp: "₹550", img: m9 },
];

export default function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  mx-auto flex items-center overflow-hidden">
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 z-10"
      >
        <ChevronLeft size={24} />
      </button> */}
      <div className="flex w-full justify-center gap-4">
        {cards.map((card, index) => (
          <motion.div
            key={card.id}
            className={`relative flex items-center justify-center p-6 rounded-lg shadow-lg transition-all duration-500 ${
              index === currentIndex ? "scale-125 opacity-100" : "scale-90 opacity-50"
            } ${card.color}`}
            animate={{ scale: index === currentIndex ? 1.2 : 0.9, opacity: index === currentIndex ? 1 : 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <img src={card.img} className="h-[70px] w-[75px]"  />
          </motion.div>
        ))}
      </div>
      {/* <button
        onClick={nextSlide}
        className="absolute right-2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600 z-10"
      >
        <ChevronRight size={24} />
      </button> */}

    </div>
  );
}
