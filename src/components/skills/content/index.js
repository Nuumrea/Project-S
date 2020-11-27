import React, { useState, useEffect } from "react";

// Components
import SkillsBar from "../skillsBar/index.js";
import Nindo from "../nindo/index.js";

// Assets and Styling
import "./index.css";
import Clock from "../../../assets/png/clock.png";
import Light from "../../../assets/png/lightbulb.png";
import Responsive from "../../../assets/png/responsive.png";
import Ship from "../../../assets/png/rocket.png";
import SkillsData from "../../../assets/data/SkillsData";

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

  let dataNindo = [
    {
      img: Clock,
      title: "Rapide",
      description:
        "Des temps de chargement rapides et sans lag, sont ma prioritée absolue.",
    },
    {
      img: Responsive,
      title: "Responsive",
      description: "Des layout qui fonctionneront sur n'importe quel appareil.",
    },
    {
      img: Light,
      title: "Intuitif",
      description:
        "Une forte préférence pour une UX / UI facile à utiliser et intuitive.",
    },
    {
      img: Ship,
      title: "Dynamique",
      description: "Les sites Web n'ont pas besoin d'être statiques.",
    },
  ];

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
          {dataNindo.map((data, index) => {
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
