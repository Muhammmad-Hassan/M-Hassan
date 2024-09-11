import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function CheckingSlider() {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Loop through slides
    speed: 500, // Slide transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll per swipe
    autoplay: true, // Auto-slide feature
    autoplaySpeed: 2000, // Slide change interval for autoplay
    
  };

  const images = [
    'https://via.placeholder.com/300x200.png?text=Slide+1',
    'https://via.placeholder.com/300x200.png?text=Slide+2',
    'https://via.placeholder.com/300x200.png?text=Slide+3',
    'https://via.placeholder.com/300x200.png?text=Slide+4',
    'https://via.placeholder.com/300x200.png?text=Slide+5'
  ];

  return (
    <div className="container mx-auto mt-52">
      <h2 className="text-center text-2xl font-bold mb-4">Image Slider</h2>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CheckingSlider;
