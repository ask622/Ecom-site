import React from 'react';
import Img0 from '../assets/test/start.png';
import Img1 from '../assets/test/main.png';
import Img2 from '../assets/test/end.png';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";

const Testimonial = () => {
  return (
    <div className="px-4 py-10">
      {/* Heading */}
      <div className="flex flex-col items-center justify-center text-center mb-8">
        <p className="text-[#ba7894] text-sm md:text-md">TESTIMONIALS</p>
        <h1 className="text-lg md:text-xl font-bold mt-2">What Our Customers Say</h1>
      </div>

      {/* Testimonial Card */}
      <div className="bg-[#422A3C] w-full max-w-5xl mx-auto rounded-3xl p-6 md:p-10 flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Customer Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img src={Img1} alt="Customer" className="w-40 h-40 object-cover rounded-full" />
        </div>

        {/* Testimonial Content */}
        <div className="w-full md:w-2/3 relative">
          <img src={Img0} alt="Quote Start" className="w-5 h-5 absolute -top-3 left-0" />
          <div className="text-white space-y-2">
            <p className="font-semibold">Leslie Alexander</p>
            <p className="text-sm">Moncton, Canada</p>
            <h1 className="font-bold text-lg">Neque porro quisquam est qui dolum</h1>
            <p className="text-sm">
              “ It is a long established fact that a reader will be tracked distracted
              by the readable content of a page is when looking at its layout. The
              point of using Lorem of distribution it look like readable English “
            </p>
          </div>
          <img src={Img2} alt="Quote End" className="w-5 h-5 absolute -bottom-3 right-0" />
        </div>
      </div>

      {/* Arrows */}
      <div className="flex justify-center mt-6 gap-4">
        <IoIosArrowDropleftCircle className="text-3xl text-gray-500 hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
        <IoIosArrowDroprightCircle className="text-3xl text-gray-500 hover:text-blue-500 transition-colors duration-200 cursor-pointer" />
      </div>
    </div>
  );
};

export default Testimonial;
