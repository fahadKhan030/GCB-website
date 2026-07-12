import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const TextReveal = () => {
  const sectionRef = useRef(null);
  const revealRef = useRef(null);

  useGSAP(() => {
    // Hide the colored text initially
    gsap.set(revealRef.current, {
      clipPath: "inset(0 100% 0 0)",
    });

    // Reveal the colored text while scrolling
    gsap.to(revealRef.current, {
      clipPath: "inset(0 0% 0 0)",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=1200",
        scrub: true,
        pin: true,
      },
    });
  });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      <div className="relative text-center">

        {/* Gray Text */}
        <h1 className="text-6xl md:text-8xl font-bold text-gray-300">
          Build Amazing Websites
        </h1>

        {/* Colored Text */}
        <h1
          ref={revealRef}
          className="absolute inset-0 text-6xl md:text-8xl font-bold text-black whitespace-nowrap"
        >
          Build Amazing Websites
        </h1>

      </div>
    </section>
  );
};

export default TextReveal;