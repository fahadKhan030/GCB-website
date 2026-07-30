// import React from "react";
import AHero from "../Components/About/AHero";
// import Work  from "../Components/About/Work";
import AboutCompany from "../Components/About/AboutCompany";
import Testimonial from "../Components/About/Testimonial";
import Expertise from "../Components/About/Expertise";
import Faq from "../Components/HomepageCm/Faq";

const About = () => {
  return (
    <main className="max-w-[1400px] mx-auto">
      <AHero />
      <AboutCompany />
      <Testimonial />
      <Expertise />
      <Faq />
    </main>
  );
};

export default About;
