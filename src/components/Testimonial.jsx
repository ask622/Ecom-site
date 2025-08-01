import React from 'react';
import Img0 from '../assets/test/start.png';
import Img1 from '../assets/test/main.png';
import Img2 from '../assets/test/end.png';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

const Testimonial = () => {
  return (
    <div className="w-full px-4 sm:px-6">
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-[#ba7894] text-md">TESTINOMIALS</p>
        <h1 className="text-xl font-bold mt-2">What Our Customers Say</h1>
      </div>

      <div className="bg-[#422A3C] w-[880px] lg:h-[360px] m-5 mx-auto rounded-[2rem] relative max-w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center pt-10 px-4 gap-6">
          {/* Main Image */}
          <img
            src={Img1}
            alt="Main"
            className="w-40 h-44 object-cover lg:ml-20"
          />

          {/* Text Content */}
          <div className="mt-5 lg:mt-0 lg:ml-10 px-2 relative">
            {/* Start Quote */}
            <img src={Img0} alt="Start" className="w-5 h-5 mb-2" />

            <div className="flex flex-col">
              <p className="text-white text-md">Leslie Alexander</p>
              <p className="text-white text-sm p-1">Moncton, Canada</p>
              <h1 className="text-white font-bold text-xl p-1">
                Neque porro quisquam est qui dolum
              </h1>
              <p className="text-white text-sm p-2">
                “ It is a long established fact that a reader will be tracked
                distracted
                <br />
                by the readable content of a page is when looking at its layout.
                The <br />
                point of using Lorem of distribution it look like readable
                English “
              </p>
            </div>

            {/* End Quote */}
            <img src={Img2} alt="End" className="w-5 h-5 mt-2 lg:ml-[400px]" />
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex flex-row items-center justify-center mt-5 gap-4 mb-10">
        <IoIosArrowDropleftCircle className="text-3xl cursor-pointer text-black-400 hover:text-blue-500 transition-colors duration-200" />
        <IoIosArrowDroprightCircle className="text-3xl cursor-pointer hover:text-blue-500 transition-colors duration-200" />
      </div>
    </div>
  );
};

export default Testimonial;
