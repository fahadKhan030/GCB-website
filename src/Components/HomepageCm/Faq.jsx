import React, { useState } from "react";

const Faq = () => {
  const [openId, setOpenId] = useState(null);

  const ToggleAns = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const faq = [
    {
      id: 1,
      question: "What services does Green Consultants & Builders offer?",
      answer:
        "We provide a full suite of services including Civil Engineering, Architecture Design, Land Surveying, Construction Management, and specialized consultancy for both residential and commercial projects.",
    },
    {
      id: 2,
      question: "Do you operate outside of Swat?",
      answer:
        "Yes, while our main office is in Swat, we serve clients across Pakistan with high-quality engineering and construction solutions.",
    },
    {
      id: 3,
      question: "How can I get a project estimate?",
      answer:
        "You can request a free consultation through our website's contact form, or call us directly. Our experts will review your requirements and provide a detailed quote.",
    },
    {
      id: 4,
      question: "Are your designs focused on sustainability?",
      answer:
        "Sustainability is at the core of our philosophy. We prioritize eco-friendly materials and energy-efficient designs in every project we undertake.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-10">
      {/* Heading */}
      <div className="text-center mb-8">
        <h1>Frequently Asked Questions</h1>

        <p className="text-gray-500 mt-2">
          Find answers to common questions about our services.
        </p>
      </div>

      {/* FAQ List */}
      <div className="w-full max-w-2xl space-y-4 ">
        {faq.map((data) => (
          <div
            key={data.id}
            className="border border-gray-200 rounded-lg overflow-hidden hover:scale-103 duration-300"
          >
            <button
              onClick={() => ToggleAns(data.id)}
              className="w-full p-4 text-left bg-gray-100 flex justify-between items-center"
            >
              <span className="text-sm md:text-md hover:cursor-pointer">
                {data.question}
              </span>

              <span>{openId === data.id ? "-" : "+"}</span>
            </button>

            <div
              className={`px-4 transition-all duration-300 ${
                openId === data.id ? "py-4 block" : "hidden"
              }`}
            >
              <p className="font-light text-sm">{data.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
