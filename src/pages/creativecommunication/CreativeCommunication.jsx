import './CreativeCommunication.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Clients from '../../components/Clients'
import sideImg from '../../assets/images/centraimage.jpeg'
import { Faq } from '../../components/Faq'
import Getstarted from '../../components/Getstarted'



const CreativeCommunication = () => {
  const slides = [
    { id: 1, header: "Holistic Marketing", bodyOf: "We go beyond metrics like reach and impressions. We focus on what truly matters- Boosting Your SEO and Online Visibility. We use insights and SEO expertise to ensure you're found by the right people at the right time." },
    { id: 2, header: "Content that Converts", bodyOf: "Our words don't just win hearts, they win wallets. Our team of experts crafts compelling copy that resonates with your diverse audience, building trust and driving conversions that fuel sales." },
    { id: 3, header: "Performance Marketing", bodyOf: "We don't just write captions, we write copy that sells. We create and manage paid search, social, and display ad campaigns to turn strangers into loyal customers." },
    { id: 4, header: "Conversion Optimization", bodyOf: "We analyze your website, from layout to navigation, to remove friction and boost conversion rate  ." },
   
   
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
         <h1 className='text-[37px]  font-semibold text-[#D9D9D9] pb-5'> Captivate and Convert with our Award-Winning Creative Communication Services</h1>
         <p className='text-[18px] text-[#B0B0B0] px-2 pb-5'>Struggling to connect with your audience and drive conversions? Outdoors. ng is a leading digital marketing agency in Lagos & Nigeria, specializing in SEO, content marketing, pay-per-click, and more.  Contact us today for customized solutions</p>
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

    <div className="relative mt-12 mx-[3%] mb-[9%]">
        <div className='text-center mt-[5%] mb-10 px-[5%]'>
          <p className='text-[32px] pb-5 font-semibold'><i>Welcome to Outdoors.ng, Your Top Creative Communication Agency in Nigeria</i></p>
          <p className='text-[20px] text-[#595959] px-[3%]'>We believe the most powerful marketing comes from creative communication that captivates audiences. 
            That's why we develop strategies that earn media attention by creating content that's naturally shareable and relevant to your audience's interests. These aren't just marketing campaigns, they're experiences that connect brands with the audiences they truly care about.
          </p>
        </div>
        <div className='text-center mt-[9%] mb-[4%] px-[4%] font-bold'>
          <p className='text-[38px]'><i>We offer a full suite of <span className='text-[#FD6821]'>creative communication</span> services, including</i></p>
        </div>
        <div className="md:flex p-3">
        {slides.map((slide) => (
                    <div className="flex-col md:w-1/4 mx-2 my-7 rounded-lg border py-6 px-4 border-[#E6E6E6]">
                    <p className='text-[24px] py-4 font-semibold'>{slide.header}</p>
                    <h1></h1>
                    <p className="text-[16px]pb-4 text-[#595959]">{slide.bodyOf}</p>
                    
                    </div>
                ))}
        </div>
       
    </div>

    {/* Hero content   */}
    <div className='relative mt-12'>
      <div className=' text-center mx-[3%]'>
      <p className='text-[38px] py-[5%] font-bold' ><i>The Outdoors Advantage: Combining <span className='text-[#FD6821]'>creative power</span> & Strategic Insights</i></p>

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
export default CreativeCommunication