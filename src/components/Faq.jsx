import React, { useState } from "react";
import { FaStar } from "react-icons/fa"


export const Faq = () => {
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
        <div className=" mx-[10%] mb-[5%]">
            <div className="flex items-center space-x-4">
                <div className=" md:text-3xl text-[20px] w-[10%] text-[#00A991] text-center">FAQ</div>
                <div className="  flex-1 h-[2px] bg-[#00A991]"></div>
                <div className="w-auto px-2 flex items-center space-x-1">
                    
                    <FaStar className="text-[#00A991] text-2xl" />
                </div>
            </div>
            <div className="flex flex-col text-sm mt-8 md:px-[5%] px-[2%]">
      {/* Question Section */}
      <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
        <div className="w-1/2">
          <h2>Do I really don’t need to learn how to code?</h2>
        </div>
        <div className="w-1/2 text-2xl text-[#004C41] text-end">
          <h3>{isOpen ? "-" : "+"}</h3>
        </div>
      </div>

      {/* Dropdown Section */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="mt-4 lg:w-1/2 pt-2">
                    <p className="text-[#334335]" style={{ fontSize: "12px" }}>
                      It depends on your goals. While coding can help you understand technology better, many tools are designed for
                      non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                    </p>
                  </div>
                </div>
            </div>
            <div className="flex flex-col text-sm mt-8 md:px-[5%] px-[2%]">
                {/* Question Section */}
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownSec}>
                    <div className="w-1/2">
                    <h2>Does  my professional courses?</h2>
                    </div>
                    <div className="w-1/2 text-2xl text-[#004C41] text-end">
                    <h3 >{isSecOpen ? "-" : "+"}</h3>
                    </div>
                </div>

                {/* Dropdown Section */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSecOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="mt-4 md:w-1/2 pt-2">
                    <p className="text-[#334335]" style={{ fontSize: "12px" }}>
                      It depends on your goals. While coding can help you understand technology better, many tools are designed for
                      non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                    </p>
                  </div>
                </div>
            </div>
            <div className="flex flex-col text-sm mt-8 md:px-[5%] px-[2%]">
                {/* Question Section */}
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownThird}>
                    <div className="w-1/2">
                    <h2>Do I really don’t need to learn how to code?</h2>
                    </div>
                    <div className="w-1/2 text-2xl text-[#004C41] text-end">
                    <h3 >{isThirdOpen ? "-" : "+"}</h3>
                    </div>
                </div>

                {/* Dropdown Section */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isThirdOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}`}>
                  <div className="mt-4 md:w-1/2 pt-2">
                    <p className="text-[#334335]" style={{ fontSize: "12px" }}>
                      It depends on your goals. While coding can help you understand technology better, many tools are designed for
                      non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                    </p>
                  </div>
                </div>
            </div>
            <div className="flex flex-col text-sm mt-8 md:px-[5%] px-[2%]">
            {/* Question Section */}
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={toggleDropdownFourth}
            >
              <div className="w-1/2">
                <h2>Does my professional courses?</h2>
              </div>
              <div className="w-1/2 text-2xl text-[#004C41] text-end">
                <h3>{isFourthOpen ? "-" : "+"}</h3>
              </div>
            </div>

            {/* Dropdown Section */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isFourthOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="mt-4 md:w-1/2 pt-2">
                <p className="text-[#334335] " style={{ fontSize: "12px" }}>
                  It depends on your goals. While coding can help you understand technology better, many tools are designed for
                  non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                </p>
                
              </div>
            </div>
          </div>


        </div>
    </>
  )
}