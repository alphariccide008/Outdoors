import './OrderForPrinting.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Clients from '../../components/Clients'
import sideImg from '../../assets/images/centraimage.jpeg'
import Getstarted from '../../components/Getstarted'
import { Faq } from '../../components/Faq'


const OrderForPrinting = () => {
  return (
    <>
    <div className="printing-banner">
      <div className='text-center md:pt-[18%] pt-[40%] lg:mx-[20%]'>
         <h1 className='text-[37px]  font-semibold text-[#D9D9D9] px-4 pb-5'>Prints That Make Your Brand Shine</h1>
         <p className='text-[18px] text-[#B0B0B0] px-2 pb-5'>Outdoor advertising begins with quality materials. Outdoors.ng offers state-of-the-art printing solutions to ensure your ads look stunning and stand the test of time.</p>
         <div className="flex justify-center items-center mt-10">
          <Link to="#" className="lg:w-[25%] py-[5%] px-[9%] flex justify-center items-center md:py-3 md:px-4 bg-[#0A6535] rounded-3xl text-white text-center hover:bg-[#085827] transition-all duration-300">
            Get Started
            <FaArrowRight className='ml-2'/>
          </Link>
        </div>

      </div>
    </div>
    <Clients/> 

    {/* Hero content   */}
    <div className='relative mt-12'>
      <div className='mx-[5%] md:mx-[10%] md:flex'>
        <div className="flex-col hidden md:block py-[5%] md:w-1/2">
          <p><i style={{fontSize:'32px'}} className='font-semibold'>End-to-End Coordination</i></p>
          <p><i style={{fontSize:'20px'}} className='text-[#595959] '>We handle everything from transportation to site permissions, making the deployment process stress-free and efficient.</i></p>
        </div>
        <div className="flex-col md:hidden text-center py-[5%] md:w-1/2">
          <p><i style={{fontSize:'25px'}} >Creative Audio-Visual Content</i></p>
          <p><i style={{fontSize:'14px'}} className='text-[#595959] '>Our team produces compelling radio jingles and TV commercials that captivate your audience, align with your brand, and drive engagement.</i></p>
        </div>
        <div className="flex-col md:w-1/2 md:ml-10">
          <img src={sideImg} style={{height:'238px',}}  alt="" className='w-[100%] rounded-lg' />
        </div>

      </div>
      <div className='mx-[5%] md:mx-[10%] mt-20 flex flex-col-reverse md:flex-row'>
        <div className="flex-col md:w-1/2 md:mr-10">
          <img src={sideImg} style={{height:'238px'}} alt="" className='w-[100%] rounded-lg' />
        </div>
        <div className="flex-col hidden md:block py-[5%] md:w-1/2">
          <p><i style={{fontSize:'32px'}} className='font-semibold'>Timely Execution</i></p>
          <p><i style={{fontSize:'20px'}} className='text-[#595959]'>We work with precision to ensure your ads are installed and live by your desired launch date, ensuring no missed opportunities.</i></p>
        </div>
        <div className="flex-col text-center md:hidden py-[5%] md:w-1/2">
          <p><i style={{fontSize:'25px'}} className='font-semibold'>Customized Solutions</i></p>
          <p><i style={{fontSize:'14px'}} className='text-[#595959]'>Whether you’re rolling out a city-wide campaign or targeting specific locations, we tailor our deployment process to fit your goals and budget.</i></p>
        </div>
      </div>

      <div className='mx-[5%] md:mx-[10%] mt-20 md:flex'>
        <div className="flex-col hidden md:block py-[5%] md:w-1/2">
          <p><i style={{fontSize:'32px'}} className='font-semibold'>Integrated Campaigns</i></p>
          <p><i style={{fontSize:'20px'}} className='text-[#595959] '>Combine outdoor, radio, and TV advertising for a cohesive marketing strategy that amplifies your brand’s presence across all touchpoints.</i></p>
        </div>
        <div className="flex-col md:hidden text-center py-[5%] md:w-1/2">
          <p><i style={{fontSize:'25px'}}>Integrated Campaigns</i></p>
          <p><i style={{fontSize:'14px'}} className='text-[#595959] '>Combine outdoor, radio, and TV advertising for a cohesive marketing strategy that amplifies your brand’s presence across all touchpoints.</i></p>
        </div>
        <div className="flex-col md:w-1/2 md:ml-10">
          <img src={sideImg} style={{height:'238px',}}  alt="" className='w-[100%] rounded-lg' />
        </div>
      </div>
    </div>

    {/* Get started */}
    <Getstarted/>

    {/* Frequently Asked Questions */}
    <Faq/>

 
 </>
  )
}
export default OrderForPrinting