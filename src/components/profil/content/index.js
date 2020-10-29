import React from "react";

// Assets and Styling
import "./index.css";
import Me from "../../../assets/pics/kevin.png";
import Clock from "../../../assets/png/clock.png";
import Light from "../../../assets/png/lightbulb.png";
import Responsive from "../../../assets/png/responsive.png";
import Ship from "../../../assets/png/rocket.png";

// Components
import Title from "../../globalComponents/title/index";
import Download from "../../globalComponents/download/index";
import Skills from "../skills/index";
import Nindo from "../nindo/index";

const Content = () => {
  let titleSection = "À propos";
  let skillsIcon = [
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
    <section id="profil" className="profil-wrapper">
      <Title title={titleSection} />
      <div className="nindo-content">
        {dataNindo.map((data, index) => {
          return <Nindo data={data} key={index} />;
        })}
      </div>
      <div className="profil-content">
        <div className="profil-content-block1">
          <div>
            <img src={Me} alt="me" />
          </div>
          <div>
            <div>
              <span>Qui suis-je ?</span>
            </div>
            <div>
              <p>
                Jeune homme de 30 ans ayant décidé, après avoir été sous-chef
                dans des restaurants bistronomique, de me reconvertir dans le
                domaine du développement Web et Mobile. la cuisine m’a appris à
                être soucieux du détail par son exigence, tout en restant
                efficace par son rythme de travail. La formation intensive du
                Reacteur m’a permis d’intégrer les concepts de la programmation
                Javascript et de confirmer mon désir de monter en compétences
                dans le domaine du développement au sein d’une entreprise.
              </p>
              <Download />
            </div>
          </div>
        </div>
        <div className="profil-content-block2">
          {skillsIcon.map((data, index) => {
            return <Skills data={data} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Content;
