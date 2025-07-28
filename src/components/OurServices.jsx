import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import s1 from '../assets/ourservice/s1.jpg'
import s2 from '../assets/ourservice/s2.jpg'
import s3 from '../assets/ourservice/s3.jpg'
import s4 from '../assets/ourservice/s4.jpg'




const services = [
  {
    title: 'Salon Name',
    desc: 'Brookpark Ext, 27085, North Olmsted, .',
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
]

const Recommanded = () => {
  return (
    <div className='flex flex-col'>
      <div className='text-center'>
        <h2 className='text-lg text-[#ba7894] mt-7'>OUR SERVICES</h2>
        <h1 className='text-3xl font-bold pb-3'>Recommended</h1>
        <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet consectetur. Eu quis enim tempor et proin neque.</p>
      </div>
      <div className='flex flex-row items-center justify-center mt-4 gap-4'>
        <MdKeyboardArrowLeft className='text-4xl cursor-pointer  text-gray-400' />
        <div className='flex '>
          {services.map((service, idx) => (
            <div key={idx} className='rounded-xl w-80 shadow flex flex-col items-start h-110 mx-5'>
              <img src={service.img} alt={service.title} className='w-122 h-50 rounded-t-xl mb-1 object-cover' />
              <div className='flex flex-row gap-1 pb-2'>
                <FaRegStar className='text-[#ba7894]'/>
                <p className='text-[#ba7894]'>4.5</p>
                <h1 className='ml-25 font-bold'>104 reviews </h1>
              </div>
              <h3 className='font-bold mb-2 ml-3'>{service.title}</h3>
              <p className='ml-3 text-sm'>{service.desc}</p>
              <div className='ml-10 mt-5'>
                <button className='border  mt-10 border-[#ba7894] text-[#ba7894] w-60 h-12 rounded-sm  cursor-pointer hover:bg-[#ba7894] hover:text-white transition-all'>Book now</button>
              </div>
            </div>
          ))}
        </div>
        <MdKeyboardArrowRight className='text-4xl cursor-pointer -mr-30 text-gray-400' />
      </div>
    </div>
  )
}

export default Recommanded