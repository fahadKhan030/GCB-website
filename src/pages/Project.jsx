import React, { useEffect } from "react";
import next from "./../assets/nextbutton.png";
import back from "./../assets/backbutton.png";
// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Embla carousel

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  useEffect(() => {
    gsap.to(".Project-img", {
      width: "30%",
      marginLeft: "1px",
      marginRight: "1px",
      transformOrigin: "center center",
      ease: "none",
      scrollTrigger: {
        trigger: ".Project-img",
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  }, []);

  const image = [
    "https://i.pinimg.com/1200x/cc/f2/06/ccf2068b518abd340a70c0d65ed26c99.jpg",
    // "https://i.pinimg.com/1200x/af/d8/8b/afd88bc36df3eedf901fde7d301485f4.jpg",
    // "https://i.pinimg.com/1200x/b5/2d/9b/b52d9b21e7fb5ea0b9dff26205c7689e.jpg",
    // "https://i.pinimg.com/1200x/0a/0d/36/0a0d3680ce5fba9351b0df9918ceef81.jpg",
    // "https://i.pinimg.com/736x/8c/3e/35/8c3e35fcb3f26ed80f127cc9a17de252.jpg",
  ];

  return (
    <section className="  mt-20 overflow-hidden ">
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
        <div className="Project-img relative flex-shrink-0 w-full h-[300px] md:h-[400px] lg:h-[500px] min-[1200px]:h-[700px]">
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold">
              This is our featured project design
            </h3>

            <button className="mt-4 w-fit rounded-full bg-white px-6 py-2 text-black">
              View Details
            </button>
          </div>

          <img
            src="https://i.pinimg.com/1200x/b5/2d/9b/b52d9b21e7fb5ea0b9dff26205c7689e.jpg"
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="Project-img relative flex-shrink-0 w-full h-[300px] md:h-[400px] lg:h-[500px]  min-[1200px]:h-[700px] mx-10 ">
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold">
              This is our featured project design
            </h3>

            <button className="mt-4 w-fit rounded-full bg-white px-6 py-2 text-black">
              View Details
            </button>
          </div>

          <img
            src="https://i.pinimg.com/1200x/b5/2d/9b/b52d9b21e7fb5ea0b9dff26205c7689e.jpg"
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>

        <div className="Project-img relative flex-shrink-0 w-full h-[300px] md:h-[400px] lg:h-[500px]  max-[1200px]:h-[700px]">
          <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
            <h3 className="text-2xl font-bold">
              This is our featured project design
            </h3>

            <button className="mt-4 w-fit rounded-full bg-white px-6 py-2 text-black">
              View Details
            </button>
          </div>

          <img
            src="https://i.pinimg.com/1200x/b5/2d/9b/b52d9b21e7fb5ea0b9dff26205c7689e.jpg"
            alt=""
            className="w-full h-full rounded-2xl object-cover"
          />
        </div>
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
