import React, { useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between  bg-gray-100 px-5 py-1 m-4 rounded-xl sticky ">
      <div>
        <img src={logo} alt="logo" className="w-17 h-17  " />
      </div>
      <div className="flex items-center gap-10">
        <ul className="hidden md:flex  items-center gap-10 font-semibold  text-[14px] md:text-[16px] lg:text-[18px]">
          <li className="hover:text-primary hover:cursor-pointer">Home</li>
          <li className="hover:text-primary hover:cursor-pointer">About</li>
          <li className="hover:text-primary hover:cursor-pointer">Services</li>
          <li className="hover:text-primary hover:cursor-pointer">Contact</li>
        </ul>
        <button className="bg-primary text-neutral px-2 py-2 rounded">
          get a Quote
        </button>
        <button
          className="flex md:hidden bg-primary text-neutral px-2 py-2 rounded"
          onClick={toggleMenu}
        >
          |||
        </button>
        {isMenuOpen && (
          <ul className="absolute top-16 left-0 flex flex-col items-center gap-4 bg-gray-100 p-4 rounded-xl md:hidden">
            <li className="hover:text-primary hover:cursor-pointer">Home</li>
            <li className="hover:text-primary hover:cursor-pointer">About</li>
            <li className="hover:text-primary hover:cursor-pointer">
              Services
            </li>
            <li className="hover:text-primary hover:cursor-pointer">Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
