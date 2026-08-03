// import React from "react";
import AHero from "../Components/About/AHero";
// import Work  from "../Components/About/Work";
import AboutCompany from "../Components/About/AboutCompany";
import Testimonial from "../Components/About/Testimonial";
import Expertise from "../Components/About/Expertise";
import Faq from "../Components/HomepageCm/Faq";
import Team from "../Components/About/Team";

const About = () => {
  return (
    <main className="max-w-[1400px] mt-10 lg:mt-0  mx-auto">
      <AHero />
      <AboutCompany />
      <Expertise />
      <Team />
      <Testimonial />
      <Faq />
    </main>
  );
};

export default About;
