import './TermsofUse.css';
import { FaLock } from 'react-icons/fa';


const TermsofUse = () => {
    return (
    <>
        <div className="relative mx-[5%]  md:mx-[10%] md:pt-[10%] pt-[20%]">

            <div className="flex text-[40px] md:text-[64px]">
                <div className="flex-col text-center md:text-start w-full md:w-1/2">
                    <p className='font-semibold'>Terms Of Use </p>
                </div>
                <div className="md:flex hidden flex-col  items-end text-[#042656]  md:w-1/2">
                    <FaLock />
                </div>
            </div>

            <div className=' mt-7 lg:mt-24 flex'>
                <div className="hidden md:block flex-col md:w-1/4  p-4">
                    <p className="text-[16px] py-[5%]">Changes to website terms</p>
                    <p className="text-[16px] pb-[8%]">Registration may be required to access</p>
                    <p className="text-[16px] pb-[8%]">UK Modern Slavery Policy</p>
                    <p className="text-[16px] pb-[8%]">Complaint Policy</p>
                    <p className="text-[16px] pb-[8%]">Terms and Condition</p>
                </div>
                <div className="flex-col md:w-full mb-[4%] md:text-start text-center md:pl-[5%]">
                    <p className='text-[14px] lg:text-[18px] pt-[4%]'>
                    Please carefully review these Terms of Use, crucial for understanding your legal rights and obligations, including various limitations and exclusions. By accessing the site ("Site") presented by Premium E-commerce Support Services Ltd ("Premium E-commerce Support Services Ltd," "we," "us") and related entities, you ("you" or "your") indicate that you have read, comprehend, and agree to be bound by these Terms of Use ("Terms" or "Agreement"), whether or not you are a registered member of the Site. Your access to the Site is contingent upon your acceptance of and adherence to all terms, conditions, notices, and disclaimers outlined in this Agreement and elsewhere on the Site.*

                    </p>
                    <div className='mt-[8%]'>
                        <p className='text-[24px]  md:text-[32px] font-semibold py-[3%]'>Changes to the Website Terms</p>
                        <p className='text-[14px] md:text-[18px]'>We may alter the Website Terms periodically by posting an updated version on the Site. Continuing to use the Site implies your acceptance of the updated Terms of Use and your agreement to be bound by them.</p>
                    </div>

                    <div className='mt-[8%]'>
                        <p className=' text-[24px] lg:text-[32px] font-semibold py-[3%]'>Registration may be required to access</p>
                        <p className='md:text-[18px] text-[14px]'>Accessing certain parts of the Site may necessitate registration. Any personal information you provide will be governed by our privacy policy [here](privacy-policy-link).
                        <span className='pt-[3%]'>If you register, maintain the confidentiality of your details; you are accountable for any Site access using your registration details, even if by another individual.</span>
                        </p>
                    </div>
                    <div className='mt-[8%]'>
                        <p className='text-[24px] md:text-[32px] font-semibold py-[3%]'>No unlawful, infringing, or offensive activity</p>
                        <p className='text-[14px]  md:text-[18px]'>Do not post or transmit information or material via the Site that breaches laws or regulations, infringes on third-party rights or privacy, or goes against relevant standards or codes. You must not enable another person to do so.</p>
                    </div>
                    <div className='mt-[8%]'>
                        <p className='text-[24px] md:text-[32px] font-semibold py-[3%]'>No viruses or other interference</p>
                        <p className='text-[14px] md:text-[18px] '>Avoid transmitting viruses or using the Site in ways that tamper with its operation, inhibit other users, defame, harass, or contain inappropriate material. Do not enable others to do so  </p>
                        <p className='py-[2%] text-[14px]  md:text-[18px] '>We may suspend or terminate your access</p>
                        <p className='text-[14px] md:text-[18px] '>If, in our reasonable opinion, you breach these Terms of Use, we reserve the right to suspend or terminate your access to all or any part of the Site at any time.</p>
                       
                    </div>
                    <div className='mt-[8%]'>
                        <p className='text-[24px] md:text-[32px] font-semibold py-[3%]'>Changes to the Website Terms</p>
                        <p className='text-[14px] md:text-[18px]'>We may alter the Website Terms periodically by posting an updated version on the Site. Continuing to use the Site implies your acceptance of the updated Terms of Use and your agreement to be bound by them.</p>
                    </div>
                    
                    <div className='mt-[8%]'>
                        <p className='text-[24px] md:text-[32px] font-semibold py-[3%]'>No viruses or other interference</p>
                        <p className='text-[14px] md:text-[18px] '>Avoid transmitting viruses or using the Site in ways that tamper with its operation, inhibit other users, defame, harass, or contain inappropriate material. Do not enable others to do so  </p>
                        <p className='py-[2%] text-[14px] md:text-[18px] '>We may suspend or terminate your access</p>
                        <p className='text-[18px] '>If, in our reasonable opinion, you breach these Terms of Use, we reserve the right to suspend or terminate your access to all or any part of the Site at any time.</p>
                       
                    </div>

                    <div className='mt-[8%]'>
                        <p className='text-[24px] md:text-[32px] font-semibold py-[3%]'>No viruses or other interference</p>
                        <p className='text-[14px] md:text-[18px] '>Avoid transmitting viruses or using the Site in ways that tamper with its operation, inhibit other users, defame, harass, or contain inappropriate material. Do not enable others to do so  </p>
                        <p className=' py-[2%] text-[14px] md:text-[18px] '>We may suspend or terminate your access</p>
                        <p className='text-[14px] md:text-[18px] '>If, in our reasonable opinion, you breach these Terms of Use, we reserve the right to suspend or terminate your access to all or any part of the Site at any time.</p>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    
    </>
  )
}
export default TermsofUse