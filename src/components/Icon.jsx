import React from 'react';
import Img1 from '../assets/icon/1.jpg';
import Img2 from '../assets/icon/2.jpg';
import Img3 from '../assets/icon/3.jpg';
import Img4 from '../assets/icon/4.jpg';
import Img5 from '../assets/icon/5.jpg';
import Img6 from '../assets/icon/6.jpg';
import { IoIosArrowBack, IoIosArrowForward  } from "react-icons/io";
const Icon = () => {
    return(
        <div className='flex flex-row justify-center items-center  gap-25 mt-10 mb-50 '>
            <div>
                < IoIosArrowBack className=' text-black hover:text-[#b21858] cursor-pointer text-4xl' />
            </div>
           <div className='   w-40 h-30'>
           <img src={Img1} alt="Icon" className="w-60 h-30 object-cover opacity-80" />
           </div>
           <div className=' w-40 h-30'>
           <img src={Img2} alt="Icon" className="w-60 h-30 object-cover opacity-80" />
           </div>
           <div className=' w-40 h-30'>
           <img src={Img3} alt="Icon" className="w-60 h-30  object-cover opacity-80" />
           </div>
           <div className=' w-40 h-30'>
           <img src={Img4} alt="Icon" className="w-60 h-30  object-cover opacity-80" />
           </div>
           <div className=' w-40 h-30'>
           <img src={Img5} alt="Icon" className="w-60 h-30 object-cover opacity-80" />
           </div>
           <div className=' w-40 h-30'>
           <img src={Img6} alt="Icon" className="w-60 h-30  object-cover opacity-80" />
           </div>
           <div>
                < IoIosArrowForward className=' text-black hover:text-[#b21858] cursor-pointer text-4xl' />
            </div>
        </div>
    );
};
export default Icon;