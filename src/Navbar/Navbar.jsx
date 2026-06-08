import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between backdrop-blur-md bg-white/70 shadow-sm  border-secondary px-2 mt-4 lg:mx-10 m-0 md:mx-0 rounded-xl sticky top-2 z-10">
      <div className="flex items-end gap-2">
        <img src={logo} alt="logo" className="w-17 h-17  " />
      </div>
      <div className="flex items-center gap-10">
        <ul className="hidden md:flex  items-center gap-10 font-semibold  text-[14px] md:text-[16px] lg:text-[18px]">
          <NavLink to="/" className="hover:text-primary hover:cursor-pointer">
            Home
          </NavLink>
          <NavLink
            to="/About"
            className="hover:text-primary hover:cursor-pointer"
          >
            About
          </NavLink>
          <NavLink
            to="/services"
            className="hover:text-primary hover:cursor-pointer"
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="hover:text-primary hover:cursor-pointer"
          >
            Contact
          </NavLink>
        </ul>
        <button className="bg-primary hidden md:flex text-neutral px-2 py-2 rounded">
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
            <NavLink to="/" className="hover:text-primary hover:cursor-pointer">
              Home
            </NavLink>
            <NavLink
              to="/about"
              className="hover:text-primary hover:cursor-pointer"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              className="hover:text-primary hover:cursor-pointer"
            >
              Services
            </NavLink>
            <NavLink
              to="/contact"
              className="hover:text-primary hover:cursor-pointer"
            >
              Contact
            </NavLink>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
