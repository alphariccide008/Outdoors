import './ExpoMarketing.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Clients from '../../components/Clients'
import sideImg from '../../assets/images/centraimage.jpeg'
import { Faq } from '../../components/Faq'
import GetStarted from '../../components/Getstarted'
import { FaStar } from "react-icons/fa"
import expoImg from '../../assets/images/expomarket.jpeg'



const ExpoMarketing = () => {
    const slides = [
        { id: 1, header: "Holistic Marketing", bodyOf: "We go beyond metrics like reach and impressions. We focus on what truly matters- Boosting Your SEO and Online Visibility. We use insights and SEO expertise to ensure you're found by the right people at the right time." },
        { id: 2, header: "Content that Converts", bodyOf: "Our words don't just win hearts, they win wallets. Our team of experts crafts compelling copy that resonates with your diverse audience, building trust and driving conversions that fuel sales." },
        { id: 3, header: "Performance Marketing", bodyOf: "We don't just write captions, we write copy that sells. We create and manage paid search, social, and display ad campaigns to turn strangers into loyal customers." },
        { id: 4, header: "Performance Marketing", bodyOf: "We don't just write captions, we write copy that sells. We create and manage paid search, social, and display ad campaigns to turn strangers into loyal customers." },       
      ];
    



  return (
    <>
    <div className="creative-banner">
      <div className='text-center md:pt-[18%] pt-[30%] pb-5 lg:pb-10 lg:mx-[20%]'>
         <h1 className='lg:text-[37px] text-[30px] font-semibold text-[#D9D9D9] pb-5'>Captivate Your Audience With Outdoors: The Top Experiential Marketing Agency in Lagos</h1>
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

   

    {/* Hero content   */}
    <div className='mx-[9%] lg:mx-[11%] mt-[7%] mb-[11%]  '>
        <p className='pb-9 text-[18px] text-[#666666] lg:text-[28px]'>At Outdoors.ng, we believe in the power of creating extraordinary moments that connect with your audience on a deeper level. That's why we're not just storytellers, we are experience architects. As the top experiential marketing agency in Lagos, we craft unforgettable campaigns that bring your brand to life.     
        </p>
        <p className='text-[18px] text-[#666666] lg:text-[28px]'>
        We don't just promote products; we tell stories that connect with your target market's aspirations, values, and interests. From technology to finance, and from healthcare to education, we help you integrate your brand seamlessly into the taste of your ideal customer's life.
        </p>
        
        
        <div className="md:flex mt-[10%]">
            <div className="flex-col md:w-1/2">
                <h1 className='lg:text-[35px] text-[30px] md:text-start text-center font-bold' ><i>Experiential Marketing Services</i></h1>
                <p className='text-[18px] py-4 text-[#595959]'>Experiences leave a lasting impression. We go beyond the initial buzz to create campaigns that foster brand loyalty and  drive long-term results.We take your vision and transform it into reality. Our team handles every aspect of your campaign, from concept development to flawless execution.
                </p>
                <div className='font-semibold'>
                    <p className='flex py-4'><FaStar className='text-[#D7BAAD] text-[230%]  lg:text-[125%] mr-3 '/> <span className='text-[15px]' >Event design and execution (pop-up shops, product launches, brand activations)</span></p>
                    <p className='flex pb-4'><FaStar className='text-[#D7BAAD] text-[230%]  lg:text-[125%] mr-3 '/> <span className='text-[15px]' >Interactive experiences (virtual reality, augmented reality, gamification)</span></p>
                    <p className='flex pb-4'><FaStar className='text-[#D7BAAD] text-[20px] mr-3 '/> <span className='text-[15px]' >Influencer marketing partnerships</span></p>
                    <p className='flex pb-4'><FaStar className='text-[#D7BAAD] text-[20px] mr-3 '/> <span className='text-[15px]' >Social media strategy and engagement</span></p>
                </div>
            </div>
            <div className="flex-col md:w-1/2 lg:mx-2 px-3 py-8">
                <img src={expoImg} alt="" className='rounded-xl' />
            </div>
        </div>
    </div>
   
    <div className='my-[3%] text-center p-3 '>
        <p className='text-[32px] pb-3 font-semibold'>Why Choose Outdoors?</p>
        <p className='text-[20px] text-[#595959]'>Here's what makes us your perfect lifestyle marketing partner:</p>
    </div>

    <div className="md:flex p-3 m-[4%]">
        {slides.map((slide) => (
                    <div className="flex-col md:w-1/4 mx-2 my-7 rounded-lg border py-6 px-4 border-[#E6E6E6]">
                    <p className='text-[24px] py-4 font-semibold'>{slide.header}</p>
                    <h1></h1>
                    <p className="text-[16px]pb-4 text-[#595959]">{slide.bodyOf}</p>
                    
                    </div>
                ))}
        </div>





    {/* Get started */}
    <GetStarted/>


    {/* Frequently Asked Questions */}
    <Faq/>

 
 </>
  )
}
export default ExpoMarketing