import React from "react";

const Status = () => {
  const statusData = [
    {
      id: 1,
      value: "150+",
      title: "Projects done",
    },
    {
      id: 2,
      value: "100%",
      title: "happy clients",
    },
    {
      id: 3,
      value: "20+",
      title: "Years of experience",
    },
    {
      id: 4,
      value: "50+",
      title: "Team members",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2  mt-5 md:mt-8 md:p-5 lg:p-10">
      {statusData.map((item) => {
        return (
          <div
            key={item.id}
            className="flex flex-col items-center bg-gray-100 gap-2 rounded-md p-3"
          >
            <h2 className="text-3xl font-bold text-primary">{item.value}</h2>
            <p className="text-gray-600 font-semibold">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Status;
