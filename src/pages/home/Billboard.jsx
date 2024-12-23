import { Link } from "react-router-dom"

const Billboard = () => {
  return (
    <>
        <div className="relative  lg:px-[20%] px-[6%] text-center ">
            
        <div className="justify-center mt-[-9%]  items-center py-[2%]">
            
            <div className=" hidden md:block  bg-white rounded-lg border">
                <h3 className="text-sm font-semibold pt-4">Search through 5103  Billboards in Nigeria</h3>
                <div className="flex justify-center items-center py-[2%]">
            <div className="flex py-[2%] justify-center items-center w-3/4">
                <div className="w-1/3 border-color pr-4">
                <label htmlFor="" className="text-black block text-center" style={{ fontSize: "13px" }}>
                    Select Type
                </label>
                <select
                    name=""
                    id=""
                    className="w-full text-center  border-gray-300 rounded-md"
                    style={{ fontSize: "12px" }}
                >
                    <option value="">Choose Type</option>
                </select>
                </div>
                <div className="w-1/3 border-color mx-2 px-2">
                <label htmlFor="" className="text-black block text-center" style={{ fontSize: "13px" }}>
                    Select State
                </label>
                <input
                    type="text"
                    placeholder="Enter state"
                    className="w-full text-center   rounded-md"
                    style={{ fontSize: "12px" }}
                />
                </div>
                <div className="w-1/3 mx-2">
                <label htmlFor="" className="text-black block text-center" style={{ fontSize: "13px" }}>
                    Select State Area
                </label>
                <input
                    type="text"
                    placeholder="Enter State Area"
                    className="w-full text-center  rounded-md"
                    style={{ fontSize: "12px" }}
                />
                </div>
                <div className="w-1/3 ml-9">
                <Link
                    to="#"
                    className="py-2 text-center lg:pl-4 pl-14 lg:pr-3 text-white bg-[#0A6535] rounded-3xl block"
                    style={{ fontSize: "10px" }}
                >
                    Find Billboards
                </Link>
                </div>
            </div>
        </div>

            </div>
            <div className="md:hidden mt-[20%]">
               <form action="">
                <div className="flex mb-3">
                    <div className="flex-col my-2 w-1/2 text-start">
                        <label htmlFor="" className="font-semibold" style={{fontSize:'12px'}}>Select Type</label><br />
                        <select name="" className="border w-full bg-[#E6E6E6] mr-1 py-3 rounded-xl" id="" style={{fontSize:'12px'}}>
                            <option value="" >Select Type</option>
                        </select>
                    </div>
                    <div className="w-1/2 my-2 text-start">
                    <label htmlFor="" className="font-semibold" style={{fontSize:'13px'}}>Select Type</label><br />
                        <select name="" id="" className="border bg-[#E6E6E6] ml-1 rounded-xl  w-full py-3" style={{fontSize:'12px'}}>
                            <option value=""className="" >Select Type</option>
                        </select>
                    </div>
                </div>
                <div className="mb-5 text-start">
                    <label htmlFor="" className="font-semibold " style={{fontSize:'13px'}}>Select Type</label><br />
                        <select name="" id="" className="border bg-[#E6E6E6] rounded-xl w-full py-3" style={{fontSize:'12px'}}>
                            <option value="">Select Type</option>
                        </select>
                    </div>
                    <button type="submit" className="bg-[#0A6535] mb-4 rounded-xl py-[3%]  text-white  w-full" style={{fontSize:'13px'}}>Search </button>
               </form>
            </div>
        </div>
        <div className="text-start my-3">
            <h1 className="text-[#66666633] " style={{fontSize:'25px'}}>Outdoors.ng a top marketing and advertising agency in Nigeria, specializes in data driven marketing solutions tailored to boost your brands visibility and achieve measurable results.</h1>
        </div>
        </div>
    </>
  )
}
export default Billboard