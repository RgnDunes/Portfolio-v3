import React, { useState, useEffect } from "react";

import "./Skills.css";
import { db } from "../../../firebase";
import C from "../../../assets/images/skills/c.png";
import CPlusPlus from "../../../assets/images/skills/cPlusPlus.png";
import Python from "../../../assets/images/skills/python.png";
import Flask from "../../../assets/images/skills/flask.png";
import NodeJS from "../../../assets/images/skills/node.png";
import ReactJS from "../../../assets/images/skills/react.png";
import Firebase from "../../../assets/images/skills/firebase.png";
import Github from "../../../assets/images/skills/github.png";
import CHash from "../../../assets/images/skills/cHash.svg";
import Html from "../../../assets/images/skills/html.png";
import Css from "../../../assets/images/skills/css.png";
import Javascript from "../../../assets/images/skills/javascript.png";
import Bootstrap from "../../../assets/images/skills/bootstrap.svg";
import Jquery from "../../../assets/images/skills/jquery.png";
import Numpy from "../../../assets/images/skills/numpy.svg";
import Pandas from "../../../assets/images/skills/pandas.png";
import Pygame from "../../../assets/images/skills/pygame.png";
import SQLAlchemy from "../../../assets/images/skills/sqlalchemy.png";

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    db.collection("images")
      .doc("IIN64O9vGJsY0lamjNsE")
      .collection("skills")
      .onSnapshot((snapshot) =>
        setSkills(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <div className="skills">
      <h2>🖊 Languages, Tools & Frameworks 🖊 </h2>
      <div className="skills__badgesContainer">
        <div className="skills__badges">
          {/* {skills?.map(({ skillname, url }) => (
            <img key={skillname} src={url} alt={skillname} />
          ))} */}
          <img src={C} alt="C" />
          <img src={CPlusPlus} alt="C++" />
          <img src={Python} alt="Python" />
          <img src={Flask} alt="Flask" />
          <img src={ReactJS} alt="ReactJS" />
          <img src={NodeJS} alt="NodeJS" />
          <img src={Firebase} alt="Firebase" />
          <img src={Github} alt="Github" />
          <img src={CHash} alt="C#" />
          <img src={Html} alt="HTML" />
          <img src={Css} alt="CSS" />
          <img src={Javascript} alt="Javascript" />
          <img src={Bootstrap} alt="Bootstrap" />
          <img src={Jquery} alt="Jquery" />
          <img src={Numpy} alt="Numpy" />
          <img src={Pandas} alt="Pandas" />
          <img src={Pygame} alt="Pygame" />
          <img src={SQLAlchemy} alt="SQLAlchemy" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
