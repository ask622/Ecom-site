import React from 'react';
const  CountingSection = () =>{
 return(
    <div>
        <div className=' bg-black h-25 flex items-center justify-center  p-1 overflow-hidden  mt-10 w-100%'>
            <div className='bg-[#ba7894] w-30 h-30 rounded-full -ml-30  mt-20'>
            </div>
            <div className='flex flex-row gap-20'>
            <div className='px-25 ' >
                <h1 className='text-2xl text-[#FBF2E0]  font-bold'>502</h1>
                <p className='font-bond  text-[#FBF2E0] '>Projects Done</p>
            </div>
            <div className='px-25'>
                <h1 className='text-2xl text-[#FBF2E0]  font-bold'>10+</h1>
                <p className='font-bond text-[#FBF2E0] '>Years Of Experience</p>
            </div>
            <div className='px-25'>
                <h1 className='text-2xl text-[#FBF2E0]  font-bold'>273+</h1>
                <p className='font-bond text-[#FBF2E0] '>Client Served</p>
            </div>
            </div>
         </div>
    </div>
 );
};
 export default CountingSection;