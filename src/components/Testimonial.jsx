import React from 'react';
import Img0 from '../assets/test/start.png';
import Img1 from '../assets/test/main.png'
import Img2 from '../assets/test/end.png';
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io";
const Testimonial = () => {
    return (
     <div >
         <div className='flex flex-col items-center justify-center '>
            <p className='text-[#ba7894] text-md'>TESTINOMIALS</p>
            <h1 className='text-xl font-bold mt-2'>What Our Customers Say</h1>
         </div>
        <div className='bg-[#422A3C] w-220 h-90 m-5 ml-45 rounded-4xl '>
            <div className='flex flex-row items-center justify-between  pt-15'>
          <img src={Img1} alt="Start" className='w-40 h-45 ml-40 object-content  '/>
          </div>
          <div className='ml-90 -mt-40'>
            <img src={Img0} alt="Start" className='w-5 h-5 ' />
            <div className='flex flex-col p-3 '>
            <p className='text-white text-md'>Leslie Alexander</p>
            <p className='text-white text-sm p-1'>Moncton, Canada</p>
            <h1 className='text-white font-bold text-xl p-1'>Neque porro quisquam est qui dolum</h1>
            <p className='text-white text-sm p-2'>“ It is a long established fact that a reader will be tracked distracted<br/>
             by the readable content of a page is when looking at its layout. The <br/>
             point of using Lorem of distribution it look like readable English “</p>
            </div>
            <img src={Img2} alt="End" className='w-5 h-5 mb-20 ml-110' />
          </div>
        </div>
        <div className='flex flex-row items-center justify-center mt-5 gap-4'>
        <IoIosArrowDropleftCircle className='text-3xl  cursor-pointer text-black-400  hover:text-blue-500 transition-colors duration-200 cursor-pointer' />
        <IoIosArrowDroprightCircle className='text-3xl cursor-pointer  hover:text-blue-500 transition-colors duration-200 cursor-pointer' />
        </div>
    </div>
    );
}
export default Testimonial;