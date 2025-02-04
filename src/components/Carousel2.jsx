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
    { id: 1, img: "/img1.jpg", title: "Wood Top", price: "₹200" },
    { id: 2, img: "/img2.jpg", title: "Golden Showpiece", price: "₹370" },
    { id: 3, img: "/img3.jpg", title: "Razan Dates", price: "₹1600" },
    { id: 4, img: "/img4.jpg", title: "Swiss Arabian", price: "₹600" },
    { id: 5, img: "/img5.jpg", title: "Luxury Perfume", price: "₹1200" },
    { id: 6, img: "/img6.jpg", title: "Antique Clock", price: "₹800" },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-bold text-center mb-4">Today's Special Deals</h2>
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="p-2">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={'https://tekisky-mart.s3.ap-south-1.amazonaws.com/images/1707493310436_1.webp'} alt={slide.title} className="w-full h-40 object-cover"/>
              
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

