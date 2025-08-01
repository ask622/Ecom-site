import React from 'react';
import HeroImage from '../assets/Logo/Hero.jpg';
import HeroIcon from '../assets/Logo/HeroIcon.png';
import { FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function HeroSection() {
  return (
    <section
      className="min-h-screen bg-cover bg-center flex items-start lg:items-center py-10 px-4 sm:px-6 lg:px-20"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className=" bg-opacity-50 p-10 sm:p-10 rounded-lg max-w-2xl w-full text-white mt-16 lg:mt-0 ">
        
        {/* Header with Icon */}
        <div className="flex items-center gap-3 mb-4">
          <img src={HeroIcon} alt="Service Icon" className="w-7 h-7" />
          <span className="text-sm sm:text-base lg:text-lg font-medium uppercase text-[#FBF2E0]">
            Hair Salon , Beauty , Masseur
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#FBF2E0] font-bold leading-tight mb-4">
          Find a Service<br /> Close to You
        </h1>

        {/* Subtext */}
        <p className="text-sm sm:text-base mb-6 text-[#FBF2E0] leading-relaxed">
          There are many variations of passages available <br className="hidden sm:block" />
          majority have suffered alteration in some form.
        </p>

        {/* Search Bar */}
        <div className="flex flex-col gap-5 md:flex-row md:items-end px-6  bg-white p-1 rounded-md md:rounded-full text-black w-full max-w-5xl">

          
          {/* Service Input */}
          <div className="flex flex-col w-full md:w-1/3 relative">
            <label className="text-sm font-semibold mb-1">Service Name</label>
            <input
              type="text"
              placeholder="Book your service..."
              className="border-0 border-b-2 text-sm outline-none pr-10 pb-1"
            />
            <FaSearch className="absolute right-2 bottom-2 text-xl text-gray-500" />
          </div>

          {/* Address Input */}
          <div className="flex flex-col w-full md:w-1/3 relative">
            <label className="text-sm font-semibold mb-1">Address</label>
            <input
              type="text"
              placeholder="Where"
              className="border-0 border-b-2 text-sm outline-none pr-10  pb-1"
            />
            <MdLocationOn className="absolute right-2 bottom-2 text-2xl text-gray-500" />
          </div>

          {/* Search Button */}
          <div className="w-full md:w-auto">
            <button 
              className="w-full md:w-30 h-10 ml-0 md:ml-8 mb-1 bg-[#ba7894] hover:bg-[#b21858] text-white rounded-full text-sm flex items-center justify-center transition"

            >
              Search
              <FaSearch className="text-sm" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
