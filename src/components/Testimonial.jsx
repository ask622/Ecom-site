import React from 'react';
import Img0 from '../assets/test/start.png';
import Img1 from '../assets/test/main.png'
import Img2 from '../assets/test/end.png';
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";
const Testimonial = () => {
    return (
     <div >
         <div className='flex flex-col items-center justify-center mt-15'>
            <p className='text-[#ba7894] text-lg'>TESTINOMIALS</p>
            <h1 className='text-3xl font-bold mt-5'>What Our Customers Say</h1>
         </div>
        <div className='bg-[#422A3C] w-300 h-110 m-5 ml-80 rounded-4xl '>
            <div className='flex flex-row items-center justify-between p-15'>
          <img src={Img1} alt="Start" className='w-60 h-60 ml-40 object-content  '/>
          </div>
          <div className='ml-140 -mt-70'>
            <img src={Img0} alt="Start" className='w-10 h-10 ' />
            <div className='flex flex-col p-5 '>
            <p className='text-white text-lg p-1'>Leslie Alexander</p>
            <p className='text-white text-md p-1'>Moncton, Canada</p>
            <h1 className='text-white font-bold text-3xl p-1'>Neque porro quisquam est qui dolum</h1>
            <p className='text-white text-md p-1'>“ It is a long established fact that a reader will be tracked distracted<br/>
             by the readable content of a page is when looking at its layout. The <br/>
             point of using Lorem of distribution it look like readable English “</p>
            </div>
            <img src={Img2} alt="End" className='w-10 h-10 mb-7 ml-130' />
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mt-5 gap-4'>
        <IoIosArrowDropleft className='text-5xl cursor-pointer text-black-400  hover:text-blue-500 transition-colors duration-200 cursor-pointer' />
        <IoIosArrowDropright className='text-5xl cursor-pointer  hover:text-blue-500 transition-colors duration-200 cursor-pointer' />
        </div>
    </div>
    );
}
export default Testimonial;