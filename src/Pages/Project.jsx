import React, { useEffect } from "react";
import next from "./../assets/nextbutton.png";
import back from "./../assets/backbutton.png";
// image for the project section
import project from "./../assets/p-1.jpeg";
import project1 from "./../assets/p-2.jpeg";
import project3 from "./../assets/p-3.jpeg";
// emblam carousel
import useEmblaCarousel from "embla-carousel-react";

// GSAP
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// Embla carousel

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "center",
  });

  const goToPrev = () => emblaApi.scrollPrev();
  const goToNext = () => emblaApi.scrollNext();

  useEffect(() => {
    gsap.to(".image-wrap", {
      gap: "1px",
      scrollTrigger: {
        trigger: ".image-wrap",
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
    gsap.to(".Project-img", {
      baseline: "center center",
      gap: "40px",
      flexGrow: "60%",
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

  return (
    <section className="embla  mt-20 overflow-hidden ">
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
      <div className="embla__viewport overflow-hidden " ref={emblaRef}>
        <div className="embla__container image-wrap flex items-center flex-nowrap gap-2">
          <div className="embla__slide-p Project-img relative  flex-shrink-0  h-[300px] md:h-[400px] lg:h-[500px] min-[1200px]:h-[700px]">
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold">
                This is our featured project design
              </h3>

              <button className="mt-4 w-fit rounded-full hover:cursor-pointer bg-white px-6 py-2 text-black">
                View Details
              </button>
            </div>

            <img
              src={project}
              alt=""
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          <div className="embla__slide-p Project-img relative flex-shrink-0  h-[300px] md:h-[400px] lg:h-[500px]  min-[1200px]:h-[700px]">
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold">
                This is our featured project design
              </h3>

              <button className="mt-4 w-fit rounded-full  hover:cursor-pointer bg-white px-6 py-2 text-black">
                View Details
              </button>
            </div>

            <img
              src={project1}
              alt=""
              className="w-full h-full rounded-2xl object-cover"
            />
          </div>

          <div className="embla__slide-p Project-img relative flex-shrink-0  h-[300px] md:h-[400px] lg:h-[500px]  min-[1200px]:h-[700px]">
            <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
              <h3 className="text-2xl font-bold">
                This is our featured project design
              </h3>

              <button className="mt-4 w-fit rounded-full  hover:cursor-pointer bg-white px-6 py-2 text-black">
                View Details
              </button>
            </div>

            <img
              src={project3}
              alt=""
              className="w-full  rounded-2xl object-cover h-full"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full border border-primary "
        >
          <img src={back} alt="" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 rounded-full border border-primary"
        >
          <img src={next} alt="" />
        </button>
      </div>
    </section>
  );
};

export default Project;
