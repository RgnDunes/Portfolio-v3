import React, { useState } from "react";

import "./AddSkill.css";

const AddSkill = () => {
  const [skillUrl, setSkillUrl] = useState("");
  const [skillName, setSkillName] = useState("");

  return (
    <div className="addskill">
      <h2>➕ Add Skill ➕</h2>
      <form action="#">
        <input
          type="url"
          name="skillurl"
          value={skillUrl}
          onChange={(e) => setSkillUrl(e.target.value)}
          placeholder="Enter the url of skill icon"
          pattern="https?://.+"
          title="Include http://"
          required
        />
        <input
          type="text"
          name="skillname"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Enter the skill name"
          required
        />
        <input type="submit" value="Add" />
      </form>
    </div>
  );
};

export default AddSkill;
