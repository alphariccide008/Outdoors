
import { Link } from 'react-router-dom'

import logo1 from  '../assets/images/logos/oracle.png'
import logo2 from  '../assets/images/logos/FedEx.png'
import logo3 from  '../assets/images/logos/Letschat.png'
import logo4 from  '../assets/images/logos/Sairtek.png'
import logo5 from  '../assets/images/logos/Fastestcakes.png'
import logo6 from  '../assets/images/logos/Quickqart.png'
import logo7 from  '../assets/images/logos/ICM.png'





const Clients = () => {
  return (
    <>
        <div className="items-center py-7">
            <div className='md:flex hidden mx-[13%] '>
                <div className='w-1/2 text-end pb-3 pt-2'>Clients that trusts Us</div>
                <div className='w-1/2 text-end'>
                    <Link to='' className='underline text-sm text-[#0A6535]'style={{fontSize:'13px'}}>Click to View All</Link>
                </div>
            </div>
           <div className='justify-center md:flex hidden  gap-5 lg:gap-12'>
           <img src={logo1} alt="oracle" style={{height:'30px', width:'8%'}} className='grayscale mt-3' />
            <img src={logo2} alt="FedEx" style={{height:'55px', width:'7%'}} className='grayscale' />
            <img src={logo3} alt="Letschat" style={{height:'25px', width:'7%'}} className='grayscale mt-4' />
            <img src={logo4} alt="sairtek" style={{height:'40px', width:'10%'}} className='grayscale mt-2' />
            <img src={logo5} alt="Fasktestcakes" style={{height:'50px', width:'7%'}} className='grayscale ' />
            <img src={logo6} alt="Quickqart" style={{height:'40px', width:'10%'}} className='grayscale mt-2' />
            <img src={logo7} alt="ICM" style={{height:'45px', width:'10%'}} className='grayscale mt-2' />
           </div>

           {/* Mobile view  */}
           <div className=' mx-[13%] md:hidden '>
                <div className=' text-center pb-3 pt-2'>Clients that trusts Us</div>
                
            </div>
           <div className='justify-center md:hidden flex  gap-5 lg:gap-12'>
           <img src={logo1} alt="oracle" style={{height:'30px', width:'8%'}} className='grayscale mt-3' />
            <img src={logo2} alt="FedEx" style={{height:'55px', width:'9%'}} className='grayscale' />
            <img src={logo3} alt="Letschat" style={{height:'30px', width:'10%'}} className='grayscale mt-3' />
            <img src={logo4} alt="sairtek" style={{height:'40px', width:'10%'}} className='grayscale mt-2' />
            <img src={logo5} alt="Fasktestcakes" style={{height:'54px', width:'9%'}} className='grayscale ' />
            <img src={logo6} alt="Quickqart" style={{height:'45px', width:'11%'}} className='grayscale mt-2' />
            <img src={logo7} alt="ICM" style={{height:'45px', width:'10%'}} className='grayscale mt-2' />
           </div>
            
        </div>
    </>
  )
}
export default Clients