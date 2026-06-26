import React from "react";
import Hero from "../Components/HomepageCm/Hero";
import Status from "../Components/HomepageCm/Status";
import WhyChoose from "../Components/HomepageCm/WhyChoose";
import Portfolio from "../Components/HomepageCm/Portfolio";
import Faq from "../Components/HomepageCm/Faq";
import About from "../Components/HomepageCm/About";
import OurProsess from "../Components/HomepageCm/OurProsess";

const Home = () => {
  return (
    <main className="max-w-[1400px] mx-auto" >
      <Hero />
      <About />
      <Status />
      <WhyChoose />
      <OurProsess/>
      <Portfolio />
      <Faq />
    </main>
  );
};

export default Home;
