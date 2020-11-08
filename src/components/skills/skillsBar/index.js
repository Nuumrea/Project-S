import React, { useState, useEffect } from "react";

// Components

// Assets and Styling
import "./index.css";

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
    <div className="skillsBar-wrapper bg-white">
      <div
        className={
          isSkill75
            ? "skillsBar-width-75 bg-medium-black"
            : "skillsBar-width-85 bg-medium-black"
        }
      >
        <div className="skillsBar-title bg-pink black fs-text">
          <span>{data.title}</span>
        </div>
      </div>
      <div className="skillsBar-percent black fs-text">
        <span>{data.percent}</span>
      </div>
    </div>
  );
};

export default SkillsBar;
