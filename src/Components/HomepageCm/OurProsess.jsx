import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
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

const OurProsess = () => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".process-card");

      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      timeline
        .from(
          ".process-title",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          0,
        )
        .from(
          ".process-subtitle",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "<0.1",
        )
        .from(
          ".process-copy",
          {
            y: 20,
            opacity: 0,
            duration: 0.7,
            ease: "power3.out",
          },
          "<0.1",
        )
        .from(
          cards,
          {
            y: 40,
            opacity: 0,
            scale: 0.96,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.16,
          },
          "<0.15",
        )
        .from(
          ".process-number",
          {
            scale: 0.4,
            opacity: 0,
            rotate: -20,
            duration: 0.6,
            ease: "back.out(2)",
            stagger: 0.16,
          },
          "<0.25",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mx-auto flex flex-col mt-10 md:mt-16"
    >
      {/* HEADER */}
      <div className="text-center">
        <span className="process-subtitle text-primary tracking-[0.35em] text-sm uppercase">
          OUR METHODOLOGY
        </span>

        <h1 className="process-title mt-4 text-3xl md:text-4xl font-semibold">
          Our Proven Process
        </h1>

        <p className="process-copy text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base leading-7">
          A systematic approach to delivering engineering and construction excellence from concept to completion.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {processSteps.map((step) => (
          <article key={step.no} className="process-card group text-center flex flex-col items-center">
            <div className="process-number h-14 w-14 text-xl border-2 border-primary text-primary flex items-center justify-center rounded-full font-semibold transition-transform duration-300 group-hover:scale-110">
              {step.no}
            </div>

            <div className="process-card-inner bg-white border border-gray-200 rounded-[28px] p-6 mt-5 shadow-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <span className="text-secondary text-sm uppercase tracking-[0.15em]">
                {step.headline}
              </span>

              <h4 className="text-lg font-semibold mb-3 mt-4">
                {step.title}
              </h4>

              <p className="text-gray-600 text-sm leading-6">{step.dis}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OurProsess;