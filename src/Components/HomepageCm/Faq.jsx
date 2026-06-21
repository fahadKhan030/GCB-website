import React, { useState, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const [openId, setOpenId] = useState(null);
  const sectionRef = useRef(null);
  const answerRefs = useRef({});

  const faq = [
    {
      id: 1,
      question: "What services does Green Consultants & Builders offer?",
      answer:
        "We provide Civil Engineering, Architecture Design, Land Surveying, Construction Management, and consultancy services.",
    },
    {
      id: 2,
      question: "Do you operate outside of Swat?",
      answer:
        "Yes, we serve clients across Pakistan with high-quality engineering and construction solutions.",
    },
    {
      id: 3,
      question: "How can I get a project estimate?",
      answer:
        "You can request a free consultation via our contact form or phone call for a detailed quote.",
    },
    {
      id: 4,
      question: "Are your designs focused on sustainability?",
      answer:
        "Yes, sustainability is core. We use eco-friendly materials and energy-efficient designs.",
    },
  ];

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // 🔥 ACCORDION ANIMATION FIX
  useLayoutEffect(() => {
    faq.forEach((item) => {
      const el = answerRefs.current[item.id];
      if (!el) return;

      if (openId === item.id) {
        gsap.to(el, {
          height: "auto",
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(el, {
          height: 0,
          opacity: 0,
          duration: 0.3,
          ease: "power2.in",
        });
      }
    });
  }, [openId]);

  return (
    <section
      ref={sectionRef}
      className="flex flex-col items-center justify-center py-14 px-4"
    >
      {/* TITLE */}
      <div className="text-center mb-10">
        <h1 className="font-semibold">Frequently Asked Questions</h1>
        <p className="text-gray-500 mt-2">
          Find answers to common questions about our services.
        </p>
      </div>

      {/* FAQ LIST */}
      <div className="w-full max-w-2xl space-y-4">
        {faq.map((item) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="faq-item border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden"
            >
              {/* QUESTION */}
              <button
                onClick={() => toggle(item.id)}
                className="w-full p-4 flex justify-between items-center text-left"
              >
                <span className="font-medium">{item.question}</span>

                <span
                  className={`text-xl transition-transform duration-300 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>

              {/* ANSWER */}
              <div
                ref={(el) => (answerRefs.current[item.id] = el)}
                className="px-4 overflow-hidden h-0 opacity-0"
              >
                <p className="text-gray-600 text-sm pb-4">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;