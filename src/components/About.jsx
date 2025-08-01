import React from 'react';
import cate from '../assets/Logo/Cate.jpg';

const About = () => {
  return (
    <div className="bg-[#fbf2e0] w-full flex lg:mt-60 lg:h-[300px] items-center justify-center p-5">
      <div className="flex flex-col lg:flex-row items-center justify-center bg-[#422A3C] h-auto lg:h-80 w-full lg:w-[780px] lg:-mt-60  cursor-pointer">
        
       
        <div className="lg:ml-20 shadow-2xl -mt-10 lg:mt-0">
          <img
            src={cate}
            alt=""
            className="h-100 w-100 lg:h-[410px] lg:w-[450px] "
          />
        </div>


        <div className="flex flex-col w-full lg:w-2/3 px-5 lg:ml-10 text-white mt-5 lg:mt-10">
          <h1 className="text-start pb-2 text-xl lg:text-2xl">About Us</h1>
          <h1 className="text-start text-base lg:text-lg font-bold pb-1">
            It’s the bridge between service companies and consumers.
          </h1>
          <p className="text-start pb-4 text-sm lg:text-base">
            ServiceMarket.dk is a Copenhagen-based technology company known for our overview platform.
            Our aim is to simplify and improve everyday life for citizens in Denmark.
            One platform that brings together all services in an easy and controlled environment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
