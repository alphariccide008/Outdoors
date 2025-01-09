import React, { useState } from "react";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa"
import kissDaniel from "../../assets/images/kissdaniel.png"


const UseCases = () => {
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
        <div className=" mx-[10%] mt-[8%] mb-[12%]">
            <h1 className="text-3xl pb-7">Use Cases</h1>
            <p className="text-[#595959] pb-6" style={{fontSize:'14px'}}>Leverage on years of outdoors advertising expertise to achieve brand awareness and increase sales. Enjoy massive reach with strategicout-of-home advertising. Place your business where it counts.</p>
           <hr />
            <div className="flex flex-col  mb-3 text-sm mt-8 px-[2%] lg:px-[5%]">
                {/* Question Section */}
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdown}>
                {/* Title Section */}
                <div className="w-1/3 text-center md:text-left">
                    <h2 className="text-2xl font-semibold">Burnaboy</h2>
                </div>

                {/* Year Section */}
                <div className="w-1/3 text-center">
                    <p className="text-2xl">2009</p>
                </div>

                {/* Icon Section */}
                <div className="w-1/3 text-2xl flex justify-center md:justify-end items-center">
                    <h3>{isOpen ? <FaArrowCircleDown /> : <FaArrowCircleUp />}</h3>
                </div>
                </div>
                


                {/* Dropdown Section */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="md:flex ">
                        {/* Image Section */}
                        <div className="mt-4 flex justify-center md:justify-start md:items-start items-center lg:w-1/3 pt-2">
                        <img src={kissDaniel} alt="Kiss Daniel" className="h-auto w-[50%]" />
                        </div>

                        {/* Text Section */}
                        <div className="mt-4 flex flex-col lg:w-1/3 pt-[3%]">
                        <p className="text-[#334335]" style={{ fontSize: "12px" }}>
                            It depends on your goals. While coding can help you understand technology better, many tools are designed for
                            non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                        </p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="mb-3"/>
            
            <hr />
            <div className="flex flex-col mb-3 text-sm mt-8 px-[2%] lg:px-[5%]">
                {/* Question Section */}
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownSec}>
                {/* Title Section */}
                <div className="w-1/3 text-center md:text-left">
                    <h2 className="text-2xl font-semibold">Burnaboy</h2>
                </div>

                {/* Year Section */}
                <div className="w-1/3 text-center">
                    <p className="text-2xl">2009</p>
                </div>

                {/* Icon Section */}
                <div className="w-1/3 text-2xl flex justify-center md:justify-end items-center">
                    <h3>{isSecOpen ? <FaArrowCircleDown /> : <FaArrowCircleUp />}</h3>
                </div>
                </div>


                {/* Dropdown Section */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isSecOpen ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="md:flex ">
                        {/* Image Section */}
                        <div className="mt-4 flex justify-center md:justify-start md:items-start items-center lg:w-1/3 pt-2">
                        <img src={kissDaniel} alt="Kiss Daniel" className="h-auto w-[50%]" />
                        </div>

                        {/* Text Section */}
                        <div className="mt-4 flex flex-col lg:w-1/3 pt-[3%]">
                        <p className="text-[#334335]" style={{ fontSize: "12px" }}>
                            It depends on your goals. While coding can help you understand technology better, many tools are designed for
                            non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                        </p>
                        </div>
                    </div>
                </div>

            </div>
            <hr className="mb-3"/>


            <hr />
            <div className="flex flex-col mb-3 text-sm mt-8 px-[2%] lg:px-[5%]">
                {/* Question Section */}
                <div className="flex justify-between items-center cursor-pointer" onClick={toggleDropdownThird}>
                {/* Title Section */}
                <div className="w-1/3 text-center md:text-left">
                    <h2 className="text-2xl font-semibold">Burnaboy</h2>
                </div>

                {/* Year Section */}
                <div className="w-1/3 text-center">
                    <p className="text-2xl">2009</p>
                </div>

                {/* Icon Section */}
                <div className="w-1/3 text-2xl flex justify-center md:justify-end items-center">
                    <h3>{isThirdOpen ? <FaArrowCircleDown /> : <FaArrowCircleUp />}</h3>
                </div>
                </div>


                {/* Dropdown Section */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isThirdOpen ? "opacity-100" : "max-h-0 opacity-0"}`}>
                    <div className="md:flex ">
                        {/* Image Section */}
                        <div className="mt-4 flex justify-center md:justify-start md:items-start items-center lg:w-1/3 pt-2">
                        <img src={kissDaniel} alt="Kiss Daniel" className="h-auto w-[50%]" />
                        </div>

                        {/* Text Section */}
                        <div className="mt-4 flex flex-col lg:w-1/3 pt-[3%]">
                        <p className="text-[#334335]" style={{ fontSize: "12px" }}>
                            It depends on your goals. While coding can help you understand technology better, many tools are designed for
                            non-coders. These tools simplify tasks such as building websites or apps without requiring programming skills.
                        </p>
                        </div>
                    </div>
                </div>

            </div>
            <hr />

        </div>
    </>
  )
}

export default UseCases;