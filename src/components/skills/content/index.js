import React, { useState, useEffect } from "react";

// Components
import SkillsBar from "../skillsBar/index.js";
import Nindo from "../nindo/index.js";

// Assets and Styling
import "./index.css";
import SkillsData from "../../../assets/data/SkillsData";
import NindoData from "../../../assets/data/NindoData";

const Skills = ({ data }) => {
  const [isTitleSkills, setIsTitleSkills] = useState(false);

  useEffect(() => {
    const onScrollMenu = () => {
      if (window.scrollY >= 1365 && window.scrollY < 2054) {
        setIsTitleSkills(true);
      }
    };
    onScrollMenu();
    window.addEventListener("scroll", onScrollMenu);
  }, [setIsTitleSkills]);

  return (
    <section id="skills" className="skills-wrapper">
      <div>
        <div
          id={isTitleSkills ? "slidein-true" : "slidein-false"}
          className="skills-title fs-title"
        >
          <div>
            <span>Compétences</span>
          </div>
        </div>
        <div className="skills-nindo-container">
          {NindoData.map((data, index) => {
            return <Nindo data={data} key={index} />;
          })}
        </div>
        <div>
          {SkillsData.map((data, index) => {
            return <SkillsBar data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
