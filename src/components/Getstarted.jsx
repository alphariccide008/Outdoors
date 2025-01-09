import { Link } from "react-router-dom";
import { FaArrowRight} from 'react-icons/fa';



const Getstarted = () => {
  return (
   <>
        <div className="md:flex lg:px-[10%] my-[4%] py-[3%] bg-[#E6F6F4]">
           <div className="flex-col md:w-1/2 px-3  py-[5%]" style={{fontSize:'20px'}}>
                <h1 className="py-3 font-semibold lg:text-start text-center text-[#003B33]">Ready to tell your brand story in a way that gets noticed?</h1>
                <p className="text-sm text-[#595959] lg:text-start text-center">Contact Outdoors today and let's craft content that earns the spotlight.</p>
           </div>
           <div className="flex flex-col md:w-1/3 lg:items-end lg:justify-end items-center justify-center my-[5%]">
                <Link 
                    href="#" 
                    className="inline-flex items-center px-8 py-2 bg-[#00A991] text-white rounded-3xl hover:bg-[#008976]"
                >
                    Get Started <FaArrowRight className="ml-2" />
                </Link>
            </div>

        </div>
   </>
  )
}
export default Getstarted;