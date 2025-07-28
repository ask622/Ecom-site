import React from 'react';
import Img1 from '../assets/Gall/blog 1.jpg';
import Img2 from '../assets/Gall/blog 2.jpg';
import Img3 from '../assets/Gall/blog 3.jpg';
const Blog = () => {
    return (
        <div>
            <div className='flex flex-col items-center justify-center  bg-[#422A3C] w-full h-130'>
               <h1 className='text-white text-2xl  font-bold '>BLOG</h1>
               <div className='flex flex-row  gap-8 mt-5'>
               <div className='bg-white w-85 h-95 mt-5'>
                <img src={Img1} alt='Image' className='object-cover w-85 h-50'/>
                <div className=' p-3'>
                <h1 className='font-bold text-xl text-[#b21858]'>Best haircut for 2024 female</h1>
                <p className='text-lg'>Haircut | Sophie Ston | Jan 20, 2024</p>
                <p>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been </p>
                 </div>
               </div>
               <div className='bg-white w-85 h-95 mt-5'>
                <img src={Img2} alt='Image' className='object-cover w-85 h-50'/>
                 <div className=' p-3'>
                <h1 className='font-bold text-xl text-[#b21858]'>Best haircut for 2024 female</h1>
                <p className='text-lg'>Haircut | Sophie Ston | Jan 20, 2024</p>
                <p>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been </p>
                 </div>
               </div>
               <div className='bg-white w-85 h-95 mt-5'>
                <img src={Img3} alt='Image' className='object-cover w-85 h-50'/>
                    <div className='p-3'>
                <h1 className='font-bold text-xl text-[#b21858]'>Best haircut for 2024 female</h1>
                <p className='text-lg '> Haircut | Sophie Ston | Jan 20, 2024</p>
                <p>Lorem Ipsum is simply dummy text of the printing
                 and typesetting industry. Lorem Ipsum has been </p>
                 </div>
               </div>
               </div>
               <button className='text-white text-lg  mt-5 justify-center items-center'>View All</button>
            </div>
        </div>
    );
};
export default Blog;