import React from 'react';
import Img from '../assets/Gall/backimg.png';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SingleSidebar = () => {
    return (
        <section
            className="h-150 bg-cover bg-center flex flex-col items-center justify-center text-center relative px-4"
            style={{ backgroundImage: `url(${Img})` }}
        >
            {/* Text Heading */}
            <h1 className='text-white text-xl sm:text-3xl md:text-4xl font-bold mb-4'>
                Letting your true beauty shine
            </h1>

            {/* Book Button */}
            <button className='border border-white text-white px-4 py-1 rounded hover:bg-[#b31898] transition-all duration-300'>
                Book Now
            </button>

            {/* Left Arrow */}
            <div className='absolute left-0 bottom-75 sm:left-1 sm:bottom-80'>
                <IoIosArrowBack className='text-white hover:text-[#b21858] cursor-pointer text-3xl' />
            </div>

            {/* Right Arrow */}
            <div className='absolute right-0 bottom-75 sm:right-1 sm:bottom-80'>
                <IoIosArrowForward className='text-white hover:text-[#b21858] cursor-pointer text-3xl' />
            </div>
        </section>
    );
};

export default SingleSidebar;
