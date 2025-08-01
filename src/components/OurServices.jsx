import React from 'react';
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import s1 from '../assets/ourservice/s1.jpg';
import s2 from '../assets/ourservice/s2.jpg';
import s3 from '../assets/ourservice/s3.jpg';
import s4 from '../assets/ourservice/s4.jpg';

const services = [
  {
    title: 'Salon Name',
    desc: 'Brookpark Ext, 27085, Olmsted, .',
    img: s1
  },
  {
    title: 'Salon Name',
    desc: '2267 Main st, Fort Myers, 33901.',
    img: s2
  },
  {
    title: 'Deluxe room',
    desc: '2267 Main st, Fort Myers, 33901',
    img: s3
  },
  {
    title: 'Meeting room',
    desc: '2267 Main st, Fort Myers, 33901.',
    img: s4
  },
];

const Recommanded = () => {
  return (
    <div className='w-full px-4 md:px-10 flex flex-col'>
      {/* Header Section */}
      <div className='text-center'>
        <h2 className='text-sm sm:text-md text-[#ba7894] mt-7'>OUR SERVICES</h2>
        <h1 className='text-lg sm:text-xl font-bold pb-3'>Recommended</h1>
        <p className='text-xs sm:text-sm text-gray-400 max-w-md mx-auto'>
          Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.
        </p>
      </div>

      {/* Cards Section */}
      <div className='relative mt-6'>
        <div className='flex items-center justify-between'>
          <MdKeyboardArrowLeft className='text-3xl sm:text-4xl cursor-pointer text-gray-400' />

          <div className='flex flex-wrap justify-center gap-6 w-full px-2 sm:px-4 md:px-0 overflow-x-auto'>
            {services.map((service, idx) => (
              <div
                key={idx}
                className='w-64 sm:w-60 rounded-xl shadow-md flex flex-col items-start bg-white flex-shrink-0'
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className='w-full h-36 sm:h-32 rounded-t-xl object-cover'
                />
                <div className='flex flex-row gap-1 pb-2 mt-3 ml-5'>
                <FaRegStar className='text-[#ba7894] '/>
                <p className='text-[#ba7894]'>4.5</p>
                <h1 className='ml-20 font-bold'>104 reviews </h1>
              </div>
                <h3 className='font-bold text-base mt-2 mb-1 ml-4'>{service.title}</h3>
                <p className='ml-4 text-sm text-gray-500'>{service.desc}</p>
                <div className='ml-10 mt-5'>
                <button className='border border-[#ba7894] text-[#ba7894] w-37 h-10 rounded-sm  cursor-pointer hover:bg-[#ba7894] hover:text-white transition-all'>Book now</button>
              </div>
              </div>
            ))}
          </div>

          <MdKeyboardArrowRight className='text-3xl sm:text-4xl cursor-pointer text-gray-400' />
        </div>
      </div>
    </div>
  );
};

export default Recommanded;
