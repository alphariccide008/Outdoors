import { Link } from "react-router-dom";
import { FaArrowRight } from 'react-icons/fa';

const Story = () => {
  return (
    <>
        <div className="text-center py-9 px-[12%]">
            <h3 className="font-bold pb-3">Tell a bigger story with Billboard Advertising</h3>
            <p className="text-sm py-5" style={{fontSize:'13px'}}>In billboard advertising, the ability to tell a compelling and persuasive visual story is key. It not only captures the attention of the commuters but also leaves a positive and lasting impression of your brand in  their minds. Our creative team excels in the art of design, ensuring that your message is not only appealing but also easy to comprehend. We specialize in creating visuals that seamlessly penetrate the subconscious of your target audience, guaranteeing impactful results for your brand.

            </p>
            <div className="lg:mx-[43%] mx-[20%] text-center">
            <Link to="#"
                    className="py-3 text-center flex lg:pl-9 pl-14  lg:pr-3 text-white bg-[#0A6535] rounded-3xl " style={{fontSize: '12px'}}>
                        Get Started  <FaArrowRight className='mt-1 ml-1'/>
            </Link>
            </div>
        </div>
    </>
  )
}
export default Story