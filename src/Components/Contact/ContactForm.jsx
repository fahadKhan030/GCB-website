import React from "react";
import location from "../../assets/location.png";
import direction from "../../assets/direction.png";
import phone from "../../assets/phone.png";
import email from "../../assets/emial.png";

const ContactForm = () => {
  return (
    <div className="flex items-center justify-between mt-10">
      <div>
        <address className="flex flex-col gap-2.5 items-start p-5 bg-[#41493E] rounded-2xl text-white">
          <div className="p-2 bg-white rounded-full w-9 flex items-center justify-center">
            <img src={location} alt="" className="h-5 w-4" />
          </div>
          <h5 className="text-xl font-semibold">Our Swat Office</h5>
          <p>Main Bypass Road, Near Green Chowk, Mingora, Swat, KP, Pakistan</p>
          <button className="flex items-center justify-center bg-white text-primary px-2 py-1 gap-2 rounded-md hover:cursor-pointer  ">
            <p>Go Direction</p>
            <img src={direction} alt="" className="h-2 text-center" />
          </button>
        </address>
        <div className="flex gap-5 mt-4 ">
          <p className="flex flex-col gap-2 items-start p-5 bg-[#41493E] rounded-2xl text-white">
            <div className="p-2 bg-white rounded-full w-9 flex items-center justify-center">
              <img src={phone} alt="" />
            </div>
            <h6 className="text-xl font-semibold">Call Us</h6>
            <span>+93 333 8958158</span>
          </p>
          <p className="flex flex-col gap-2.5 items-start p-5 bg-[#41493E]  rounded-2xl text-white">
            <div className="p-2 bg-white rounded-full w-9 flex items-center justify-center">
              <img src={email} alt="" />
            </div>
            <h6 className="text-xl font-semibold">Email Us</h6>
            <span className="font-semibold">Contact@GCB.com</span>
          </p>
        </div>
      </div>
      <form
        action=""
        className="flex flex-col gap-10 p-10 bg-[#F3F3F3] border-gray-400 border-1 rounded-md"
      >
        <h3 className="font-semibold text-xl">Sand a Message</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-5">
          <div className="flex flex-col">
            <label htmlFor="text">Full Name</label>
            <input
              type="text"
              placeholder="Muhammad Ibrahim "
              className="border-gray-400  border-[1.5px] rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="emial">Email Addrees</label>
            <input
              type="emial"
              placeholder="john@example.com"
              className="border-gray-400  border-[1.5px]  rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="number">Phone Number </label>
            <input
              type="number"
              placeholder="+92 --- ------"
              className="border-gray-400  border-[1.5px]  rounded-md p-1"
            />
          </div>
          <div className="flex flex-col">
            <span>Service Required</span>
            <select
              name=""
              id=""
              className="border-gray-400  border-[1.5px] rounded-md p-1"
            >
              <option value="Engineers">Engineers</option>
              <option value="Architects">Architects</option>
              <option value="Land Surveyor">Land Surveyor</option>
              <option value="Quantity Surveyor">Quantity Surveyor</option>
              <option value="Contractors">Contractors</option>
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
