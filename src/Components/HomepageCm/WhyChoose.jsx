import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import qua from "../../assets/qua.svg";
import arc from "../../assets/arc.svg";
import sur from "../../assets/sur.svg";
import exp from "../../assets/exp.svg";
import time from "../../assets/time.svg";
import cli from "../../assets/cli.svg";

gsap.registerPlugin(ScrollTrigger);

const WhyChoose = () => {
  const sectionRef = useRef(null);

  const data = [
    {
      id: 1,
      img: exp,
      title: "Experienced Engineers",
      dis: "Leveraging decades of collective expertise to solve complex structural challenges with precision.",
    },
    {
      id: 2,
      img: arc,
      title: "Professional Architects",
      dis: "Designing sustainable, modern spaces that harmonize with their environment and fulfill your vision.",
    },
    {
      id: 3,
      img: sur,
      title: "Accurate Surveying",
      dis: "Utilizing state-of-the-art surveying technology for pinpoint accuracy in every land assessment.",
    },
    {
      id: 4,
      img: qua,
      title: "Quality Construction",
      dis: "Upholding the highest standards of workmanship using premium materials and innovative methods.",
    },
    {
      id: 5,
      img: time,
      title: "Timely Delivery",
      dis: "Strict adherence to project timelines ensures your construction milestones are met without compromise.",
    },
    {
      id: 6,
      img: cli,
      title: "Client Satisfaction",
      dis: "Our commitment to transparency and communication builds lasting relationships with our clients.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 INITIAL STATE (mask hidden)
      gsap.set(".why-card", {
        clipPath: "inset(0 0 100% 0)",
        opacity: 0,
        filter: "blur(8px)",
      });

      gsap.set(".why-icon", {
        scale: 0.5,
        opacity: 0,
      });

      gsap.set(".why-text", {
        y: 15,
        opacity: 0,
      });

      // 🔥 TITLE REVEAL
      gsap.from(".why-title", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      // 🔥 CARD MASK REVEAL (MAIN EFFECT)
      gsap.to(".why-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        clipPath: "inset(0 0 0% 0)",
        opacity: 1,
        filter: "blur(0px)",
        duration: 1,
        ease: "power4.out",
        stagger: {
          each: 0.12,
          from: "center",
        },
      });

      // 🔥 ICON POP
      gsap.to(".why-icon", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        scale: 1,
        opacity: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1,
        delay: 0.2,
      });

      // 🔥 TEXT FADE
      gsap.to(".why-text", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
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
    <section ref={sectionRef} className="m-auto mt-12 md:p-5 lg:p-10">
      <h1 className="why-title font-semibold text-center mt-10 mb-8">
        Why Choose Us?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="why-card flex flex-col items-start p-5 rounded-2xl border border-secondary bg-white shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
          >
            <div className="why-icon bg-gray-100 w-12 h-12 flex items-center justify-center rounded-full mb-3">
              <img src={item.img} alt={item.title} />
            </div>

            <h2 className="why-text font-semibold text-lg mb-2">
              {item.title}
            </h2>

            <p className="why-text text-gray-600 text-sm leading-relaxed">
              {item.dis}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;