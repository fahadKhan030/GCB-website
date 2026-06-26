import React from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";

const Footer = () => {
  return (
    <div
      className="bg-gray-200 rounded-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7  items-center px-4 py-5 md:py-7 lg:py-10
     mt-10 md:mt-20"
    >
      <div className="">
        <div className="flex items-center ">
          <img src={logo} alt="" className="max-w-20" />
          <h3 className="text-xl font-semibold">
            <span className="text-primary"> GREEN </span> CONSULTANT <br />&
            BUILDERS
          </h3>
        </div>

        <p className="max-w-[300px]">
          Leading the way in sustainable construction and innovative engineering
          solutions since 2014.
        </p>
      </div>
      <div>
        <span className="text-primary">QUICK LINK</span>
        <ul className="mt-2 flex flex-col">
          <NavLink to="/" className="hover:text-primary hover:cursor-pointer">
            Home
          </NavLink>
          <NavLink to="/about" className="text-[#41493E] hover:cursor-pointer">
            About
          </NavLink>
          <NavLink
            to="services"
            className="text-[#41493E] hover:cursor-pointer"
          >
            Services
          </NavLink>
          <NavLink to="contact" className="text-[#41493E] hover:cursor-pointer">
            Contact
          </NavLink>
        </ul>
      </div>
      <div>
        <span className="text-primary">LEGAL </span>
        <ul className="text-[#41493E] mt-2">
          <li className="hover:cursor-pointer">privacy Policy</li>
          <li className="hover:cursor-pointer">Term of Service </li>
          <li className="hover:cursor-pointer">Sustainability Report</li>
        </ul>
      </div>
      <div>
        <span className="text-primary">CONTACT</span>
        <ul className="text-[#41493E] mt-2">
          <li>
            Bilal Plaza 2nd Floor Office No:205 Near Attock Petrol Pump Airport
            Road Mingora swat
          </li>
          <li className="mt-2">+92 347-9221929</li>
          <li>+92 312-0366222</li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
