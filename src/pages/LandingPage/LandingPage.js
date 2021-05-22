import React from "react";
import Banner from "./Banner/Banner";
import Skills from "./Skills/Skills";
import Experience from "./Experience/Experience";
// import Experience from "./Experience/Experience";

const LandingPage = () => {
  return (
    <div className="landingPage">
      <Banner />
      <Skills />
      <Experience />
    </div>
  );
};

export default LandingPage;
