import { FaStar  , FaStarHalfAlt} from "react-icons/fa"

const Overview = () => {
  return (
    <>
        <div className=" mx-[10%] mt-[10%]">
        <div className="flex items-center space-x-4 flex-wrap">
  <div className="text-[40px] text-[#00A991] w-auto text-center">OVERVIEW</div>
  <div className="flex-1 h-[2px] bg-[#00A991]"></div>
  <div className="w-auto px-2 flex items-center space-x-1">
    <FaStar className="text-[#00A991] text-2xl" />
  </div>
</div>

            <div className="md:flex mt-[5%]">
                <div className="flex flex-col items-center justify-center md:w-1/2 m-3 py-8 border border-[#E6E6E6] p-4 text-center">
                    <h1 className="text-lg font-bold" style={{fontSize:'16px'}}>Google</h1>
                    <h5 className="text-sm mt-2 py-2 text-[#7D7E79]" style={{fontSize:'12px'}}>
                        Aims to provide users with a decentralized alternative to traditional banking, Aims to provide users with a
                        decentralized alternative to traditional banking, Aims to provide users with a decentralized alternative to
                        traditional banking.
                    </h5>
                    <div className="flex items-center justify-center mt-2">
                        {/* Star Rating */}
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <p className="py-3 text-sm mt-2 text-[#7D7E79]" style={{fontSize:'12px'}}>John Doe</p>
                    <p className="text-sm mt-2 text-[#7D7E79]" style={{fontSize:'12px'}}>Product Manager</p>
                </div>
                <div className="flex flex-col items-center justify-center md:w-1/2 m-3 py-8 border border-[#E6E6E6] p-4 text-center">
                    <h1 className="text-lg font-bold" style={{fontSize:'16px'}}>Google</h1>
                    <h5 className="text-sm mt-2 py-2 text-[#7D7E79]" style={{fontSize:'12px'}}>
                        Aims to provide users with a decentralized alternative to traditional banking, Aims to provide users with a
                        decentralized alternative to traditional banking, Aims to provide users with a decentralized alternative to
                        traditional banking.
                    </h5>
                    <div className="flex items-center justify-center mt-2">
                        {/* Star Rating */}
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <p className="py-3 text-sm mt-2 text-[#7D7E79]" style={{fontSize:'12px'}}>John Doe</p>
                    <p className="text-sm mt-2 text-[#7D7E79]" style={{fontSize:'12px'}}>Product Manager</p>
                </div>
                <div className="flex flex-col items-center justify-center md:w-1/2 m-3 py-8 border border-[#E6E6E6] p-4 text-center">
                    <h1 className="text-lg font-bold" style={{fontSize:'16px'}}>Google</h1>
                    <h5 className="text-sm mt-2 py-2 text-[#7D7E79]" style={{fontSize:'12px'}}>
                        Aims to provide users with a decentralized alternative to traditional banking, Aims to provide users with a
                        decentralized alternative to traditional banking, Aims to provide users with a decentralized alternative to
                        traditional banking.
                    </h5>
                    <div className="flex items-center justify-center mt-2">
                        {/* Star Rating */}
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStar className="text-yellow-500" />
                        <FaStarHalfAlt className="text-yellow-500" />
                    </div>
                    <p className="py-3 text-sm mt-2 text-[#7D7E79]" style={{fontSize:'12px'}}>John Doe</p>
                    <p className="text-sm mt-2 text-[#7D7E79]" style={{fontSize:'12px'}}>Product Manager</p>
                </div>
                
                
            </div>
            
        </div>
    </>
  )
}
export default Overview