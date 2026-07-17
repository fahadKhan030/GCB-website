import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a comprehensive discussion to understand your vision and requirements.",
  },
  {
    title: "Design & Planning",
    description:
      "Our team creates detailed plans and designs that align with your goals.",
  },
  {
    title: "Execution",
    description:
      "We bring the design to life with precision and attention to detail.",
  },
  {
    title: "Review & Delivery",
    description:
      "Final review and delivery of the completed project.",
  },
];

export default function Process() {
  const section = useRef();

  useGSAP(() => {
    // Animate center line
    gsap.from(".timeline-line", {
      scaleY: 0,
      transformOrigin: "top",
      ease: "none",
      scrollTrigger: {
        trigger: section.current,
        start: "top 80%",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Animate each item
    gsap.utils.toArray(".timeline-item").forEach((item) => {
      const content = item.querySelector(".content");
      const circle = item.querySelector(".circle");

      gsap.from(circle, {
        scale: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
        },
      });

      gsap.fromTo(
        content,
        {
          clipPath: "inset(0 100% 0 0)",
          opacity: 0,
        },
        {
          clipPath: "inset(0 0% 0 0)",
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
          },
        }
      );
    });
  }, []);

  return (
    <section
      ref={section}
      className="relative mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center mb-24">
        <h2 className="text-5xl font-bold">
          Our Seamless Process
        </h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A rigorous workflow designed to ensure precision at every milestone.
        </p>
      </div>

      {/* Center Line */}

      <div className="timeline-line absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-green-600"></div>

      {steps.map((step, index) => (
        <div
          key={index}
          className="timeline-item grid grid-cols-[1fr_80px_1fr] items-center mb-10"
        >
          {index % 2 === 0 ? (
            <>
              {/* LEFT */}

              <div className="content overflow-hidden text-right pr-10">
                <h3 className="text-3xl font-bold text-green-500">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-400  text-end">
                  {step.description}
                </p>
              </div>

              {/* Circle */}

              <div className="circle z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              <div></div>
            </>
          ) : (
            <>
              <div></div>

              <div className="circle z-10 flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white">
                {index + 1}
              </div>

              {/* RIGHT */}

              <div className="content overflow-hidden pl-10">
                <h3 className="text-3xl font-bold text-green-500">
                  {step.title}
                </h3>

                <p className="mt-4 text-gray-400">
                  {step.description}
                </p>
              </div>
            </>
          )}
        </div>
      ))}
    </section>
  );
}