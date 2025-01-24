import './DigitalMarketing.css'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Clients from '../../components/Clients'
import sideImg from '../../assets/images/centraimage.jpeg'
import { Faq } from '../../components/Faq'




const DigitalMarketing = () => {


    const slides = [
        { id: 1, header: "Holistic Marketing", bodyOf: "We go beyond metrics like reach and impressions. We focus on what truly matters- Boosting Your SEO and Online Visibility. We use insights and SEO expertise to ensure you're found by the right people at the right time." },
        { id: 2, header: "Content that Converts", bodyOf: "Our words don't just win hearts, they win wallets. Our team of experts crafts compelling copy that resonates with your diverse audience, building trust and driving conversions that fuel sales." },
        { id: 3, header: "Performance Marketing", bodyOf: "We don't just write captions, we write copy that sells. We create and manage paid search, social, and display ad campaigns to turn strangers into loyal customers." },
        { id: 4, header: "Conversion Optimization", bodyOf: "We analyze your website, from layout to navigation, to remove friction and boost conversion rate  ." },
       
       
      ];

  return (
    <>
    <div className="digital-banner ">
      <div className='text-center md:pt-[18%] pb-[10%] pt-[40%] lg:mx-[20%]'>
         <h1 className='text-[37px]  font-semibold text-[#D9D9D9] px-3 pb-5'>Tired of Disjointed Marketing? We Orchestrate Growth Across Every Channel.</h1>
         <p className='text-[18px] text-[#B0B0B0] px-2 pb-5'>Increase your brand visibility  Connect with your audience and build brand loyalty</p>
         <div className="flex justify-center items-center mt-10">
          <Link to="#" className="lg:w-[25%] py-[5%] px-[9%] flex justify-center items-center md:py-3 md:px-4 bg-[#0A6535] rounded-3xl text-white text-center hover:bg-[#085827] transition-all duration-300">
            Let's Talk
            <FaArrowRight className='ml-2'/>
          </Link>
        </div>

      </div>
    </div>
    <Clients/> 

    <div className='text-center mx-[5%] md:mx-[10%] my-[9%]'>
        <p className='text-[32px] font-semibold'>Our Advertising Services</p>
        <p className='text-[20px] text-[#595959]'> We offer advertising services such as billboard advertising, mobile billboard advertising, lampost, street activations, digital advertising, radio and tvc advertising, bus advertising etc.</p>
    </div>

    {/* Hero content   */}
    <div className="relative mt-12 mx-[3%] mb-[9%]">
        <div className="md:flex p-3">
        {slides.map((slide) => (
                    <div className="flex-col md:w-1/4 mx-2 my-7 rounded-lg border py-6 px-4 border-[#E6E6E6]">
                    <p className='text-[24px] py-4 font-semibold'>{slide.header}</p>
                    <h1></h1>
                    <p className="text-[16px]pb-4 text-[#595959]">{slide.bodyOf}</p>
                    
                    </div>
                ))}
        </div>
       <div className='lg:mx-[10%] px-[3%] lg:pt-9 pt-6'>
       <Link 
            href="#" 
            className="flex items-center justify-center w-full px-10 lg:py-2 py-4 border border-[#00A991] text-[#00A991] hover:bg-[#00A991] hover:text-white rounded-3xl"
        >
           Contact Us Today
        </Link>
       </div>
    </div>

    

    {/* Frequently Asked Questions */}
    <Faq/>

 
 </>
  )
}
export default DigitalMarketing