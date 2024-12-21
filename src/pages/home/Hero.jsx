import './Home.css'
import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className='pt-24 bg-[#E6F6F4] px-[10%]'>
        <div className="md:flex">
            <div className="flex-col md:w-1/2">
                <h1 className='text-3xl pb-3 text-center md:text-start'>Increase <span className='text-[#FD6821]'>Awareness</span></h1>
                <h1 className='text-3xl pb-5 text-center md:text-start'>Drive Sales</h1>
                <p className='pr-[5%] text-center md:text-start text-sm'>increase brand visibility and revenue with Outdoor advertising in Nigeria</p>
                
                <div className="flex pb-32 mt-4">
                    <Link to="#"
                    className="py-2 flex px-5 text-white bg-[#0A6535] rounded-3xl hover:bg-[#085827] transition-all duration-300" style={{fontSize: '12px'}}>
                        Get Started <FaArrowRight className='mt-1 mx-1'/>
                    </Link>
                    <Link to="#"
                    className="py-2  mx-4 px-2 text-sm text-[#085827] border border-[#085827] rounded-3xl hover:bg-[#085827] transition-all duration-300" style={{fontSize: '12px'}}>
                        Get discounted Billboard
                    </Link>
                </div>

            </div>
            <div className="flex-col md:w-1/2">Videos</div>
        </div>
    </div>
  )
}
export default Hero