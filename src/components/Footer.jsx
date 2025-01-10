import footerImg from "../assets/icons/logo.png";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationArrow, 
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
  FaInstagram,
  FaInstagramSquare
 } from 'react-icons/fa'

const Footer = () => {
  
  return (
    <footer className="w-full mt-10 text-white bg-[#000000] sm:px-16 pb-8  mb-3 ">
    
     <div>
     <div className=" md:flex hidden pt-7  pb-5 md:justify-center md:items-center mx-[5%] ">
          <div className="flex-col md:w-1/4">
            <img src={footerImg} style={{height: '35px'}} alt="" />
          </div>
          <div className="flex-col md:w-1/4">
            <h3 className="font-semibold">Get Updates!</h3>
            <h5 className="text-sm text-[#5A5A5A]">Subscribe to our newsletter</h5>
          </div>
          <div className="flex-col lg:px-5 md:w-1/2">
            <input type="text" className="py-2 px-16 rounded-md" placeholder=" Your email address" />
            <button className="text-white py-2 px-10 rounded-lg absolute  ml-[-10px] bg-[#36B24A]">Subscribe</button>
          </div>
      </div>
      <div className="md:flex hidden mb-5 text-white md:justify-center  md:items-center mx-[5%]">
        <div className="flex-col md:w-1/3 pt-[1%] ">
          <h4 className="font-semibold pb-2">Helpful Links</h4>
          <ul className="text-sm space-y-4 text-[#FAE6E8]" style={{fontSize: '12px'}}>
            <li>Login</li>
            <li>Sign Up</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Term & Condition</li>
          </ul>
        </div>
        <div className="flex-col md:w-1/3 pt-[6%]">
        <h4 className="font-semibold pb-2">Other Services</h4>
          <ul className="text-sm space-y-4 text-[#FAE6E8]  " style={{fontSize: '12px'}}>
            <li>360 <span className="absolute mt-[-4px]">o</span> Advertising</li>
            <li>Creative Communications</li>
            <li>Public Relations</li>
            <li>SEO,SEM</li>
            <li>Experimental Marketing</li>
            <li>Digital Marketing</li>
            <li>Media Planing and Buying</li>
            <li>Branding</li>
          </ul>
        </div>
        <div className="flex-col md:w-1/3 mt-[-5%]">
          <h4 className="font-semibold pb-2">Contact Us</h4>
          <ul className="text-sm space-y-4 text-[#FAE6E8] " style={{fontSize: '12px'}}>
            <li className="flex"><span className="mt-[5px] mr-[4px]"><FaEnvelope/></span>+info@outdoors.ng</li>
            <li className="flex"><span className="mt-[5px] mr-[4px]"><FaEnvelope/></span>enquiry@outdoors.ng</li>
            <li className="flex"><span className="mt-[5px] mr-[4px]"><FaPhone/></span>+ (234) 906 000 5559</li>
            <li className="flex"><span className="mt-[5px] mr-[4px]"><FaPhone/></span>+ (234) 906 000 5559</li>
           
          </ul> 
        </div>
        
        
        <div className="flex-col md:w-1/3  mt-[-14%]">
        <h4 className="font-semibold] pb-2">Address</h4>
          <ul className="text-sm space-y-4 text-[#FAE6E8] " style={{fontSize: '12px'}}>
            <li className="flex"><span className="mt-[5px] mr-[4px]"><FaLocationArrow/></span>29 ogundana St, Allen 101233, Ikeja, Lagos</li>
           
          </ul>
        </div>
        
      </div>
      <div className="md:hidden flex flex-col items-center justify-center">
         <div className="flex justify-center py-4">
             <img src={footerImg} style={{ height: '35px' }} alt="" />
         </div>
        <div className="flex items-center justify-center mx-2 text-center mb-4">
          <input type="text" className="py-2 px-10 rounded-md" placeholder="Your email address"/>
          <button className="text-white py-2 px-5 rounded-lg ml-[-10px] bg-[#36B24A]">Subscribe</button>
        </div>
      </div>


    <hr className="py-3 mx-[3%]"/>
    <div className="justify-center flex-col flex items-center mx-[40%] mb-5">
      <ul className="flex gap-10  text-[#F39C12] items-center text-center" style={{fontSize:'21px'}}>
        <li><FaInstagram/></li>
        <li><FaYoutube/></li>
        <li><FaLinkedinIn/></li>
        <li><FaTiktok/></li>
        <li><FaPinterest/></li>
        <li><FaTwitter/></li>
      </ul>
    </div>
    <hr className=" mx-[3%]"/>
    <div className="py-0 hidden text-center md:flex">
      <p className="font-bold"  style={{fontSize:'238px',opacity:'10%'}}>OUTDOORS</p>
    </div>
    <div className="py-0 text-center md:hidden">
      <p className="font-bold"  style={{fontSize:'70px',opacity:'10%'}}>OUTDOORS</p>
    </div>
     </div>
    </footer>
  );
};
export default Footer;



// divide-y divide-zinc-500