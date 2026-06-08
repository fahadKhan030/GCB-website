import React from "react";
import profile from "../../assets/profile .jpeg";
import whatsApp from "../../assets/whatsApp.png";

const About = () => {
  return (
    <div
      className="flex flex-col md:flex-row gap-10 md:gap-0 justify-around md:items
     items-center w-full mt-5 md:mt-12"
    >
      <div className="max-w-[450px] md:max-w-[550px] mt-7 md:mt-0">
        <img
          className=" object-cover rounded-lg"
          src="https://i.pinimg.com/736x/78/f7/b9/78f7b9f5c27932b0b0f30163e53ad6c0.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="flex flex-col">
          <span className="text-secondary">ABOUT OUR COMPANY</span>
          <h1 className="max-w-[550px]">
            Excellence in Engineering &{" "}
            <span className="text-primary">Construction</span>
          </h1>
          <p className=" text-gray-500 max-w-[500px] my-2 md:my-3 ">
            Based in the heart of Swat, Pakistan, Green Consultants & Builders
            has established itself as a leader in sustainable engineering and
            architectural innovation. Since 2014, we have been dedicated to
            transforming the landscape of our region through technical
            precision, integrity, and a deep commitment to environmental
            stewardship.
          </p>

          <div className="bg-primary pl-2 overflow-hidden rounded-xl mt-3">
            <div className="bg-[#F3F3F3] p-4 rounded-l-2xl">
              <p className="max-w-[500px]">
                "At Green Consultants, we don't just build structures; we build
                trust. Our focus on innovation and sustainability ensures that
                every project we undertake contributes positively to the
                environment."
              </p>
              <div className="flex gap-3 items-center mt-2 ">
                <div className="h-12 overflow-hidden w-12 rounded-full bg-primary">
                  <img src={profile} alt="" />
                </div>
                <div>
                  <span className="font-semibold text-primary">
                    Engr Muhammad Ibrahim
                  </span>
                  <p className="text-gray-500">Chif Executive Officer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="https://wa.me/92479221929" className="fixed bottom-0 right-3">
          <img src={whatsApp} alt="" />
        </a>
      </div>
    </div>
  );
};

export default About;
