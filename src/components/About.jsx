import React from 'react';
import cate from '../assets/Logo/Cate.jpg';

const About = () => {
  return (
    <div className="bg-[#fbf2e0] w-full py-16 px-4 sm:px-8 flex items-center justify-center">
      <div className="relative max-w-6xl w-full flex flex-col lg:flex-row items-center lg:items-stretch">

        {/* Left Overlay Box (behind image) */}
        <div className="hidden lg:block absolute left-0 top-0 h-full w-1/2 bg-[#422A3C] z-0 rounded-l-lg" />

        {/* Image Section */}
        <div className="relative z-10 lg:w-[45%] w-full flex justify-center">
          <img
            src={cate}
            alt="About Us"
            className="object-cover max-h-[450px] rounded-lg shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="relative z-20 lg:w-[55%] w-full bg-[#422A3C] text-white p-8 rounded-lg lg:rounded-l-none lg:rounded-r-lg mt-8 lg:mt-0">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-4">About Us</h2>
          <h3 className="text-lg font-bold mb-3">
            It’s the bridge between service companies and consumers.
          </h3>
          <p className="text-sm sm:text-base leading-relaxed">
            ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform.
            Our aim is to simplify and improve everyday life for citizens in Denmark. One platform that
            brings together all services in an easy and controlled environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
