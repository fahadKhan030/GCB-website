import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OurProsess = () => {
  const sectionRef = useRef(null);

  const steps = [
    {
      no: 1,
      headline: "Discovery",
      title: "Initial Consultation",
      dis: "Understanding your vision, requirements, and site potential through strategic dialogue.",
    },
    {
      no: 2,
      headline: "Architecture",
      title: "Planning & Design",
      dis: "Creating detailed architectural blueprints and engineering plans with technical precision.",
    },
    {
      no: 3,
      headline: "Build",
      title: "Execution & Construction",
      dis: "Professional management and high-quality construction using innovative sustainable methods.",
    },
    {
      no: 4,
      headline: "Delivery",
      title: "Final Handover",
      dis: "Rigorous quality checks and final assessments to deliver your completed project on time.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🌿 TITLE REVEAL
      gsap.from(".process-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 🌿 STEPS REVEAL (MAIN FLOW)
      gsap.from(".process-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        scale: 0.95,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.15,
      });

      // 🌿 NUMBER POP EFFECT
      gsap.from(".process-number", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 0.5,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(2)",
        stagger: 0.15,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex flex-col mt-12 p-3 md:p-5 lg:p-10"
    >
      {/* HEADER */}
      <div className="text-center">
        <span className="text-primary tracking-wide text-sm">
          OUR METHODOLOGY
        </span>

        <h1 className="process-title mt-2 font-semibold">
          Our Proven Process
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          A systematic approach to delivering engineering and construction
          excellence from concept to completion.
        </p>
      </div>

      {/* STEPS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {steps.map((data) => (
          <article
            key={data.no}
            className="process-card text-center flex flex-col items-center"
          >
            {/* NUMBER */}
            <h5 className="process-number h-12 w-12 text-xl border-2 border-primary flex items-center justify-center rounded-full font-semibold">
              {data.no}
            </h5>

            {/* CONTENT */}
            <div className="bg-white border border-gray-200 rounded-xl p-4 mt-4 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <span className="text-secondary text-sm">
                {data.headline}
              </span>

              <h4 className="text-lg font-semibold mb-2">
                {data.title}
              </h4>

              <p className="text-gray-600 text-sm">{data.dis}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurProsess;