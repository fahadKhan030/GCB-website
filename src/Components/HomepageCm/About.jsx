import React, { useEffect, useRef } from "react";
import profile from "../../assets/profile .jpeg";
import whatsApp from "../../assets/whatsApp.png";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 30%",
          toggleActions: "play reverse play reverse",
        },
      });

      tl.from(".about-image", {
        clipPath: "inset(0 0 100% 0)",
        scale: 1.15,
        duration: 1.2,
        ease: "power4.out",
      })
        .from(
          ".about-badge",
          {
            y: 30,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.8"
        )
        .from(
          ".about-heading",
          {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          ".about-text",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          ".about-card",
          {
            x: 80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.3"
        );

      gsap.to(".whatsapp-btn", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "power1.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col-reverse md:flex-row md:justify-around justify-around md:items-center items-center w-full mt-10 md:mt-16 gap-8 overflow-hidden"
    >
      {/* Image */}
      <div className="max-w-[450px] md:max-w-[550px] mt-7 md:mt-0 overflow-hidden rounded-xl">
        <img
          className="about-image object-cover rounded-xl w-full"
          src="https://i.pinimg.com/736x/78/f7/b9/78f7b9f5c27932b0b0f30163e53ad6c0.jpg"
          alt="About Company"
        />
      </div>

      {/* Content */}
      <div>
        <div className="flex flex-col">
          <span className="about-badge text-secondary font-medium tracking-wider">
            ABOUT OUR COMPANY
          </span>

          <h1 className="about-heading max-w-[650px] font-semibold">
            Excellence in Engineering &
            <span className="text-primary"> Construction</span>
          </h1>

          <p className="about-text text-gray-500 max-w-[500px] my-2 md:my-3 text-sm md:text-base">
            Based in the heart of Swat, Pakistan, Green Consultants & Builders
            has established itself as a leader in sustainable engineering and
            architectural innovation. Since 2014, we have been dedicated to
            transforming the landscape of our region through technical
            precision, integrity, and a deep commitment to environmental
            stewardship.
          </p>

          {/* Quote Card */}
          <div className="about-card bg-primary pl-2 overflow-hidden md:hidden lg:block rounded-xl mt-3">
            <div className="bg-[#F3F3F3] p-4 rounded-l-2xl">
              <p className="max-w-[500px] text-sm">
                "At Green Consultants, we don't just build structures; we build
                trust. Our focus on innovation and sustainability ensures that
                every project we undertake contributes positively to the
                environment."
              </p>

              <div className="flex gap-3 items-center mt-3">
                <div className="h-12 w-12 rounded-full overflow-hidden bg-primary">
                  <img
                    src={profile}
                    alt="CEO"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <span className="font-semibold text-primary">
                    Engr Muhammad Ibrahim
                  </span>
                  <p className="text-gray-500 text-sm">
                    Chief Executive Officer
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/92479221929"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn fixed bottom-5 right-5 z-50"
        >
          <img
            src={whatsApp}
            alt="WhatsApp"
            className="w-14 md:w-16"
          />
        </a>
      </div>
    </section>
  );
};

export default About;