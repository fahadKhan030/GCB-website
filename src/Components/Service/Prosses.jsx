import React from 'react'

const Prosses = () => {
  
    const steps = [
  {
    number: "1",
    title: "Consultation",
    desc: "Defining project goals, constraints and objectives."
  },
  {
    number: "2",
    title: "Analysis & Design",
    desc: "Topographic surveying and architectural planning."
  },
  {
    number: "3",
    title: "Technical Development",
    desc: "Engineering calculations and planning."
  },
  {
    number: "4",
    title: "Execution",
    desc: "On-site management and safety."
  }
];

  return (
      <section className="max-w-6xl mx-auto py-24">
      <div className="relative">

        {/* Center Line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-green-700"></div>

        {steps.map((step, index) => (
          <div
            key={index}
            className="relative grid grid-cols-2 items-center mb-10"
          >
            {/* Left Content */}
            <div
              className={`${
                index % 2 === 0
                  ? "text-right pr-10 "
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <h3 className="text-xl font-bold text-green-700">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {step.desc}
              </p>
            </div>

            {/* Right Content */}
            <div
              className={`${
                index % 2 !== 0
                  ? "pl-20"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <h3 className="text-xl font-bold text-green-700">
                {step.title}
              </h3>

              <p className="mt-3 text-gray-400">
                {step.desc}
              </p>
            </div>

            {/* Circle */}
            <div className="absolute left-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-green-700 flex items-center justify-center text-white font-bold text-2xl">
              {step.number}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Prosses