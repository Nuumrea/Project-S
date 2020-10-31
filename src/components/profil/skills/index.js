import React, { useState, useEffect } from "react";

// Assets and Styling
import "./index.css";

// Components

const Content = ({ data }) => {
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
    <div className="skills-wrapper">
      <div
        className={
          isSkill75
            ? "skills-bar-width bar-width-75 bg-blue"
            : "skills-bar-width bar-width-85 bg-blue"
        }
      >
        <div className="skills-title fs-text blue bg-pink">
          <span>{data.title}</span>
        </div>
      </div>
      <div className="skills-percent fs-text blue">
        <span>{data.percent}</span>
      </div>
    </div>
  );
};

export default Content;
