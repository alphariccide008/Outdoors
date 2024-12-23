import './Home.css'
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pt-24 bg-[#E6F6F4] px-[10%]'>
        <div className="md:flex w-full">
            <div className="flex-col md:w-1/2">
                <h1 className='text-3xl pb-3 text-center md:text-start'>Increase <span className='text-[#FD6821]'>Awareness</span></h1>
                <h1 className='text-3xl pb-5 text-center md:text-start'>Drive Sales</h1>
                <p className='pr-[5%] text-center md:text-start text-sm'>increase brand visibility and revenue with Outdoor advertising in Nigeria</p>
                
                <div className="flex flex-wrap justify-center md:justify-start pb-32 mt-4 text-center">
                <Link
                        to="#"
                        className="py-4 flex px-3 mt-2 mx-2 md:mt-0 ml-0 md:ml-2 border bg-[#0A6535] text-white rounded-3xl transition-all duration-300"
                        style={{ fontSize: '12px' }}
                    >
                        Get Started <FaArrowRight className="mt-1 mx-1" />
                    </Link>
                    <Link
                        to="#"
                        className="py-4 flex px-3 mt-2 md:mt-0 ml-0 md:ml-2 border border-[#0A6535] text-[#0A6535] rounded-3xl transition-all duration-300"
                        style={{ fontSize: '12px' }}
                    >
                        Get discounted Billboard <FaCheckCircle className="mt-1 mx-1" />
                    </Link>
                </div>

                

            </div>
            <div className="flex-col md:w-1/2">Videos</div>
        </div>
    </div>
  )
}
export default Hero