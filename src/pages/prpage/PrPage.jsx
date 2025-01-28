import './PrPage.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Clients from '../../components/Clients'
import sideImg from '../../assets/images/centraimage.jpeg'
import { Faq } from '../../components/Faq'
import Getstarted from '../../components/Getstarted'

const PrPage = () => {

    const slides = [
        { id: 1, header: "Holistic Marketing", bodyOf: "We go beyond metrics like reach and impressions. We focus on what truly matters- Boosting Your SEO and Online Visibility. We use insights and SEO expertise to ensure you're found by the right people at the right time." },
        { id: 2, header: "Content that Converts", bodyOf: "Our words don't just win hearts, they win wallets. Our team of experts crafts compelling copy that resonates with your diverse audience, building trust and driving conversions that fuel sales." },
        { id: 3, header: "Performance Marketing", bodyOf: "We don't just write captions, we write copy that sells. We create and manage paid search, social, and display ad campaigns to turn strangers into loyal customers." },

      
       
       
      ];
    
      const slides1 = [
        { id: 1, header: "Holistic Marketing", bodyOf: "We go beyond metrics like reach and impressions. We focus on what truly matters- Boosting Your SEO and Online Visibility. We use insights and SEO expertise to ensure you're found by the right people at the right time." },
        { id: 2, header: "Content that Converts", bodyOf: "Our words don't just win hearts, they win wallets. Our team of experts crafts compelling copy that resonates with your diverse audience, building trust and driving conversions that fuel sales." },
        { id: 3, header: "Performance Marketing", bodyOf: "We don't just write captions, we write copy that sells. We create and manage paid search, social, and display ad campaigns to turn strangers into loyal customers." },
      
       
       
       
      ];

  return (
    <>
    <div className="creative-banner">
      <div className='text-center md:pt-[18%] pt-[25%] lg:mx-[20%]'>
         <h1 className='lg:text-[37px] text-[30px] font-semibold text-[#D9D9D9] pb-5'>Build a Powerful Brand With the top Public Relations Agency in Nigeria</h1>
         <p className='lg:text-[18px] text-[16px] text-[#B0B0B0] px-2 pb-5'>Struggling with brand reputation? We craft authentic stories, secure media coverage, and manage online presence to build trust and awareness. Contact us, your Nigerian PR agency!</p>
         <div className="flex justify-center items-center mt-10">
          <Link to="#" className="lg:w-[25%] py-[5%] px-[9%] flex justify-center items-center md:py-3 md:px-4 bg-[#0A6535] rounded-3xl text-white text-center hover:bg-[#085827] transition-all duration-300">
            Get Started
            <FaArrowRight className='ml-2'/>
          </Link>
        </div>

      </div>
    </div>

    {/* client */}
    <Clients/> 
    <div className='my-[3%] text-center p-3 mx-[5%] '>
        <p className=' text-[28px] md:text-[32px] pb-3 font-semibold text-center'><i>In today's digital world, building a strong brand reputation is crucial for success. However, businesses often struggle with</i></p>
       
    </div>

    <div className="md:flex p-3 m-[4%]">
        {slides.map((slide) => (
                    <div className="flex-col md:w-1/3 mx-2 my-7 rounded-lg border py-6 px-4 border-[#E6E6E6]">
                    <p className='text-[24px] py-4 font-semibold'>{slide.header}</p>
                    <h1></h1>
                    <p className="text-[16px]pb-4 text-[#595959]">{slide.bodyOf}</p>
                    
                    </div>
                ))}
        </div>


       

   

    {/* Hero content   */}
    <div className='relative mt-12'>
    <div className='my-[3%] text-center p-3 mx-[5%] '>
        <p className=' text-[24px] md:text-[32px] pb-3 font-semibold text-center'><i>Our PR expertise helps you overcome these challenges.</i></p>
       
    </div>
      
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
          <p><i style={{fontSize:'25px'}} className='font-semibold pb-5'>Customized Solutions</i></p>
          <p><i style={{fontSize:'14px'}} className='text-[#595959]'>Whether you’re rolling out a city-wide campaign or targeting specific locations, we tailor our deployment process to fit your goals and budget.</i></p>
        </div>
      </div>

      <div className='mx-[5%] md:mx-[10%] mt-20 md:flex'>
        <div className="flex-col hidden md:block py-[5%] md:w-1/2">
          <p><i style={{fontSize:'32px'}} className='font-semibold'>Integrated Campaigns</i></p>
          <p><i style={{fontSize:'20px'}} className='text-[#595959] '>Combine outdoor, radio, and TV advertising for a cohesive marketing strategy that amplifies your brand’s presence across all touchpoints.</i></p>
        </div>
        <div className="flex-col md:hidden text-center py-[5%] md:w-1/2">
          <p><i style={{fontSize:'25px'}} >Integrated Campaigns</i></p>
          <p><i style={{fontSize:'14px'}} className='text-[#595959] '>Combine outdoor, radio, and TV advertising for a cohesive marketing strategy that amplifies your brand’s presence across all touchpoints.</i></p>
        </div>
        <div className="flex-col md:w-1/2 md:ml-10">
          <img src={sideImg} style={{height:'238px',}}  alt="" className='w-[100%] rounded-lg' />
        </div>
      </div>
    </div>

   
    <div className='my-[3%] text-center pb-3 pt-[5%] px-2'>
        <p className='text-[32px] font-semibold'> At Outdoors.ng, we offer comprehensive PR solutions tailored to your needs: Media Relations:e</p>
        <p className='text-[20px] text-[#595959]'>We strategize and execute media outreach campaigns to land placements in top publications and broadcasts.</p>
    </div>

    <div className="md:flex p-3 m-[4%]">
        {slides1.map((slide) => (
                    <div className="flex-col md:w-1/3 mx-2 my-7 rounded-lg border py-6 px-4 border-[#E6E6E6]">
                    <p className='text-[24px] py-4 font-semibold'>{slide.header}</p>
                    <h1></h1>
                    <p className="text-[16px]pb-4 text-[#595959]">{slide.bodyOf}</p>
                    
                    </div>
                ))}
        </div>


    {/* Get started */}
    <Getstarted/>

    {/* Frequently Asked Questions */}
    <Faq/>

 
 </>
  )
}
export default PrPage