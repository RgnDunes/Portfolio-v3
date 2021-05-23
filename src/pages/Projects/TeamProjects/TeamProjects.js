import React from "react";

import "./TeamProjects.css";
import Project from "../../../components/Project/Project";
import CorruptionFreeIndia from "../../../assets/images/projects/corruptionfreeindia.png";
import DigiBadge from "../../../assets/images/projects/digibadge.png";

const TeamProjects = () => {
  return (
    <div className="teamProjects">
      <h2>Team Projects</h2>
      <div className="teamProjects__content">
        <Project
          projectIndex="01"
          projectName="CorruptionFreeIndia"
          projectImage={CorruptionFreeIndia}
          projectGitUrl="https://github.com/Ankitkumar98/CorruptionFreeIndia"
          projectDescription=""
          projectSkills={["HTML", "CSS", "PHP", "Javascript"]}
          projectStartDate="29 Dec, 2020"
          projectEndDate="Present"
          projectType="Team"
        />
        <Project
          projectIndex="02"
          projectName="DigiBadge"
          projectImage={DigiBadge}
          projectGitUrl="https://github.com/Ankitkumar98/DIGIBADGE"
          projectDescription=""
          projectSkills={["HTML", "CSS", "Javascript", "PHP"]}
          projectStartDate="06 Nov, 2020"
          projectEndDate="Present"
          projectType="Team"
        />
      </div>
    </div>
  );
};

export default TeamProjects;
