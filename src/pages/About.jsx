import React from "react";
import AHero from "../Components/About/AHero";
import Work  from "../Components/About/Work";
import AboutCompany from "../Components/About/AboutCompany";
import Testimonial from "../Components/About/Testimonial";
import Expertise from "../Components/About/Expertise";

const About = () => {
  return <main>
    <AHero/>
    {/* <Work/> */}
    <AboutCompany/>
    <Testimonial/>
    <Expertise/>
  </main>;
};

export default About;
