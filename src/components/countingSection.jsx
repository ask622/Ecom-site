import React from 'react';
const  CountingSection = () =>{
 return(
    <div>
        <div className=' bg-black h-40 flex items-center justify-center  p-5 overflow-hidden  mt-10 w-full'>
            <div className='bg-[#ba7894] w-40 h-40 rounded-full -ml-80  mt-40'>
         {/*-----for circle--------*/}
            </div>
            <div className='flex flex-row'>
            <div className='px-50' >
                <h1 className='text-4xl text-[#FBF2E0]  font-bold'>502</h1>
                <p className='font-bond text-[#FBF2E0] '>Projects Done</p>
            </div>
            <div className='px-50'>
                <h1 className='text-4xl text-[#FBF2E0]  font-bold'>10+</h1>
                <p className='font-bond text-[#FBF2E0] '>Years Of Experience</p>
            </div>
            <div className='px-50'>
                <h1 className='text-4xl text-[#FBF2E0]  font-bold'>273+</h1>
                <p className='font-bond text-[#FBF2E0] '>Client Served</p>
            </div>
            </div>
         </div>
    </div>
 );
};
 export default CountingSection;