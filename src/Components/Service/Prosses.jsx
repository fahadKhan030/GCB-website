
import React from "react";
// gsap.registerPlugin(ScrollTrigger);



const Prosses = () => {

  const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with discussion to understand your vision and requirements.",
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
  return (
    <section
      
      className="relative mx-auto max-w-7xl py-24"
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

    <div className="grid grid-cols-2 gap-3 md:gap-10 ">
      {
        steps.map((step, index) =>{
          return (
            <div className="t"> 
              <div className=" absolute left-1/2 top-104 md:top-84  -z-20 h-[400px] md:h-[350px]  w-0 md:w-1 -translate-x-1/2 bg-green-600"></div>
              {
                index % 2  === 0 ? (
                  <div className="flex items-center justify-end text-end mx-5  ">
                   <div className="">
                     <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400  max-w-[300px] ">{step.description}</p>
                   </div>
                    <div className="flex items-center justify-center text-white absolute left-1/2 -translate-x-1/2 h-10 w-10 bg-primary rounded-full"> {index + 1}</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-start mx-5 mb-7 mt-20 lg:mt-30">
                    <div className="flex items-center justify-center text-white absolute left-1/2 -translate-x-1/2 h-10 w-10 bg-primary rounded-full"> {index + 1}</div>

                  <div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400 max-w-[400px] ">{step.description}</p>
                  </div>
                  </div>
                )
              }
            </div>
          )
        })
      }

    </div>

      
    </section>
  );
}

export default Prosses;