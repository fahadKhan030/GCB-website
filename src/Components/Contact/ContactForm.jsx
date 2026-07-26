import React from "react";
import location from "../../assets/location.png";
import direction from "../../assets/direction.png";
import phone from "../../assets/phone.png";
import email from "../../assets/email.png";

const ContactForm = () => {
  return (
    <div className="mt-10">
      <div>
        <address className="flex flex-col gap-2.5 items-start p-5 bg-gray-400 rounded-2xl text-white">
          <div className="p-2 bg-white rounded-full w-9 flex items-center justify-center">
            <img src={location} alt="" className="h-5 w-4" />
          </div>
          <h5 className="text-xl font-semibold">Our Swat Office</h5>
          <p>Main Bypass Road, Near Green Chowk, Mingora, Swat, KP, Pakistan</p>
          <button className="flex items-center justify-center bg-white text-primary p-1 gap-1 rounded-md hover:cursor-pointer  ">
            <p>Go Direction</p>
            <img src={direction} alt="" className="h-2 text-center" />
          </button>
        </address>
        <div className="flex gap-5 mt-4 ">
          <p className="flex flex-col gap-2.5 items-start p-5 bg-gray-400 rounded-2xl text-white">
            <div className="p-2 bg-white rounded-full w-9 flex items-center justify-center">
              <img src={phone} alt="" />
            </div>
            <h6 className="text-xl font-semibold">Call Us</h6>
            <span>+93 333 8958158</span>
          </p>
          <p className="flex flex-col gap-2.5 items-start p-5 bg-gray-400 rounded-2xl text-white">
            <div className="p-2 bg-white rounded-full w-9 flex items-center justify-center">
              <img src={email} alt="" />
            </div>
            <h6 className="text-xl font-semibold">Email Us</h6>
            <span>Contact@GCB.com</span>
          </p>
        </div>
      </div>
      <form action=""></form>
    </div>
  );
};

export default ContactForm;
