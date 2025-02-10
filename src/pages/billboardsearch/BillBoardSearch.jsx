
import Billboard from '../home/Billboard'
import './BillBoardSearch.css'
import boardImg from '../../assets/images/billboardimg/Billboardimage.jpeg'
import { HiLocationMarker } from "react-icons/hi";

const BillBoardSearch = () => {
    const slides = [
        { id: 1, image: boardImg, header:'Portrait Billboard', bodyOf: "Along Airport Road, Aluu Junction ftf Airport" },
        { id: 2, image: boardImg, header:'Portrait Billboard', bodyOf: "Along Airport Road, Aluu Junction ftf Airport" },
        { id: 3,image: boardImg, header:'Portrait Billboard', bodyOf: "Along Airport Road, Aluu Junction ftf Airport" },
       
      ];

  return (
    <>
    <div className="billboard-banner">
      <div className='text-center md:pt-[18%] pt-[30%] pb-5 lg:pb-10 lg:mx-[20%]'>
         <h1 className='lg:text-[37px] text-[30px] font-semibold text-[#D9D9D9] pb-5'>Billboards</h1>
         <div className="flex justify-center items-center mt-10">
        </div>
      </div>
    </div>
    <Billboard/>
    <div className="md:flex p-3 mx-[4%] relative">
        {slides.map((slide) => (
            <div className="relative  border-[#B0E4DD]  flex-col flex-wrap md:w-1/3 mx-2 my-7 rounded-lg border py-6 px-4 ">
            <div className="absolute right-0 m-[7%] md:m-[5%]">
            <button className="bg-green-700 text-white p-2 rounded-2xl">Available</button>
            </div>
            <img src={slide.image} className='rounded-lg pb-3' alt="" />
            <p  className=' text-[20px] md:text-[32px]'>{slide.header} </p>
            <p className='flex text-[12px] py-2 md:text-[16px] text-[#595959]'><HiLocationMarker className='mr-2 mt-1'/> Rivers, Airport Road</p>
            <p className="text-[16px] pb-4 text-[#595959]">{slide.bodyOf}</p>
            </div>
            ))}
        </div>
    
    
    </>
  )
}
export default BillBoardSearch