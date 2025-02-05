import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Carousel2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const slides = [
    { id: 1, img: "/Ajmal musk.webp", title: "Ajmal Musk Rijali",  offerprice: "500" },
    { id: 2, img: "/Aqua.jpeg", title: "Ajmal AQUA Floral", price: "₹400" },
    { id: 3, img: "/kurta.png", title: "Kurta Pajama with Kali", price: "₹1000" },
    { id: 4, img: "/Quick.jpg", title: "Quick Heal Pro", price: "₹600" },
    { id: 5, img: "/Ramzaan.jpg", title: "Ramzan Dates", price: "₹1600" },
    { id: 6, img: "/swiss.webp", title: "Swiss Arabian", price: "₹600" },
      { id: 6, img: "/Golden.jpg", title: "Show Peace Golden Cycle", price: "₹370" },
  ];

  return (
    <div className="max-w-4x4 mx-auto p-6 max-h4x4 background c-black" >
      <h2 className="text-xl font-bold text-center mb-4 ">Today's Special Deals</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={slide.img} alt={slide.title} className="w-medium-100 h-35 object-cover"/>
              <div className="p-4">
              
                <h3 className="font-semibold">{slide.title}</h3>
                <p className="text-red-500 font-bold">Offer Price: {slide.price}</p>
              </div>
            </div>
            
          </div>
          
          
        ))}
      </Slider>
    </div>
  );
};




export default Carousel2;

