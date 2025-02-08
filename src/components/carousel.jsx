import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

const images = [m1,m2,m3,m4,m5,m6,m7,m8,m9];

 const Carousel =()=> {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };
  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full  overflow-hidden rounded-lg shadow-lg">
      <motion.img
        key={currentIndex}
        src={images[currentIndex]}
        alt="carousel slide"
        className="w-full h-[500px] object-contain"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
      />
      {/* <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
      >
        <ChevronLeft size={24} />
      </button> */}
      {/* <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800 p-2 rounded-full text-white hover:bg-gray-600"
      >
        <ChevronRight size={24} />
      </button> */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`w-4 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
}


export default Carousel 