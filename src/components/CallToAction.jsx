import React from 'react';
import Img from '../assets/Gall/CallTo.jpg';
import { FiMail } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <div className="flex justify-center mt-20 mb-10 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl rounded-3xl overflow-hidden max-w-5xl w-full">
        
        {/* Image Section */}
        <div className="w-full md:w-1/3">
          <img
            src={Img}
            alt="Hair salon"
            className="w-full h-64 md:h-full object-cover p-4 md:p-6"
          />
        </div>

        {/* Text and Form Section */}
        <div className="w-full md:w-2/3 p-6 md:p-10 flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 text-center md:text-left">
            Subscribe to our newsletter
          </h2>
          <p className="text-gray-600 text-sm mb-6 text-center md:text-left">
            Sign up for our newsletter to stay up-to-date on the latest promotions,
            discounts, and new feature releases.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center gap-3 border rounded-3xl lg:rounded-full px-4 py-2 w-full max-w-md mx-auto md:mx-0 shadow-sm">
            <div className="flex items-center w-full sm:w-auto gap-2">
              <FiMail className="text-blue-600 text-xl" />
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow outline-none text-sm text-gray-700 w-full sm:w-60"
              />
            </div>
            <button
              type="submit"
              className="bg-black text-white text-sm lg:ml-10 px-5 py-2  rounded-full hover:bg-gray-800 transition-all w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
