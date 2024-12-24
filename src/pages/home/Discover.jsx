import React, { useState, useEffect } from "react";


const Carousel = () => {
  const slides = [
    { id: 1, header: "OOH", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 2, header: "BRT Buses", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 3, header: "Tracking", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 4, header: "Marketing Mastery", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 5, header: "Local Expertise", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 6, header: "Proven result", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
   
  ];
  
  const slides1 = [
    { id: 1, header: "OOH", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 2, header: "BRT Buses", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },
    { id: 3, header: "Tracking", bodyOf: "We speak the language, understand the cultural nuances, and know how to connect with Nigerian consumers.and know how to connect with Nigerian consumers.h Nigerian consumers.and know how to connect with Nigerian consumers." },

   
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle slide change
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3000); // Restart the slider after the last image
  };


  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + 1000) % 1000); // Navigate backward
  };

  // Auto slide functionality
  useEffect(() => {
    const autoSlide = setInterval(handleNext, 6000); // Slower slide transition (6 seconds)
    return () => clearInterval(autoSlide); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
        <div className="relative px-[1%] py-[3%]">
            <div className="text-3xl pb-5 pl-3 font-semibold">
                <h1 className=" pb-5 "><i>DISCOVER</i> </h1>
                <h1><i>OUR <span className="text-[#FD6821]">EXPERTISE</span></i></h1>
            </div>

            {/* Slides */}
            <div className="overflow-hidden rounded-lg">
                <div
                className="flex transition-transform duration-[10s] ease-in-out" // Slower transition (10 seconds)
                style={{
                    transform: `translateX(-${currentIndex * 33.3333}%)`, 
                }}
                >
                {slides.map((slide) => (
                    <div key={slide.id}  className="w-1/3 mx-2 border px-4 pt-[3%]  rounded-lg flex-shrink-0"
                    style={{ height: "200px" , width:'20%' }}>
                    
                    <h1>{slide.header}</h1>
                    <p className="text-sm text-[#595959]" style={{fontSize: '10px'}}>{slide.bodyOf}</p>
                    
                    </div>
                ))}
                </div>
            </div>

            {/* Navigation Buttons */}
            <button
                onClick={handlePrev}
                className="absolute top-1/2 mt-12 left-4 transform -translate-y-1/2 bg-[#E6F6F4]  text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
            >
                &#8249;
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 mt-12 right-4 transform -translate-y-1/2 bg-[#E6F6F4] text-[#003B33] w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#003B33] hover:text-white"
            >
                &#8250;
            </button>
        </div>

        <div className="mx-[10%] px-[5%] py-[3%] text-center">
            <h2 className="font-semibold pb-5">Conquer Nigeria Market</h2>
            <p className="text-sm text-[#595959]" style={{fontSize:'12px'}}>
            Penetrating the Nigerian market requires a partner who understands the market trends of the country.  At Outdoors.ng, a leading advertising agency in Nigeria, we're more than just marketing specialists – we're cultural guides.
            Our deep understanding of the Nigerian Market allows us to craft marketing campaigns that connect on a deeper level. We leverage local insights and trends to ensure your brand message hits the right note with your target audience.

            </p>

        </div>
        <div className="flex items-center rounded-lg mb-5">
                <div className=" flex justify-center items-center">
                {slides1.map((slide) => (
                    <div key={slide.id}  className="w-1/3 mx-2 flex-col border px-4 pt-[3%]  rounded-lg"
                    style={{ height: "200px" , width:'20%' }}>
                    
                    <h1>{slide.header}</h1>
                    <p className="text-sm text-[#595959]" style={{fontSize: '10px'}}>{slide.bodyOf}</p>
                    
                    </div>
                ))}
                </div>
            </div>
    
    </>
    
  );
};

export default Carousel;
