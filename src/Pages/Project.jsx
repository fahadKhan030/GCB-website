import React, { useEffect, useState, useCallback } from "react";
import next from "./../assets/nextbutton.png";
import back from "./../assets/backbutton.png";
import project from "./../assets/p-1.jpeg";
import project1 from "./../assets/p-2.jpeg";
import project3 from "./../assets/p-3.jpeg";
import useEmblaCarousel from "embla-carousel-react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    axis: "x",
    loop: true, // <- clones neighbors so first/last slide also peeks both sides
    skipSnaps: false,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);

  const goToPrev = () => emblaApi.scrollPrev();
  const goToNext = () => emblaApi.scrollNext();

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    gsap.to(".image-wrap", {
      scrollTrigger: {
        trigger: ".image-wrap",
        start: "top 100%",
        end: "bottom 20%",
        scrub: 1,
      },
    });
  }, []);

  const slides = [project, project1, project3];

  return (
    <section className="embla mt-20 overflow-hidden px-3">
      <div className="flex justify-center items-center text-center mb-6">
        <div>
          <span className="text-white bg-primary p-2 rounded-full text-sm">
            OUR PORTFOLIO
          </span>
          <h1 className="portfolio-title mt-2 font-semibold">
            Featured Projects
          </h1>
        </div>
      </div>

      {/* padding-x gives the peeking neighbors room to sit at the edges */}
      <div
        className="embla__viewport overflow-hidden px-[16%] sm:px-[20%] md:px-[24%] lg:px-[20%]"
        ref={emblaRef}
      >
        <div className="embla__container image-wrap flex items-center flex-nowrap gap-4">
          {slides.map((src, i) => {
            const isActive = i === selectedIndex;
            return (
              <div
                key={i}
                className={`embla__slide-p Project-img relative flex-shrink-0 overflow-hidden
                  w-full
                  h-[280px] md:h-[380px] lg:h-[500px]
                  rounded-2xl transition-all duration-500 ease-out
                  ${isActive ? "scale-100 opacity-100" : "scale-95 opacity-30"}`}
              >
                <div className="absolute inset-0 z-10 flex flex-col justify-end p-8 text-white">
                  <h3 className="text-2xl font-bold">
                    This is our featured project design
                  </h3>
                  <button className="mt-4 w-fit rounded-full hover:cursor-pointer bg-white px-6 py-2 text-black">
                    View Details
                  </button>
                </div>

                <img
                  src={src}
                  alt=""
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 mt-3">
        <button
          onClick={goToPrev}
          className="p-3 rounded-full border border-primary"
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
