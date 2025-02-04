import { useState, useEffect } from "react";

const images = [
  "https://source.unsplash.com/800x400/?nature,water",
  "https://source.unsplash.com/800x400/?city,night",
  "https://source.unsplash.com/800x400/?mountains,sunset",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-10xl mx-auto overflow-hidden rounded-lg shadow-lg  ">
      <div
        className="flex transition-transform duration-700 ease-in-out mt-20 "
        
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        <img src="https://tekiskymart.com/static/media/Black%20and%20Green%20Minimalist%20Premium%20Dates%20Ramadhan%20Special%20Offer%20Banner.587d44a1731db8f8a90d.png" alt="" />
        <img src="https://tekiskymart.com/static/media/Discover%20our%20Lattafa%20perfumes..e8361da190aa9bc3b914.png" alt="" />
        <img src="https://tekiskymart.com/static/media/Beige%20Aesthetic%20New%20Arrival%20Fashion%20Banner%20Landscape.fce842ef903514eeda5c.png" alt="" />
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index}`} className="w-full object-cover" />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
