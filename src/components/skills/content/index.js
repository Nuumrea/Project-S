import React from "react";

// Components
import SkillsBar from "../skillsBar/index.js";
import Nindo from "../nindo/index.js";
// Assets and Styling
import "./index.css";
import Clock from "../../../assets/png/clock.png";
import Light from "../../../assets/png/lightbulb.png";
import Responsive from "../../../assets/png/responsive.png";
import Ship from "../../../assets/png/rocket.png";

const Skills = ({ data }) => {
  let skillsData = [
    {
      title: "React",
      percent: "75%",
    },
    {
      title: "HTML",
      percent: "85%",
    },
    {
      title: "CSS",
      percent: "85%",
    },
    {
      title: "JavaScript",
      percent: "75%",
    },
  ];

  let dataNindo = [
    {
      img: Clock,
      title: "Rapide",
      description:
        "Des temps de chargement rapides et sans lag, sont ma prioritées absolue.",
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
        <div className="skills-title fs-title">
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
          {skillsData.map((data, index) => {
            return <SkillsBar data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
