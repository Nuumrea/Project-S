import React, { useState, useEffect } from "react";

// Assets and Styling
import "./index.css";

// Components

const SkillsBar = ({ data }) => {
  const [isSkill75, setIsSkill75] = useState(false);

  useEffect(() => {
    const skillsBar = () => {
      if (data.percent === "75%") {
        setIsSkill75(true);
      }
    };
    skillsBar();
  }, [data.percent]);

  return (
    <div className="skillsBar-wrapper">
      <div className={isSkill75 ? "skillsBar-width-75" : "skillsBar-width-85"}>
        <div className="skillsBar-title fs-text black bg-pink">
          <span>{data.title}</span>
        </div>
      </div>
      <div className="skillsBar-percent fs-text">
        <span>{data.percent}</span>
      </div>
    </div>
  );
};

export default SkillsBar;
