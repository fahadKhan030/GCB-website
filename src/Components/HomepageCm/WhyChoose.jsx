import React from "react";
import qua from "../../assets/qua.svg";
import arc from "../../assets/arc.svg";
import sur from "../../assets/sur.svg";
// import engr from "../../assets/engr.svg";
import exp from "../../assets/exp.svg";
import time from "../../assets/time.svg";
import cli from "../../assets/cli.svg";

const WhyChoose = () => {
  const data = [
    {
      id: 4,
      img: exp,
      title: "Experienced Engineers",
      dis: "Leveraging decades of collective expertise to solve complex structural challenges with precision.",
    },
    {
      id: 2,
      img: arc,
      title: "Professional Architects",
      dis: "Designing sustainable, modern spaces that harmonize with their environment and fulfill your vision.",
    },
    {
      id: 3,
      img: sur,
      title: "Accurate Surveying",
      dis: "Utilizing state-of-the-art surveying technology for pinpoint accuracy in every land assessment.",
    },
    {
      id: 4,
      img: qua,
      title: "Quality Construction",
      dis: "Upholding the highest standards of workmanship using premium materials and innovative methods.",
    },
    {
      id: 5,
      img: time,
      title: "Time Derlivery",
      dis: "Strict adherence to project timelines ensures your construction milestones are met without compromise.",
    },
    {
      id: 6,
      img: cli,
      title: "Client Satisfaction",
      dis: "Our commitment to transparency and communication builds lasting relationships with our clients.",
    },
  ];

  return (
    <div className="m-auto mt-10  md:p-5 lg:p-10">
      <h1 className="font-semibold text-center mt-10 mb-5">Why Choose Us?</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {data.map((data) => {
          return (
            <div
              className="flex flex-col border rounded-2xl border-secondary items-start p-5"
              key={data.id}
            >
              <div className="bg-gray-100 w-13 h-13 flex items-center justify-center rounded-full mb-3">
                <img src={data.img} alt={data.title} />
              </div>
              <h2 className="font-semibold text-lg mb-2">{data.title}</h2>
              <p className="text-gray-600">{data.dis}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyChoose;
