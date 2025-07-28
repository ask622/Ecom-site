import React from 'react';
import Img from '../assets/Logo/HeroIcon.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#241520] text-white px-15 pt-7 pb-5">
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6">
        <div className="flex items-center gap-3">
          <img src={Img} alt="Logo" className="w-7 h-7" />
          <h2 className="text-lg font-semibold">SERVICEMARKET</h2>
        </div>
        <div className="flex gap-2 mt-4 md:mt-0">
           <FaFacebookF className="w-6 h-6 p-1 border hover:text-pink-400" />
          <FaTwitter className="w-6 h-6 p-1 border hover:text-pink-400" />
          <FaLinkedinIn className="w-6 h-6 p-1 border hover:text-pink-400" />
          <FaInstagram className="w-6 h-6 p-1 border hover:text-pink-400" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-md">
      
        <div className='p-1'>
          <h3 className="font-bold  text-md">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className='p-1'>
          <h3 className="font-bold  text-md ">Utility Pages</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className='p-1'>
          <h3 className="font-bold text-md ">Keep in Touch</h3>
          <div className='flex flex-row gap-2 p-1'>
          <p><span className="font-bold text-md ">Address:</span></p>
          <p classNmae='mt-2 ml-5'> Mariendalsvej 50D 2 2000, Frederiksberg</p>
          </div>
          <div className='flex flex-row gap-2 p-1'>
          <p><span className="font-semibold ">Mail:</span> </p>
          <p>support@servicemarket.com</p>
          </div>
          <div className='flex flex-row gap-2 p-1'>
          <p><span className="font-semibold ">Phone:</span> </p>
          <p>(+22) 123 - 4567 - 900</p>
          </div>
        </div>
      </div>
     <div className='bg-[#160813] -ml-20  -mb-10 w-screen h-12'>
      <div className="text-center text-sm mt-10 bg-[#160813] w-full h-8 pt-4">
        © 2025,  Created Pawan Gangwar | All rights reserved.
      </div>
      </div>
    </div>
  );
};

export default Footer;
