import './RadioAndTv.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Clients from '../../components/Clients'
import sideImg from '../../assets/images/centraimage.jpeg'
import Getstarted from '../../components/Getstarted'
import { Faq } from '../../components/Faq'


const RadioAndTv = () => {
  return (
   <>
      <div className="tv-banner">
        <div className='text-center md:pt-[18%] pt-[25%] lg:mx-[20%]'>
           <h1 className='text-[37px]  font-semibold text-[#D9D9D9] pb-5'>Let Your Brand Be Heard and Seen Everywhere</h1>
           <p className='text-[18px] text-[#B0B0B0] px-2 pb-5'>At Outdoors.ng, we extend your advertising efforts to the airwaves and TV screens, ensuring your brand connects with audiences across multiple platforms. Our expertise in crafting engaging commercials ensures your message resonates and drives action.</p>
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
            <p><i style={{fontSize:'32px'}} className='font-semibold'>Creative Audio-Visual Content</i></p>
            <p><i style={{fontSize:'20px'}} className='text-[#595959] '>Our team produces compelling radio jingles and TV commercials that captivate your audience, align with your brand, and drive engagement.</i></p>
          </div>
          <div className="flex-col md:hidden text-center py-[5%] md:w-1/2">
            <p><i style={{fontSize:'25px'}}>Creative Audio-Visual Content</i></p>
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
            <p><i style={{fontSize:'32px'}} className='font-semibold'>Strategic Airtime Placement</i></p>
            <p><i style={{fontSize:'20px'}} className='text-[#595959]'>We work with leading radio and TV stations to secure prime airtime slots, ensuring your ads reach the right audience at the right time.</i></p>
          </div>
          <div className="flex-col text-center md:hidden py-[5%] md:w-1/2">
            <p><i style={{fontSize:'25px'}}>Strategic Airtime Placement</i></p>
            <p><i style={{fontSize:'14px'}} className='text-[#595959]'>We work with leading radio and TV stations to secure prime airtime slots, ensuring your ads reach the right audience at the right time.</i></p>
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
export default RadioAndTv