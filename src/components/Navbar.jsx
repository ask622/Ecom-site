// src/components/Navbar.jsx
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const toggleDropdown = () => setIsOpen(!isOpen);
  const selectLang = (lang) => {
    setSelectedLang(lang);
    setIsOpen(false);
  };

  return (
    <nav className="bg-white px-6 py-4 shadow-md m-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-4xl font-bold text-[#8D3D8C]">STYLICLE</span>
        </div>
        <div className=" text-xl  flex items-center space-x-8 ">
          <a href="#" className="text-black hover:text-[#8D3D8C] font-normal">
            Home
          </a>
          <a href="#" className="text-black hover:text-[#8D3D8C] font-normal">
            About Us
          </a>
          <a href="#" className="text-black hover:text-[#8D3D8C] font-normal">
            Contact Us
          </a>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="text-black font-normal border border-gray-300 rounded px-3 py-1 hover:bg-gray-100"
            >
              {selectedLang} ⌄
            </button>
            {isOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-300 rounded shadow z-10">
                <button
                  onClick={() => selectLang("EN")}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                >
                  EN
                </button>
                <button
                  onClick={() => selectLang("HI")}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 w-full text-left"
                >
                  HI
                </button>
              </div>
            )}
          </div>
          <a
            href="#"
            className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white transition"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
