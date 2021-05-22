import React from "react";

import "./Experience.css";
import Card from "../../../components/Card/Card";

const Experience = () => {
  return (
    <div className="experience">
      <h2>Experiences</h2>
      <div className="experience__wrapper">
        <Card
          index="01"
          companyName="Razorpay"
          startDate="17 May, 2021"
          endDate="Present"
          certificateUrl=""
          designation="Frontend SDE Intern"
          websiteUrl="https://razorpay.com/"
          description="So I'm currently a Frontend SDE Intern @Razorpay."
        />
        <Card
          index="02"
          companyName="Correlations.Ai"
          startDate="18 Dec, 2020"
          endDate="18 Feb, 2021"
          certificateUrl="https://razorpay.com/"
          designation="SWE Intern"
          websiteUrl="https://correlations.ai/#/home"
          description="During this period I worked on Login Infra and Mail Services for Correlations.Ai. I worked on various frameworks including ReactJS, Python, Flask, MongoDB."
        />
        <Card
          index="03"
          companyName="GeeksforGeeks"
          startDate="08 Oct, 2020"
          endDate="Present"
          certificateUrl=""
          designation="Technical Conternt Writer Intern"
          websiteUrl="https://auth.geeksforgeeks.org/user/divyansh1802intern/articles"
          description="As a Technical Content Writer I've published 9 artices till date and improved two pre-existing articles on GeeksforGeeks in various technologies like, Python, Flask, ReactJS."
        />
        <Card
          index="04"
          companyName="Taghive"
          startDate="05 Aug, 2020"
          endDate="31 Oct, 2020"
          certificateUrl=""
          designation="UI/UX Intern"
          websiteUrl="https://play.google.com/store/apps/details?id=com.tag_hive.saathi.saathi&hl=en_IN&gl=US"
          description="In this internship for I worked on the UI of ClassSaathi app which is available on Playstore for free."
        />
      </div>
    </div>
  );
};

export default Experience;
