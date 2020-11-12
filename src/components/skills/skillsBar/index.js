import React from "react";

// Components

// Assets and Styling
import "./index.css";

const SkillsBar = ({ data }) => {
  return (
    <div className="skillsBar-wrapper bg-white">
      <div id={data.id} className="bg-medium-black">
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
