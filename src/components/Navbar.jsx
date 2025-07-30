import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState("EN");

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleDropdown = () => setLangOpen(!langOpen);

  const selectLang = (lang) => {
    setSelectedLang(lang);
    setLangOpen(false);
  };

  return (
    <nav className="bg-white shadow-md px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-3xl font-bold text-[#8D3D8C]">STYLICLE</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
        <div
          className={`flex-col md:flex md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 mt-4 md:mt-0 ${
            menuOpen ? "flex" : "hidden"
          } md:flex`}
        >
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
            {langOpen && (
              <div className="absolute right-0 mt-2 w-20 bg-white border border-gray-300 rounded shadow z-10">
                <button
                  onClick={() => selectLang("EN")}
                  className="block px-3 py-1 text-sm hover:bg-gray-100 w-full text-left"
                >
                  EN
                </button>
                <button
                  onClick={() => selectLang("HI")}
                  className="block px-3 py-1 text-sm hover:bg-gray-100 w-full text-left"
                >
                  HI
                </button>
              </div>
            )}
          </div>
          <a
            href="#"
            className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white transition text-center"
          >
            Login
          </a>
          <a
            href="#"
            className="bg-black text-white px-3 py-1 rounded hover:bg-gray-800 transition text-center"
          >
            Signup
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
