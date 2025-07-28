import React from 'react';
import HeroImage from '../assets/Logo/Hero.jpg';
import HeroIcon from '../assets/Logo/HeroIcon.png';
import { FaSearch } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

export default function HeroSection() {
  return (
    <section
      className="h-screen bg-cover bg-center flex items-start lg:items-center py-10 px-6 lg:px-20"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className=" bg-opacity-50 p-8 rounded-lg max-w-2xl text-white mt-16 lg:mt-0">
        <div className="flex items-center gap-3 mb-4">
          <img src={HeroIcon} alt="Service Icon" className="w-10 h-10" />
          <span className="text-lg lg:text-xl font-medium uppercase">
            Hair Salon , Beauty , Masseur
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
          Find a Service<br /> Close to You
        </h1>
        <p className="text-base sm:text-lg mb-6 leading-relaxed">
          There are many variations of passages available <br/> majority have suffered alteration in some form.
        </p>

        <div className="flex flex-col  text-black sm:flex-row gap-4 bg-white p-4 px-10  w-270 rounded-full">
          <div className="flex-1 flex flex-col  ">
            <label className="text-xl font-semibold mb-1">Service Name</label>
            <input
              type="text"
              placeholder="Book your service..."
              className=' border-0 border-b-2 outline-none '
               />
                       <FaSearch
        className="flex flex-row ml-93 -mt-7 text-xl"/>
          </div>
          <div className="flex-1 flex flex-col">
            <label className="text-xl font-semibold mb-1">Address</label>
            <input
              type="text"
              placeholder="Where"
              className=' border-0 border-b-2 outline-none' 
            />
            <MdLocationOn className="flex flex-row ml-95 -mt-7 text-2xl" />
          </div>
          <div className=" flex flex-row ">
          <button
            className="bg-[#ba7894] hover:bg-[#b21858] text-white px-15   w-50 h-15 text-2xl px-10 rounded-4xl transition"
          >
            Search              <FaSearch
        className="ml-20 -mt-6.5  pl-1 text-md"/>
          </button></div>
        </div>
      </div>
    </section>
  );
}
