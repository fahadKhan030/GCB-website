import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Status = () => {
  const sectionRef = useRef(null);

  const statusData = [
    { id: 1, value: "150+", title: "Projects done" },
    { id: 2, value: "100%", title: "Happy clients" },
    { id: 3, value: "20+", title: "Years of experience" },
    { id: 4, value: "50+", title: "Team members" },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 SET INITIAL STATE (important for clean reveal)
      gsap.set(".status-card", {
        clipPath: "inset(0 0 100% 0)",
        filter: "blur(10px)",
        opacity: 0,
      });

      gsap.set(".status-number", {
        y: 20,
        opacity: 0,
      });

      gsap.set(".status-title", {
        y: 10,
        opacity: 0,
      });

      // 🔥 MAIN REVEAL (premium mask effect)
      gsap.to(".status-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        clipPath: "inset(0 0 0% 0)",
        filter: "blur(0px)",
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger: {
          each: 0.12,
          from: "center",
        },
      });

      // 🔥 NUMBERS POP
      gsap.to(".status-number", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: {
          each: 0.1,
          from: "center",
        },
        delay: 0.2,
      });

      // 🔥 TITLE FADE CLEAN
      gsap.to(".status-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
        stagger: 0.1,
        delay: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10 md:mt-14 md:p-5 lg:p-10"
    >
      {statusData.map((item) => (
        <div
          key={item.id}
          className="status-card bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col items-center"
        >
          <h2 className="status-number text-3xl md:text-4xl font-bold text-primary">
            {item.value}
          </h2>

          <p className="status-title text-gray-600 font-medium text-sm md:text-base text-center mt-1">
            {item.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Status;