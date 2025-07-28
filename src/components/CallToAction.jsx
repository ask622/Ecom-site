import React from 'react';
import Img from '../assets/Gall/CallTo.jpg';
import { FiMail } from 'react-icons/fi';

const CallToAction = () => {
  return (
    <div className="flex justify-center mt-20  mb-10 px-4">
      <div className="flex flex-col md:flex-row bg-white shadow-2xl  rounded-4xl overflow-hidden max-w-6xl w-full">
        
        <div className="md:w-1/2 w-full">
          <img src={Img} alt="Hair salon" className="object-cover w-full h-full rounded-3xl p-2" />
        </div>
        <div className="md:w-1/2 w-full p-8 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Subscribe to newsletter</h2>
          <p className="text-gray-600 mb-6">
            Sign up for our newsletter to stay up-to-date on the latest promotions,
            discounts, and new feature releases.
          </p>

          {/* Input and Button */}
          <form className="flex items-center border rounded-full px-4 py-2 gap-2 w-full  h-15 max-w-md shadow-sm">
            <FiMail className="text-blue-600 text-2xl" />
            <input
              type="email"
              placeholder="Enter your mail"
              className="flex-grow outline-none text-lg text-gray-700"
            />
            <button
              type="submit"
              className="bg-black text-white text-lg px-5 py-2 rounded-full hover:bg-gray-800 transition"
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
