import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-title", {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          ".hero-text",
          {
            y: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".hero-btn",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.3"
        )
        .from(
          ".hero-image-wrapper",
          {
            clipPath: "inset(0 100% 0 0)",
            duration: 1.4,
            ease: "power4.inOut",
          },
          "-=1"
        )
        .from(
          ".hero-card",
          {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.5"
        );

      gsap.to(".hero-image", {
        scale: 1.08,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });

      gsap.to(".scroll-indicator", {
        y: 12,
        repeat: -1,
        yoyo: true, 
        duration: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col md:flex-row md:justify-around justify-center items-center gap-10 w-full min-h-[85vh] overflow-hidden"
    >
      {/* Content */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left gap-5">
        <h1 className="hero-title font-semibold max-w-[600px]">
          Building Excellence Through{" "}
          <span className="text-primary">
            Engineering & Innovation
          </span>
        </h1>

        <p className="hero-text text-gray-600 text-lg max-w-[500px]">
          Professional Engineering, Architecture, Surveying and Construction
          Services in Swat and Across Pakistan.
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          <a
            className="hero-btn bg-primary text-white px-5 py-3 rounded-lg"
            href="https://wa.me/92479221929"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Free Consultation
          </a>

          <button className="hero-btn border border-primary text-primary px-5 py-3 rounded-lg">
            View Projects
          </button>
        </div>
      </div>

      {/* Image */}
      <div className="relative">
        <div className="hero-image-wrapper overflow-hidden rounded-2xl">
          <img
            className="hero-image max-w-[550px] w-full object-cover rounded-2xl"
            src="https://i.pinimg.com/736x/f6/d5/ac/f6d5ac3b337f8f118960e31d66fa30d2.jpg"
            alt="Construction"
          />
        </div>

        {/* Floating Card */}
        <div className="hero-card absolute -bottom-5 -left-5 bg-white shadow-xl rounded-xl p-4">
          <h3 className="text-primary font-bold text-2xl">12+</h3>
          <p className="text-sm text-gray-500">
            Years of Experience
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-5 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;