import React, { useState, useEffect } from "react";
import image1 from '../../assets/images/billboardimg/Mobile.jpeg';
import image2 from '../../assets/images/billboardimg/Billboardimage.jpeg';
import image3 from '../../assets/images/billboardimg/LED.jpeg';
import image4 from '../../assets/images/darkmode/installation.jpeg';
import image5 from '../../assets/images/Creativeimage.jpeg';

const Carousel = () => {
  const slides = [
    { id: 1, image: image1, alt: "Slide 1" },
    { id: 2, image: image2, alt: "Slide 2" },
    { id: 3, image: image3, alt: "Slide 3" },
    { id: 4, image: image4, alt: "Slide 4" },
    { id: 5, image: image5, alt: "Slide 5" },
    { id: 6, image: image1, alt: "Slide 1" },
    { id: 7, image: image2, alt: "Slide 2" },
    { id: 8, image: image3, alt: "Slide 3" },
    { id: 9, image: image4, alt: "Slide 4" },
    { id: 10, image: image5, alt: "Slide 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle slide change
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Restart the slider after the last image
  };


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length); // Navigate backward
  };

  // Auto slide functionality
  useEffect(() => {
    const autoSlide = setInterval(handleNext, 7000); // Slower slide transition (6 seconds)
    return () => clearInterval(autoSlide); // Cleanup the interval on component unmount
  }, []);

  return (
    <div className="relative px-[1%] py-[3%]">
      <div>
        <h1 className="text-2xl pb-5 pl-3">PORTFOLIO</h1>
      </div>

      {/* Slides */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-[10s] ease-in-out" // Slower transition (10 seconds)
          style={{
            transform: `translateX(-${currentIndex * 33.3333}%)`, // Ensure the images align and take full width
          }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
              className="w-1/3 mx-2  rounded-lg flex-shrink-0"
              style={{ height: "200px" , width:'20%' }} // Keeping the same height as before
            />
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
