import React, { useState, useEffect } from "react";
import { FaArrowRight} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Campaign = () => {
  const slides = [
    { id: 1, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 1" },
    { id: 2, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 2" },
    { id: 3, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 3" },
    { id: 4, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 4" },
    { id: 5, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 5" },
    { id: 6, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 6" },
    { id: 7, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 7" },
    { id: 6, videoUrl: "https://www.youtube.com/embed/lHMYseWHsxw?si=qLBAxSl0fbpFmxqn", alt: "Video 8" },
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
   <>
         <div className="relative px-[1%] mt-[3%]  py-[3%]">
      <div>
        <h1 className="text-3xl py-3 pb-5 pl-10">CAMPAIGN</h1>
      </div>

      {/*Desktop Slides */}
      <div className="overflow-hidden my-3 rounded-lg">
        <div
          className="hidden  md:flex transition-transform duration-[10s] ease-in-out" // Slower transition (10 seconds)
          style={{
            transform: `translateX(-${currentIndex * 33.3333}%)`, // Ensure the images align and take full width
          }}
        >
          {slides.map((slide) => (
            <iframe
              key={slide.id}
              src={slide.videoUrl}
              alt={slide.alt}
              className="w-1/3 mx-2  rounded-lg flex-shrink-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: "200px" , width:'20%' }} // Keeping the same height as before
            ></iframe>
          ))}
        </div>
      </div>

      {/* Mobile Slide  */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="md:hidden flex transition-transform duration-[10s] ease-in-out" // Slower transition (10 seconds)
          style={{
            transform: `translateX(-${currentIndex * 33.3333}%)`, // Ensure the images align and take full width
          }}
        >
          {slides.map((slide) => (
            <iframe
              key={slide.id}
              src={slide.videoUrl}
              alt={slide.alt}
              className="w-1/3 mx-2  rounded-lg flex-shrink-0"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ height: "210px" , width:'50%' }} // Keeping the same height as before
            ></iframe>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      {/* <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
      >
        &#8249; */}
      {/* </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
      >
        &#8250;
      </button> */}
    </div>
    <div className="mx-[15%] mt-[4%] mb-[4%] flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="lg:text-2xl font-bold mt-2 mb-4" style={{ fontSize: '17px' }}>
            Xpark360s Creative Campaign for LetsChat Lifelong Connections Success
        </h1>
        <Link 
            href="#" 
            className="flex items-center justify-center w-full px-10 py-2 border border-[#00A991] text-[#00A991] hover:bg-[#00A991] hover:text-white rounded-2xl"
        >
            View All <FaArrowRight className="ml-2" />
        </Link>


        {/* Ready to Grow Section */}
        <div className="py-[9%]">
            <h1 className="font-bold text-2xl py-3">
            <i>READY TO <span className="text-[#FD6821]">GROW</span> WITH AN ADVERTISING COMPANY?</i>
            </h1>

            {/* Description */}
            <p 
            className="text-[#595959] mb-5" 
            style={{ fontSize: '12px', lineHeight: '1.6' }}
            >
            Leverage on years of outdoor advertising expertise to achieve brand awareness and increase sales. Enjoy massive 
            reach with strategic out-of-home advertising. 
            <br /> 
            Place your business where it counts.
            </p>

            {/* Let's Talk Button */}
            <div className="w-full">
            <Link 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-2 bg-[#0A6535] text-white rounded-3xl hover:bg-[#008976]"
            >
                Let's Talk <FaArrowRight className="ml-2" />
            </Link>
            </div>
        </div>
    </div>

   </>
  );
};

export default Campaign;
