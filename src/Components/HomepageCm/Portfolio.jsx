import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Portfolio = () => {
  const sectionRef = useRef(null);

  const image = [
    "https://i.pinimg.com/736x/f6/d5/ac/f6d5ac3b337f8f118960e31d66fa30d2.jpg",
    "https://i.pinimg.com/1200x/a2/f3/51/a2f35177f42ebb16a75ae73719567982.jpg",
    "https://i.pinimg.com/736x/60/fb/4f/60fb4fb270f7ca4a9a647e4c300e3a0f.jpg",
    "https://i.pinimg.com/736x/80/9d/e6/809de6388b9a39a49fafa47ea68cb7f6.jpg",
    "https://i.pinimg.com/736x/80/9d/e6/809de6388b9a39a49fafa47ea68cb7f6.jpg",
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🌿 TITLE REVEAL
      gsap.from(".portfolio-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 🌿 GRID CONTAINER FADE
      gsap.from(".portfolio-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        opacity: 0,
        y: 60,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
        stagger: {
          each: 0.12,
          from: "random",
        },
      });

      // 🌿 IMAGE MASK REVEAL (premium feel)
      gsap.from(".portfolio-img", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 1.2,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-12 bg-gray-100 rounded-2xl p-4 md:p-6 lg:p-10"
    >
      {/* HEADER */}
      <div className="flex justify-between items-end mb-6">
        <div>
          <span className="text-secondary text-sm">OUR PORTFOLIO</span>

          <h1 className="portfolio-title mt-2 font-semibold">
            Featured Projects
          </h1>
        </div>

        <button className="text-primary hidden md:block hover:underline transition">
          View all Projects
        </button>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[200px]">
        {image.map((img, index) => (
          <div
            key={index}
            className={`portfolio-item overflow-hidden rounded-2xl relative group
            ${
              index === 0
                ? "md:col-span-2 md:row-span-2"
                : ""
            }`}
          >
            <img
              src={img}
              alt=""
              className="portfolio-img w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* subtle overlay (Apple-style depth) */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition" />
          </div>
        ))}
      </div>

      {/* MOBILE BUTTON */}
      <button className="text-primary mt-6 flex justify-end w-full md:hidden">
        View all Projects
      </button>
    </section>
  );
};

export default Portfolio;