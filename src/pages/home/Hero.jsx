import './Home.css'
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='pt-24 bg-[#E6F6F4] px-[10%]'>
        <div className="md:flex">
            <div className="flex-col md:w-1/2">
                <h1 className='text-3xl pb-3 text-center md:text-start'>Increase <span className='text-[#FD6821]'>Awareness</span></h1>
                <h1 className='text-3xl pb-5 text-center md:text-start'>Drive Sales</h1>
                <p className='pr-[5%] text-center md:text-start'>increase brand visibility and revenue with Outdoor advertising in Nigeria</p>
                
                <div className="flex pb-32">
                    <div className="w-1/2">
                    <Link to="#"
                    className="py-2 px-6 text-white bg-[#0A6535] rounded-3xl hover:bg-[#085827] transition-all duration-300">
                        Get Started
                    </Link>
                    </div>
                   <div className="w-1/2 text-sm">
                   <Link to="#"
                    className="py-2  mx-4 px-3 text-[#085827] border border-[#085827] rounded-3xl hover:bg-[#085827] transition-all duration-300">
                        Get discounted Billboard
                    </Link>
                   </div>
                </div>

            </div>
            <div className="flex-col md:w-1/2">Videos</div>
        </div>
    </div>
  )
}
export default Hero