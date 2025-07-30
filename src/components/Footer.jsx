import React from 'react';
import Img from '../assets/Logo/HeroIcon.png';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#241520] text-white px-6 md:px-16 pt-7 pb-5">
      {/* Top Section: Logo and Social Icons */}
      <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-600 pb-6">
        <div className="flex items-center gap-3">
          <img src={Img} alt="Logo" className="w-7 h-7" />
          <h2 className="text-lg font-semibold">SERVICEMARKET</h2>
        </div>
        <div className="flex gap-3 mt-4 md:mt-0">
          <FaFacebookF className="w-6 h-6 p-1 border hover:text-pink-400 cursor-pointer" />
          <FaTwitter className="w-6 h-6 p-1 border hover:text-pink-400 cursor-pointer" />
          <FaLinkedinIn className="w-6 h-6 p-1 border hover:text-pink-400 cursor-pointer" />
          <FaInstagram className="w-6 h-6 p-1 border hover:text-pink-400 cursor-pointer" />
        </div>
      </div>

      {/* Middle Section: Links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 text-md">
        {/* Column 1 */}
        <div>
          <h3 className="font-bold mb-2">Explore</h3>
          <ul className="space-y-1 text-sm">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold mb-2">Utility Pages</h3>
          <ul className="space-y-1 text-sm">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold mb-2">Keep in Touch</h3>
          <div className="text-sm space-y-2">
            <div>
              <span className="font-semibold">Address:</span>
              <p>Mariendalsvej 50D 2, 2000 Frederiksberg</p>
            </div>
            <div>
              <span className="font-semibold">Mail:</span>
              <p>support@servicemarket.com</p>
            </div>
            <div>
              <span className="font-semibold">Phone:</span>
              <p>(+22) 123 - 4567 - 900</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 text-center text-sm bg-[#160813] py-3 w-full">
        © 2025, Created by Pawan Gangwar | All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
