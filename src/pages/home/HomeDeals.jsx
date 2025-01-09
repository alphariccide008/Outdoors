import './Home.css'
import { Link } from "react-router-dom";
import { FaArrowRight} from 'react-icons/fa';

const HomeDeals = () => {
  return (
    <>
        <div className="lg:mx-[3.5%] ">
            <div className='mx-[10%]'>
                <h1 className="lg:text-3xl text-2xl mt-[15%]  font-bold"><i>OUR TOP <span className="text-[#FD6821]">HOME</span> DEALS</i></h1>
                <p className="text-[#595959]">A quick view of our best outdoors deals</p>
            </div>

        <div className="text-center ">
            <div className="flex flex-wrap justify-center mt-[4%] my-[2%] text-white">
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill1 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-semibold">BRT in Ikeja</h1>
                
                </div>
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill2 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">BRT in Ikeja</h1>
                
                </div>
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill3 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">BRT in Ikeja</h1>
                
                </div>
            </div>
            <div className="flex flex-wrap justify-center text-white mt-2">
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill4 border px-4 py-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">RIVERS</h1>
                <p
                    className="text-sm text-[#EFEFEF]"
                    style={{ fontSize: "12px" }}
                >
                    120 Billboards
                </p>
                </div>
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill5 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">LAGOS</h1>
                <p
                    className="text-sm text-[#EFEFEF]"
                    style={{ fontSize: "12px" }}
                >
                    120 Billboards
                </p>
                </div>
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill6 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">KANO</h1>
                <p
                    className="text-sm text-[#EFEFEF]"
                    style={{ fontSize: "12px" }}
                >
                    120 Billboards
                </p>
                </div>
                </div>
        </div>
        </div>
    </>
  )
}
export default HomeDeals