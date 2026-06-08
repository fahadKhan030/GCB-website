import React from "react";
import Hero from "../Components/HomepageCm/Hero";
import Status from "../Components/HomepageCm/Status";
import WhyChoose from "../Components/HomepageCm/WhyChoose";
import Portfolio from "../Components/HomepageCm/Portfolio";
import Faq from "../Components/HomepageCm/Faq";
import About from "../Components/HomepageCm/About";

const Home = () => {
  return (
    <div className="m-auto">
      <Hero />
      <Status />
      <About />
      <WhyChoose />
      <Portfolio />
      <Faq />
    </div>
  );
};

export default Home;
