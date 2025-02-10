import './Home.css';

import banner1 from '../../assets/images/awards/global.png';
import banner2 from '../../assets/images/awards/MEA.png';

const Banner = () => {
  return (
    <>
      <div className="lg:px-[8%] mt-28 bg-[#e3f2e6] py-[7%] flex flex-col items-center">
        {/* Desktop View */}
        <div className="md:flex  pb-5 justify-center items-center hidden w-full">
          <div className="w-1/3 flex justify-center">
            <img src={banner2} alt="award" style={{ height: '300px' }} />
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={banner1} alt="award" style={{ height: '300px' }} />
          </div>
          <div className="w-1/3 flex justify-center">
            <img src={banner2} alt="award" style={{ height: '300px' }} />
          </div>
        </div>
        {/* Mobile View */}
        <div className="flex pb-5 flex-col justify-center items-center md:hidden">
          <div className="w-full flex justify-center">
            <img src={banner2} alt="award" style={{ height: '300px' }} />
          </div>
          <div className="w-full flex justify-center">
            <img src={banner1} alt="award" style={{ height: '300px' }} />
          </div>
          <div className="w-full flex justify-center">
            <img src={banner2} alt="award" style={{ height: '300px' }} />
          </div>
        </div>
        <div className='text-center text-[14px] md:text-[20px] text-[#595959] pb-5 px-[2%]'>
            <p>Penetrating the Nigerian market requires a partner who understands the market trends of the country.  At Outdoors.ng, a leading advertising agency in Nigeria, we're more than just marketing specialists – we're cultural guides. <br />Our deep understanding of the Nigerian Market allows us to craft marketing campaigns that connect on a deeper level. We leverage local insights and trends to ensure your brand message hits the right note with your target audience.</p>

            
                    
            
        </div>
      </div>
    </>
  );
};

export default Banner;
