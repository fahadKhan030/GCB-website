import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AHero = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🌿 MAIN TEXT REVEAL
      gsap.from(".story-badge", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });

      gsap.from(".story-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".story-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        delay: 0.1,
        ease: "power3.out",
      });

      // 📌 MISSION / VISION CARDS
      gsap.from(".story-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: -40,
        opacity: 0,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });

      // 🖼 IMAGE REVEAL (Apple-style mask feel)
      gsap.from(".story-image", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 1.1,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col gap-10 md:flex-row md:justify-around md:items-center w-full mt-10 md:mt-16"
    >
      {/* LEFT SIDE */}
      <div className="max-w-[600px]">
        {/* Badge */}
        <span className="story-badge bg-secondary text-white rounded-2xl text-sm px-3 py-1 inline-block">
          OUR STORY
        </span>

        {/* Title */}
        <h1 className="story-title mt-4 text-3xl md:text-5xl font-semibold leading-tight">
          Pioneering Sustainability in Modern Construction.
        </h1>

        {/* Text */}
        <p className="story-text text-gray-500 my-5">
          Founded on the principles of ecological integrity and engineering
          excellence, Green Consultants & Builders bridge the gap between
          architectural ambition and environmental responsibility.
        </p>

        {/* Mission / Vision */}
        <div className="flex flex-col md:flex-row gap-6 mt-6">
          <article className="story-card border-l-4 border-primary pl-4">
            <h5 className="font-semibold text-md">OUR MISSION</h5>
            <p className="text-sm text-gray-500 max-w-[300px]">
              To design and build structures that breathe with the environment,
              not against it.
            </p>
          </article>

          <article className="story-card border-l-4 border-primary pl-4">
            <h5 className="font-semibold text-md">OUR VISION</h5>
            <p className="text-sm text-gray-500 max-w-[300px]">
              A world where every skyscraper is a vertical forest and every home
              is net-zero.
            </p>
          </article>
        </div>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="overflow-hidden rounded-2xl">
        <img
          src="https://i.pinimg.com/736x/79/17/b7/7917b7403737be5ada6890fae7d7002f.jpg"
          className="story-image rounded-2xl w-full object-cover"
          alt=""
        />
      </div>
    </section>
  );
};

export default AHero;