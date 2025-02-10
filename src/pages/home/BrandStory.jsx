import React, { useState } from "react";
import { FaFileContract } from "react-icons/fa"


const BrandStory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSecOpen, setIsSecOpen] = useState(false);
  const [isThirdOpen, setIsThirdOpen] = useState(false);
  const [isFourthOpen, setIsFourthOpen] = useState(false);

  const toggleDropdown = () => {
  setIsOpen(!isOpen);
  };
  const toggleDropdownSec = () => {
      setIsSecOpen(!isSecOpen);
  };

  const toggleDropdownThird = () => {
      setIsThirdOpen(!isThirdOpen);
  };
  const toggleDropdownFourth = () => {
      setIsFourthOpen(!isFourthOpen);
  };
return (
  <>
    <div className=" md:mx-[5%] mb-[5%]">
    
      <div className="flex flex-col text-sm mt-8  rounded-lg md:px-[5%] px-[2%]">
          {/* Question Section */}
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
            <div className="bg-[#0A6635] rounded-t-lg w-full text-white px-[3%] py-[5%] md:py-[2%]">
              <h2 className="text-[20px] md:text-[40px] text-[#EFEFEF] "><i>TELL A BRAND STORY</i></h2>
            </div>
            
          </div>

          {/* Dropdown Section */}
          <div className={`overflow-hidden transition-all duration-300 bg-[#09120d]  text-[#EFEFEF] ease-in-out rounded-b-lg ${isOpen ? " opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="mt-10"><i className="text-[20px]  md:text-[60px] text-[#FCF9E6] px-[4%]">MEDIA PLANNING AND BUYING </i></div>
                    <div className="md:flex">
                    <div className="mt-4 p-3 lg:w-1/2 pt-2">
                        <p className="text-white  md:text-[16px] p-[3%]">
                          At Outdoors.ng, we believe your brand deserves a powerful story – a story that connects deeply with your audience. Our team of creative experts are storytellers at heart, crafting compelling brand                     
                        </p>
                        <p className="text-white md:text-[16px] p-[3%]"> narratives that capture attention and spark emotions.  We don't just create content, we craft experiences.</p>
                      </div>
                      <div className="mt-4 p-5 mb-[5%] lg:w-1/2 ">
                      <div className="rounded-xl mb-4 bg-white border border-[#1b643b] text-center py-7 md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div className="">
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px] text-white font-semibold'>Creative Communication</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear. </p>
                        </div>
                      </div>
                  </div>
                  <div className="rounded-xl bg-white text-center py-7 border border-[#1b643b] md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div>
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px]  text-white font-semibold'>Content Production</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear.  </p>
                        </div>
                      </div>
                  </div>
                      </div>
                    </div>
          </div>
      </div>

      {/* Second Drop down */}
      <div className="flex flex-col text-sm  rounded-lg md:px-[5%] px-[2%]">
          {/* Question Section */}
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownSec}>
            <div className="bg-[#0A6635]  w-full text-white px-[3%] py-[5%] md:py-[2%]">
              <h2 className="text-[20px] md:text-[40px] text-[#EFEFEF] "><i>TELL A BRAND STORY</i></h2>
            </div>
            
          </div>

          {/* Dropdown Section */}
          <div className={`overflow-hidden transition-all duration-300 bg-[#09120d]  text-[#EFEFEF] ease-in-out rounded-b-lg ${isSecOpen ? " opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="mt-10"><i className="text-[20px]  md:text-[60px] text-[#FCF9E6] px-[4%]">MEDIA PLANNING AND BUYING </i></div>
                    <div className="md:flex">
                    <div className="mt-4 p-3 lg:w-1/2 pt-2">
                        <p className="text-white  md:text-[16px] p-[3%]">
                          At Outdoors.ng, we believe your brand deserves a powerful story – a story that connects deeply with your audience. Our team of creative experts are storytellers at heart, crafting compelling brand                     
                        </p>
                        <p className="text-white md:text-[16px] p-[3%]"> narratives that capture attention and spark emotions.  We don't just create content, we craft experiences.</p>
                      </div>
                      <div className="mt-4 p-5 mb-[5%] lg:w-1/2 ">
                      <div className="rounded-xl mb-4 bg-white border border-[#1b643b] text-center py-7 md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div className="">
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px] text-white font-semibold'>Creative Communication</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear. </p>
                        </div>
                      </div>
                  </div>
                  <div className="rounded-xl bg-white text-center py-7 border border-[#1b643b] md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div>
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px]  text-white font-semibold'>Content Production</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear.  </p>
                        </div>
                      </div>
                  </div>
                      </div>
                    </div>
          </div>
      </div>


      {/* Third Drop down */}
      <div className="flex flex-col text-sm  rounded-lg md:px-[5%] px-[2%]">
          {/* Question Section */}
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownThird}>
            <div className="bg-[#FD6821]  w-full text-white px-[3%] py-[5%] md:py-[2%]">
              <h2 className="text-[20px] md:text-[40px] text-[#EFEFEF] "><i>TELL A BRAND STORY</i></h2>
            </div>
            
          </div>

          {/* Dropdown Section */}
          <div className={`overflow-hidden transition-all duration-300 bg-[#09120d]  text-[#EFEFEF] ease-in-out rounded-b-lg ${isThirdOpen ? " opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="mt-10"><i className="text-[20px]  md:text-[60px] text-[#FCF9E6] px-[4%]">MEDIA PLANNING AND BUYING </i></div>
                    <div className="md:flex">
                    <div className="mt-4 p-3 lg:w-1/2 pt-2">
                        <p className="text-white  md:text-[16px] p-[3%]">
                          At Outdoors.ng, we believe your brand deserves a powerful story – a story that connects deeply with your audience. Our team of creative experts are storytellers at heart, crafting compelling brand                     
                        </p>
                        <p className="text-white md:text-[16px] p-[3%]"> narratives that capture attention and spark emotions.  We don't just create content, we craft experiences.</p>
                      </div>
                      <div className="mt-4 p-5 mb-[5%] lg:w-1/2 ">
                      <div className="rounded-xl mb-4 bg-white border border-[#1b643b] text-center py-7 md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div className="">
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px] text-white font-semibold'>Creative Communication</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear. </p>
                        </div>
                      </div>
                  </div>
                  <div className="rounded-xl bg-white text-center py-7 border border-[#1b643b] md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div>
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px]  text-white font-semibold'>Content Production</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear.  </p>
                        </div>
                      </div>
                  </div>
                      </div>
                    </div>
          </div>
      </div>
           

      {/* Fourth Dropdwon */}
      <div className="flex flex-col text-sm  rounded-lg md:px-[5%] px-[2%]">
          {/* Question Section */}
          <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownFourth}>
            <div className="bg-[#480207] rounded-b-lg w-full text-white px-[3%] py-[5%] md:py-[2%]">
              <h2 className="text-[20px] md:text-[40px] text-[#EFEFEF] "><i>TELL A BRAND STORY</i></h2>
            </div>
            
          </div>

          {/* Dropdown Section */}
          <div className={`overflow-hidden transition-all duration-300 bg-[#09120d]  text-[#EFEFEF] ease-in-out rounded-b-lg ${isFourthOpen ? " opacity-100" : "max-h-0 opacity-0"}`}>
                      <div className="mt-10"><i className="text-[20px]  md:text-[60px] text-[#FCF9E6] px-[4%]">MEDIA PLANNING AND BUYING </i></div>
                    <div className="md:flex">
                    <div className="mt-4 p-3 lg:w-1/2 pt-2">
                        <p className="text-white  md:text-[16px] p-[3%]">
                          At Outdoors.ng, we believe your brand deserves a powerful story – a story that connects deeply with your audience. Our team of creative experts are storytellers at heart, crafting compelling brand                     
                        </p>
                        <p className="text-white md:text-[16px] p-[3%]"> narratives that capture attention and spark emotions.  We don't just create content, we craft experiences.</p>
                      </div>
                      <div className="mt-4 p-5 mb-[5%] lg:w-1/2 ">
                      <div className="rounded-xl mb-4 bg-white border border-[#1b643b] text-center py-7 md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div className="">
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px] text-white font-semibold'>Creative Communication</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear. </p>
                        </div>
                      </div>
                  </div>
                  <div className="rounded-xl bg-white text-center py-7 border border-[#1b643b] md:py-[3%] px-14" style={{ backgroundColor: "rgba(5, 113, 37, 0.2)" }}>
                      <div className="flex">
                      <div>
                      <FaFileContract className="text-[35px]  md:text-[45px] mt-3 text-[#FAD536]"/>
                      </div>
                        <div>
                        <p className=' md:text-[18px] text-[12px]  text-white font-semibold'>Content Production</p>
                        <p className="md:text-[13px] text-[10px] pl-4 text-[#EFEFEF]">We develop strategic communication plans that ensure your brand's message is heard loud and clear.  </p>
                        </div>
                      </div>
                  </div>
                      </div>
                    </div>
          </div>
      </div>
         


      </div>
  </>
)
}
export default BrandStory