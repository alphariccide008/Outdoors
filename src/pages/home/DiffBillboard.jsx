const DiffBillboard = () => {
  return (
    <>
    {/* This ought to be a dynamic link coming from the Database  */}
        <div className="md:flex text-center mt-10 mx-[5%] md:mx-[10%]">
            <div className="flex-col md:w-1/4 mx-2 border text-[#0A6535] rounded-md hover:bg-[#0A6535] hover:text-white  border-[#0A6535] p-3 ">
                <span>Billboards in Lagos</span>
            </div>
            <div className="flex-col md:w-1/4 mx-2 border  text-[#0A6535] rounded-md hover:bg-[#0A6535] hover:text-white  border-[#0A6535] p-3">
                <span>Billboards in Port Harcourt</span>
            </div>
            <div className="flex-col md:w-1/4 mx-2 border  text-[#0A6535] rounded-md hover:bg-[#0A6535] hover:text-white  border-[#0A6535] p-3">
                <span>Billboards in Abuja</span>
            </div>
            <div className="flex-col md:w-1/4 mx-2 border  text-[#0A6535] rounded-md hover:bg-[#0A6535] hover:text-white  border-[#0A6535] p-3">
                <span>Billboards in Kano</span>
            </div>
          
        </div>
    
    </>
  )
}
export default DiffBillboard