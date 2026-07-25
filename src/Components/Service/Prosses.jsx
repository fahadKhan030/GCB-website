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
      description: "Final review and delivery of the completed project.",
    },
  ];
  return (
    <section className="relative mx-auto max-w-7xl py-24">
      <div className="text-center mb-10 md:mb-15">
        <h2 className="text-5xl font-bold">Our Seamless Process</h2>

        <p className="mt-4 text-gray-400 max-w-xl mx-auto">
          A rigorous workflow designed to ensure precision at every milestone.
        </p>
      </div>

      {/* Center Line */}

      <div className="md:grid md:grid-cols-2 gap-3 px-5 md:gap-x-10 ">
        {steps.map((step, index) => {
          return (
            <div className="">
              <div className=" absolute left-1/2  md:top-74 -z-20 md:h-[350px]  w-0 md:w-1 -translate-x-1/2 bg-green-600"></div>
              {index % 2 === 0 ? (
                <div className="md:flex md:items-center md:justify-end md:text-end md:mx-5  ">
                  <div className="flex py-5">
                    <div className="flex md:hidden items-center  justify-center text-white md:absolute left-1/2 -translate-x-1/2 h-10 w-10 bg-primary rounded-full">
                      {index + 1}
                    </div>
                    <div clasName="">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-gray-400  max-w-[300px] ">
                        {step.description}
                      </p>
                    </div>
                  </div>
                  <div className="hidden  md:flex items-center justify-center text-white md:absolute left-1/2 -translate-x-1/2 h-10 w-10 bg-primary rounded-full">
                    {index + 1}
                  </div>
                </div>
              ) : (
                <div className="md:flex flex md:items-center md:justify-start md:mx-5 md:mb-7 md:mt-20 md:lg:mt-30">
                  <div className="flex items-center justify-center text-white md:absolute left-1/2 -translate-x-1/2 h-10 w-10 bg-primary rounded-full">
                    {index + 1}
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <p className="text-gray-400 max-w-[400px] ">
                      {step.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Prosses;
