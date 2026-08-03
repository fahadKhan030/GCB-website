import React from "react";
import Service from "../Components/Service/ServiceS";
import OurValue from "../Components/Service/OurValue";
// import TextReveal from "../Components/Service/TextReveal";
import Prosses from "../Components/Service/Prosses";

const ServiceS = () => {
  return (
    <div className="max-w-[1400px] mx-auto mt-10 lg:mt-0 ">
      <Service />
      <OurValue />
      {/* <TextReveal/> */}
      <Prosses />
    </div>
  );
};

export default ServiceS;
