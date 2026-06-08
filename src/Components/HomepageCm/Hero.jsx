import React from "react";

const Hero = () => {
  return (
    <div
      className="flex flex-col md:flex-row md:justify-around justify-around md:items
     items-center w-full mt-5 md:mt-12"
    >
      <div className="flex flex-col justify-center items-center md:items-start md:text-left text-center gap-5">
        <h1 className="font-semibold max-w-[600px]">
          Building Excellence Through{" "}
          <span className="text-primary">Engineering & Innovation</span>
        </h1>
        <p className="text-gray-600 text-lg max-w-[500px]">
          Professional Engineering, Architecture, Surveying, and Construction
          Services in Swat and Across Pakistan.
        </p>

        <div className="flex items-center md:items-start gap-5">
          <a
            className="bg-primary text-neutral px-4 py-2 rounded hover:cursor-pointer"
            href="https://wa.me/92479221929"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Consultation
          </a>
          <button className=" text-primary px-4 py-2 rounded border border-primary hover:cursor-pointer">
            view Project
          </button>
        </div>
      </div>
      <div className="max-w-[550px] mt-7 md:mt-0">
        <img
          className=" object-cover rounded-lg"
          src="https://i.pinimg.com/736x/f6/d5/ac/f6d5ac3b337f8f118960e31d66fa30d2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
