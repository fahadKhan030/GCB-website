import React, { use, useEffect } from "react";
import next from "./../assets/nextbutton.png";
import back from "./../assets/backbutton.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    gsap.to(".Project-img", {
      flexGrow: 0.5,
      scrollTrigger: {
        trigger: ".Project-img",
        start: "top 80%",
        end: "bottom 20%",
        scrub: 0.5,
      },
    });
  }, []);

  return (
    <section className="  mt-20">
      {/*  heading of this section  */}
      <div className="flex justify-center items-center text-center mb-6">
        <div>
          <span className="text-white bg-primary p-2 rounded-full text-sm ">
            OUR PORTFOLIO
          </span>

          <h1 className="portfolio-title mt-2 font-semibold">
            Featured Projects
          </h1>
        </div>

        {/* <button className="text-primary hidden md:block hover:underline transition">
          View all Projects
        </button> */}
      </div>
      {/* contant on this section */}
      <div className="flex items-center justify-center">
        <img
          src="https://i.pinimg.com/736x/0c/c5/0c/0cc50c1db7290443b6b3c3d59dc73718.jpg"
          alt=""
          className="Project-img flex-1 rounded-2xl"
        />
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <button className="p-3 rounded-full border border-primary hover:cursor-pointer">
          <img src={back} alt="" />
        </button>
        <button className="p-3 rounded-full border border-primary hover:cursor-pointer">
          <img src={next} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Project;
