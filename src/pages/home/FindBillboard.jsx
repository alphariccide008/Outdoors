import './Home.css'
import { Link } from "react-router-dom";
import { FaArrowRight} from 'react-icons/fa';
import Getstarted from '../../components/Getstarted';
const findBillboard = () => {
  return (
    <>
        <div className="text-center my-[5%] mx-6 lg:mx-[3%]">
            <h1 className="text-3xl font-bold">
                <i>FIND BILLBOARDS IN NIGERIA</i>
            </h1>
            <p className="py-3 text-[#595959]">
                See our top pick of Billboards visited by most guests
            </p>
            <div className="flex flex-wrap justify-center mt-[4%] my-[2%] text-white">
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill1 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">working</h1>
                <p
                    className="text-sm text-[#EFEFEF]"
                    style={{ fontSize: "12px" }}
                >
                    120 Billboards
                </p>
                </div>
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill2 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">working</h1>
                <p
                    className="text-sm text-[#EFEFEF]"
                    style={{ fontSize: "12px" }}
                >
                    120 Billboards
                </p>
                </div>
                <div
                className="w-full sm:w-1/4 mx-2 mb-3 flex flex-col items-center bill3 border px-4 pt-[7%] rounded-lg"
                style={{ height: "200px" }}
                >
                <h1 className="text-2xl font-bold">working</h1>
                <p
                    className="text-sm text-[#EFEFEF]"
                    style={{ fontSize: "12px" }}
                >
                    120 Billboards
                </p>
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
            <div className="lg:mx-[11%] mt-4">
                <Link
                href="#"
                className="flex items-center justify-center w-full  px-10 py-2 border border-[#00A991] text-[#00A991] hover:bg-[#00A991] hover:text-white rounded-2xl"
                >
                View All <FaArrowRight className="ml-2" />
                </Link>
            </div>
        </div>
        <Getstarted/>

    </>
  )
}
export default findBillboard