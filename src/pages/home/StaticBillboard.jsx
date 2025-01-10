import './Home.css';

const StaticBillboard = () => {
  return (
    <>
      <div className="lg:mx-[10%] mb-24 p-4">
        <div className="md:flex gap-4">
          {/* Left Section */}
          <div
            className="relative hidden md:flex flex-col md:w-1/2 w-full rounded-xl mb-4 md:mb-0 bg-cover bg-center"
            style={{ backgroundImage: `url('/Billboardimage.jpeg')`, minHeight: '600px' }}
          >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

            {/* Content */}
            <div className="relative z-10 text-white text-center p-10 h-full flex flex-col justify-center rounded-xl">
              <h1 className="text-2xl  pt-[60%] font-bold">Static Advert Billboard</h1>
              <p className="text-sm  mt-2 md:mt-4" style={{fontSize:'12px'}}>
              They are those printed billboards on the side of the road. You can use them to target those who are in vehicles, because many customers make their purchasing decisions in vehicles.

              </p>
            </div>
          </div>
          <div
              className="relative md:hidden  my-4 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url('/Billboardimage.jpeg')`, height: '300px' }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 text-white text-center p-10 rounded-xl">
                <h1 className="text-2xl md:text-2 font-bold pt-[20%]">Static Advert Billboard</h1>
                <p className="text-sm  mt-2 md:mt-4" style={{fontSize:'12px'}}>
                They are those printed billboards on the side of the road. You can use them to target those who are in vehicles, because many customers make their purchasing decisions in vehicles.
                </p>
              </div>
            </div>

          {/* Right Section */}
          <div className="flex-col md:w-1/2 w-full space-y-6">
            {/* Billboard 1 */}
            <div
              className="relative bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url('/LED.jpeg')`, height: '300px' }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 text-white text-center p-10 rounded-xl">
                <h1 className="text-2xl md:text-2 font-bold pt-[20%]">LED/Digital advert Billboard</h1>
                <p className="text-sm  mt-2 md:mt-4" style={{fontSize:'12px'}}>
                They are those printed billboards on the side of the road. You can use them to target those who are in vehicles, because many customers make their purchasing decisions in vehicles.
                </p>
              </div>
            </div>

            {/* Billboard 2 */}
            <div
              className="relative bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url('/Mobile.jpeg')`, height: '300px' }}
            >
              {/* Dark overlay */}
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>

              {/* Content */}
              <div className="relative z-10 text-white text-center p-10 rounded-xl">
                <h1 className="text-2xl  pt-[20%] font-bold">Mobile Advert Billboard</h1>
                <p className="text-sm mt-2 md:mt-4" style={{fontSize:'12px'}}>
                They are those printed billboards on the side of the road. You can use them to target those who are in vehicles, because many customers make their purchasing decisions in vehicles.

                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StaticBillboard;
