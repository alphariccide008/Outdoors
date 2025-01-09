import React, { useState, useEffect } from "react";
import image1 from '../../assets/images/billboardimg/Mobile.jpeg';
import image2 from '../../assets/images/billboardimg/Billboardimage.jpeg';
import image3 from '../../assets/images/billboardimg/LED.jpeg';
import image4 from '../../assets/images/darkmode/installation.jpeg';
import image5 from '../../assets/images/Creativeimage.jpeg';

const Blog = () => {
  const slides = [
    { id: 1, image: image2, alt: "Slide 1" ,textContent: "Social Media advertising Platforms" },
    { id: 2, image: image3, alt: "Slide 2",textContent: "Social Media advertising Platforms" },
    { id: 3, image: image4, alt: "Slide 3" ,textContent: "Social Media advertising Platforms"},
    { id: 4, image: image2, alt: "Slide 4" ,textContent: "Social Media advertising Platforms"},
    { id: 5, image: image3, alt: "Slide 5", textContent: "Social Media advertising Platforms" },
    { id: 6, image: image4, alt: "Slide 1", textContent: "Social Media advertising Platforms" },
    

   
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
        <h1 className="lg:text-3xl text-2xl pb-5 pl-3 font-bold">BLOG</h1>
        <p className="py-2 pl-3" style={{ fontSize:'12px'}}>They are those printed billboards on the side of the road. You can use them to target those who are in vehicles, because many <br /> customers make their purchasing decisions in vehicles.</p>
      </div>

      {/*Desktop Slides */}
      <div className="overflow-hidden ">
        <div
          className="hidden  md:flex transition-transform duration-[10s] ease-in-out" // Slower transition (10 seconds)
          style={{
            transform: `translateX(-${currentIndex * 33.3333}%)`, // Ensure the images align and take full width
          }}
        >
        {slides.map((slide) => (
            <div className="flex flex-col items-center mb-5 border mx-2  border-[#B0E4DD]">
            

                {/* Text Container */}
                <div className=" w-full mx-2  rounded-lg flex-shrink-0  " style={{borderBottomLeftRadius:'2px', borderBottomRightRadius:'2px'}}>
                    {/* Image */}
                <img 
                key={slide.id}
                src={slide.image}
                alt={slide.alt}
               
                style={{ height: "200px", width: "100%", borderTopLeftRadius:'2px', borderTopRightRadius:'2px' }}
                />
                <h1 
                    className="text-[#0A6535] py-3 bg-[#E6F6F4] px-5 text-center" 
                    style={{ fontSize: "12px" }}
                >
                    {slide.textContent}
                </h1>
                </div>
            </div>
        ))}

        </div>
      </div>

      {/* Mobile Slide  */}
      <div className="overflow-hidden ">
        <div
          className="md:hidden flex transition-transform duration-[10s] ease-in-out" // Slower transition (10 seconds)
          style={{
            transform: `translateX(-${currentIndex * 33.3333}%)`, // Ensure the images align and take full width
          }}
        >
          {slides.map((slide) => (
           <div  className=" w-1/2 mx-2  border border-[#B0E4DD]  flex-shrink-0">
              <img
              key={slide.id}
              src={slide.image}
              alt={slide.alt}
             
              style={{ height: "170px" , width:'100%' }} // Keeping the same height as before
            />
             <h1 
                    className="text-[#0A6535] py-3 bg-[#E6F6F4] px-5 text-center" 
                    style={{ fontSize: "12px" }}
                >
                    {slide.textContent}
                </h1>
           </div>
          ))}
        </div>
      </div>

   
     
    </div>
  );
};

export default Blog;
