import React from 'react';
import Img1 from '../assets/Gall/count.png';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Includes = () => {
    return(
        <div>
            <div className='flex flex-row items-center justify-center '>
            <div className='flex flex-col items-start justify-start  pl-15 pb-5 '>
                <p className='text-[#ba7894]  text-lg p-1'>WHAT INCLUDES</p>
                <h1 className='font-bold text-2xl text-black p-1'>The start of the journey</h1>
                <p className='text-sm p-2 '>ServiceMarket.dk was founded in 2021 by two young entrepreneurs who saw a problem <br/>
                with the fragmented service industry in Denmark. There were thousands of small<br/>
                 businesses offering services, but it was difficult for consumers to find them and know <br/>
                 which ones to choose. They developed the idea of creating a platform that would bring all<br/>
                  these service providers together in one place, making it easier for consumers to find what <br/>
                  they need and get their issues resolved quickly and easily. Without having to go to many <br/>
                  different websites, each with their own booking system.
                </p>
                <h1 className='font-bold text-lg text-black p-1'>our Methodology :</h1>
                <div className='flex flex-row'>
                <IoMdCheckmarkCircleOutline className='text-[#ba7894] text-3xl p-1' />
                <div className='flex flex-col'>
                <h1 className='font-bold text-md text-black p-1'>the Assessment Stage</h1>
                <p className='text-sm p-1 flex flex-col'>The point of using Lorem Ipsum is that it has a more- <br/>or-less normal letters.</p>
                  </div>
                  </div>
                  <div className='flex flex-row'>
                <IoMdCheckmarkCircleOutline className='text-[#ba7894] text-3xl p-1' />
                <div className='flex flex-col'>
                <h1 className='font-bold text-md text-black p-1'>the initialisatin Stage</h1>
                <p className='text-sm p-1 flex flex-col'>The point of using Lorem Ipsum is that it has a more- <br/>or-less normal letters.</p>
                  </div>
                  </div>
                  <div className='flex flex-row'>
                <IoMdCheckmarkCircleOutline className='text-[#ba7894] text-3xl p-1' />
                <div className='flex flex-col'>
                <h1 className='font-bold text-md text-black p-1'>the Treatment Stage</h1>
                <p className='text-sm p-1 flex flex-col'>The point of using Lorem Ipsum is that it has a more- <br/>or-less normal letters.</p>
                  </div>
                  </div>
           </div>
                  {/* ------------------------image------- */}
                      <div  className=' -mr-4  ml-15 mb-4'>
                       <img src={Img1} alt="Includes" className='w-170 h-160  object-cover '/>
                      </div>
         </div>
        </div>
    );
};
export default Includes;