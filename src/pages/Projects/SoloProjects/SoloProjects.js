import React from "react";

import "./SoloProjects.css";
import Project from "../../../components/Project/Project";
import Covidcare from "../../../assets/images/projects/covid19tracker.png";
import PortfolioV2 from "../../../assets/images/projects/portfolio.png";
import Slack from "../../../assets/images/projects/slack.png";
import Covid19Tracker from "../../../assets/images/projects/covid19tracker.png";
import Netflix from "../../../assets/images/projects/netflix.png";
import LetsBlog from "../../../assets/images/projects/letsblog.png";
import Twitter from "../../../assets/images/projects/twitter.png";
import Tinder from "../../../assets/images/projects/tinder.png";
import Youtube from "../../../assets/images/projects/youtube.png";
import Amazon from "../../../assets/images/projects/amazon.png";
import Weather from "../../../assets/images/projects/weather.png";
import Keyboard from "../../../assets/images/projects/keyboard.png";
import Goblin from "../../../assets/images/projects/goblin.png";

const SoloProjects = () => {
  return (
    <div className="soloProjects">
      <h2>Solo Projects</h2>
      <div className="soloProjects__content">
        <Project
          projectIndex="01"
          projectName="CovidCare ( Commodity Distribution and Billing System - CoVID-19 )"
          projectImage={Covidcare}
          projectGitUrl="https://github.com/RgnDunes/CovidCare-Commodity-Distribution-and-Billing-System-CoVID-19"
          projectHostedUrl="https://dunes-covid-care.herokuapp.com/"
          projectDescription=""
          projectSkills={["Flask", "HTML", "CSS", "Bootstrap"]}
          projectStartDate="30 May, 2020"
          projectEndDate="Present"
          projectType="Solo"
        />
        <Project
          projectIndex="03"
          projectName="Portfolio-v2"
          projectImage={PortfolioV2}
          projectGitUrl="https://github.com/RgnDunes/Portfolio-v2"
          projectHostedUrl="https://rgndunes-portfolio-v2.herokuapp.com/"
          projectDescription=""
          projectSkills={["Python", "CSS", "HTML", "Flask"]}
          projectStartDate="7 Mar, 2021"
          projectEndDate="23 Mar, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="04"
          projectName="Google Clone"
          projectImage="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          projectGitUrl="https://github.com/RgnDunes/Google-Clone"
          projectHostedUrl="https://dunes-chrome-clone-react.web.app/"
          projectDescription=""
          projectSkills={[
            "Javascript",
            "CSS",
            "HTML",
            "ReactJS",
            "Firebase",
            "Google Custom Search API",
            "Material-UI",
          ]}
          projectStartDate="09 May, 2021"
          projectEndDate="09 May, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="05"
          projectName="Slack Clone"
          projectImage={Slack}
          projectGitUrl="https://github.com/RgnDunes/Slack-Clone"
          projectHostedUrl="https://dunes-slack-clone-react.web.app/"
          projectDescription=""
          projectSkills={[
            "Javascript",
            "CSS",
            "HTML",
            "ReactJS",
            "Firebase",
            "Google Auth",
            "Material-UI",
          ]}
          projectStartDate="07 May, 2021"
          projectEndDate="08 May, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="06"
          projectName="CoVID-19 Tracker"
          projectImage={Covid19Tracker}
          projectGitUrl="https://github.com/RgnDunes/COVID-19-Tracker"
          projectHostedUrl="https://dunes-covid-19-tracker-react.web.app/"
          projectDescription=""
          projectSkills={[
            "Javascript",
            "CSS",
            "HTML",
            "ReactJS",
            "Firebase",
            "Material-UI",
          ]}
          projectStartDate="01 May, 2021"
          projectEndDate="30 Apr, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="07"
          projectName="Netflix Clone"
          projectImage={Netflix}
          projectGitUrl="https://github.com/RgnDunes/Netflix-Clone"
          projectHostedUrl="https://dunes-netflix-clone-react.web.app/"
          projectDescription=""
          projectSkills={[
            "Javascript",
            "CSS",
            "HTML",
            "ReactJS",
            "Firebase",
            "Material-UI",
            "react-youtube",
            "movie-trailer",
            "axios",
          ]}
          projectStartDate="25 Apr, 2021"
          projectEndDate="28 Apr, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="08"
          projectName="Twitter Clone"
          projectImage={Twitter}
          projectGitUrl="https://github.com/RgnDunes/Twitter-Clone"
          projectHostedUrl="https://dunes-twitter-clone-react.web.app/"
          projectDescription=""
          projectSkills={[
            "Javascript",
            "CSS",
            "HTML",
            "ReactJS",
            "Firebase",
            "react-flip-move",
            "Material-UI",
          ]}
          projectStartDate="06 May, 2021"
          projectEndDate="06 May, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="09"
          projectName="Gitify"
          projectImage="https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg"
          projectGitUrl="https://github.com/RgnDunes/Gitify"
          projectHostedUrl="https://rgndunes.github.io/Gitify/"
          projectDescription=""
          projectSkills={["ReactJS", "HTML", "CSS", "Github API"]}
          projectStartDate="29 Dec, 2020"
          projectEndDate="31 Jan, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="10"
          projectName="Let's Blog"
          projectImage={LetsBlog}
          projectGitUrl="https://github.com/RgnDunes/Let-s-Blog"
          projectDescription=""
          projectSkills={["Flask", "Python", "HTML", "CSS"]}
          projectStartDate="21 Nov, 2020"
          projectEndDate="30 Nov, 2020"
          projectType="Solo"
        />
        <Project
          projectIndex="11"
          projectName="Tinder Clone"
          projectImage={Tinder}
          projectGitUrl="https://github.com/RgnDunes/Tinder-Clone"
          projectHostedUrl="https://dunes-tinder-clone-react.web.app/"
          projectDescription=""
          projectSkills={[
            "react-tinder-card",
            "ReactJS",
            "Material-UI",
            "Javascript",
            "HTML",
            "CSS",
          ]}
          projectStartDate="01 May, 2021"
          projectEndDate="02 May, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="12"
          projectName="Youtube Clone"
          projectImage={Youtube}
          projectGitUrl="https://github.com/RgnDunes/Youtube-Clone"
          projectHostedUrl="https://dunes--clone-react-7120f.web.app/"
          projectDescription=""
          projectSkills={[
            "ReactJS",
            "Material-UI",
            "Javascript",
            "HTML",
            "CSS",
          ]}
          projectStartDate="03 May, 2021"
          projectEndDate="03 May, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="13"
          projectName="Amazon Clone"
          projectImage={Amazon}
          projectGitUrl="https://github.com/RgnDunes/Amazon-Clone"
          projectHostedUrl="https://dunes--clone-reactjs.web.app/"
          projectDescription=""
          projectSkills={[
            "ReactJS",
            "Material-UI",
            "Javascript",
            "HTML",
            "CSS",
            "react-context-api",
          ]}
          projectStartDate="27 Apr, 2021"
          projectEndDate="29 Apr, 2021"
          projectType="Solo"
        />
        <Project
          projectIndex="14"
          projectName="Weather Locator"
          projectImage={Weather}
          projectGitUrl="https://github.com/RgnDunes/Weather-Locator"
          projectHostedUrl="https://rgndunes-weather-locator-node.herokuapp.com/"
          projectDescription=""
          projectSkills={[
            "NodeJS",
            "Express",
            "Javascript",
            "HTML",
            "CSS",
            "WeatherStack API",
          ]}
          projectStartDate="17 Jun, 2020"
          projectEndDate="26 Dec, 2020"
          projectType="Solo"
        />
        <Project
          projectIndex="15"
          projectName="Keyboard Song"
          projectImage={Keyboard}
          projectGitUrl="https://github.com/RgnDunes/Keyboard-Song"
          projectHostedUrl="https://rgndunes.github.io/Keyboard-Song/"
          projectDescription=""
          projectSkills={["Javascript", "HTML"]}
          projectStartDate="27 May, 2020"
          projectEndDate="28 May, 2020"
          projectType="Solo"
        />
        <Project
          projectIndex="16"
          projectName="Kill The Goblin"
          projectImage={Goblin}
          projectGitUrl="https://github.com/RgnDunes/Kill-The-Goblin"
          projectDescription=""
          projectSkills={["Python", "Pygame"]}
          projectStartDate="10 Apr, 2020"
          projectEndDate="30 Apr, 2020"
          projectType="Solo"
        />
      </div>
    </div>
  );
};

export default SoloProjects;
