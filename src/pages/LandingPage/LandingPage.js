import React from "react";
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
import Projects from "./Projects/Projects";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Banner />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
};

export default LandingPage;
