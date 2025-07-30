import React from 'react';
import Img1 from '../assets/Gall/blog 1.jpg';
import Img2 from '../assets/Gall/blog 2.jpg';
import Img3 from '../assets/Gall/blog 3.jpg';

const Blog = () => {
  return (
    <div className='bg-[#422A3C] w-full py-12 px-4'>
      <div className='max-w-6xl mx-auto text-center'>
        <h1 className='text-white text-2xl font-bold mb-8'>BLOG</h1>

        <div className='flex flex-wrap justify-center gap-6'>
          {/* Card 1 */}
          <div className='bg-white w-full sm:w-[300px] h-auto rounded-lg overflow-hidden shadow-lg'>
            <img src={Img1} alt='Image' className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h1 className='font-bold text-lg text-[#b21858] mb-1'>Best haircut for 2024 female</h1>
              <p className='text-gray-600 text-sm mb-2'>Haircut | Sophie Ston | Jan 20, 2024</p>
              <p className='text-gray-700 text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='bg-white w-full sm:w-[300px] h-auto rounded-lg overflow-hidden shadow-lg'>
            <img src={Img2} alt='Image' className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h1 className='font-bold text-lg text-[#b21858] mb-1'>Best haircut for 2024 female</h1>
              <p className='text-gray-600 text-sm mb-2'>Haircut | Sophie Ston | Jan 20, 2024</p>
              <p className='text-gray-700 text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='bg-white w-full sm:w-[300px] h-auto rounded-lg overflow-hidden shadow-lg'>
            <img src={Img3} alt='Image' className='w-full h-48 object-cover' />
            <div className='p-4'>
              <h1 className='font-bold text-lg text-[#b21858] mb-1'>Best haircut for 2024 female</h1>
              <p className='text-gray-600 text-sm mb-2'>Haircut | Sophie Ston | Jan 20, 2024</p>
              <p className='text-gray-700 text-sm'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              </p>
            </div>
          </div>
        </div>

        <button className='mt-8 text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#422A3C] transition'>
          View All
        </button>
      </div>
    </div>
  );
};

export default Blog;
