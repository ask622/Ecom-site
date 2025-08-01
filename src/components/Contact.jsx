import React from 'react';
import { FiPhone } from "react-icons/fi";
import { IoPersonOutline, IoBookOutline } from "react-icons/io5";
import { HiOutlineMail } from "react-icons/hi";
import { BsPencilSquare } from "react-icons/bs";

const Contact = () => {
  return (
    <div className="bg-[#FBF2E0] w-full py-20 px-4 sm:px-6">
      <div className="lg:w-110 mx-auto text-center">
        <h3 className="text-md text-[#BA7894] tracking-wider mb-2">
          SCHEDULE YOUR PRESENCE
        </h3>
        <h1 className="text-xl font-bold mb-2 text-[#2c2c2c]">
          Get in touch
        </h1>
        <p className="text-sm text-gray-500 mb-10">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.
        </p>
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
          <form className="space-y-4">
            <div className="relative">
              <IoPersonOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 text-md" />
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-500 text-sm rounded px-10 py-2 focus:outline-none"
              />
            </div>
            <div className="relative">
              <HiOutlineMail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 text-md" />
              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-500 text-sm rounded px-10 py-2 focus:outline-none"
              />
            </div>
            <div className="relative">
              <FiPhone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 text-md" />
              <input
                type="text"
                placeholder="Phone"
                className="w-full border border-gray-500 text-sm rounded px-10 py-2 focus:outline-none"
              />
            </div>
            <div className="relative">
              <IoBookOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-800 text-md" />
              <input
                type="text"
                placeholder="Service You Need"
                className="w-full border border-gray-500 text-sm rounded px-10 py-2 focus:outline-none"
              />
            </div>

            <div className="relative">
              <BsPencilSquare className="absolute left-3 top-4 text-gray-800 text-md" />
              <textarea
                placeholder="Any Note For Us"
                rows="3"
                className="w-full border border-gray-500 text-sm rounded px-10 py-2 focus:outline-none resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#422A3C] text-white py-2 rounded-md tracking-widest text-sm hover:bg-[#5a3c52] transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
