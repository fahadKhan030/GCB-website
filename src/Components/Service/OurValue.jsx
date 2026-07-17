import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import un from "../../assets/inno.png";
import setting from "../../assets/inte.png";
import sus from "../../assets/sus.png";

gsap.registerPlugin(ScrollTrigger);

const OurValue = () => {
  const sectionRef = useRef();

  const CoreValue = [
    {
      img: setting,
      title: "Uncompromising Integrity",
      about:
        "We adhere to the highest ethical standards in every calculation and contract, ensuring total transparency.",
    },
    {
      img: un,
      title: "Holistic Sustainability",
      about:
        "Environmental responsibility is woven into our engineering DNA, prioritizing long-term ecological balance.",
    },
    {
      img: sus,
      title: "Technical Innovation",
      about:
        "Utilizing cutting-edge BIM and LiDAR technologies to solve complex architectural challenges.",
    },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      tl.from(".our-value-heading", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })

        .from(
          ".value-card",
          {
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.4"
        )

        .from(
          ".value-icon",
          {
            scale: 0,
            rotate: -180,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(2)",
          },
          "<"
        )

        .from(
          ".value-image",
          {
            x: 80,
            opacity: 0,
            scale: 0.9,
            duration: 1,
            ease: "power4.out",
          },
          "-=1"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mt-10 md:mt-16 mx-auto flex flex-col-reverse items-center justify-around gap-10 md:flex-row"
    >
      <div>
        <h4 className="our-value-heading text-2xl font-bold mb-4 text-primary">
          Our Core Value
        </h4>

        <div>
          {CoreValue.map((data, index) => (
            <article
              key={index}
              className="value-card flex items-center gap-4 mb-5"
            >
              <div className="value-icon h-10 w-10 border-primary border-2 flex items-center justify-center rounded-full">
                <img
                  src={data.img}
                  alt={data.title}
                  className="p-2"
                />
              </div>

              <div>
                <h5 className="text-lg text-primary font-semibold">
                  {data.title}
                </h5>

                <p className="text-gray-600 max-w-[500px] mt-1">
                  {data.about}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="value-image max-w-[450px] md:max-w-[500px]  overflow-hidden rounded-2xl">
        <img
          src="https://i.pinimg.com/736x/1b/a7/0f/1ba70f77bd07ee307f97de6de497729a.jpg"
          alt=""
          className="rounded-2xl object-cover"
        />
      </div>
    </section>
  );
};

export default OurValue;