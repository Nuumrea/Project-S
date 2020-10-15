import React from "react";

// Assets and Styling
import "./index.css";
import Me from "../../../assets/pics/kevin.png";
import ReactIcon from "../../../assets/png/react.png";
import HtmlIcon from "../../../assets/png/html.png";
import CssIcon from "../../../assets/png/css.png";
import JsIcon from "../../../assets/png/js.png";

// Components
import Title from "../../globalComponents/title/index";
import Download from "../../globalComponents/download/index";
import Skills from "../../globalComponents/skills/index";

const Content = () => {
  let titleSection = "À propos de moi";
  let skillsIcon = [
    {
      icon: ReactIcon,
    },
    {
      icon: HtmlIcon,
    },
    {
      icon: CssIcon,
    },
    {
      icon: JsIcon,
    },
  ];

  return (
    <div className="profil-wrapper">
      <Title title={titleSection} />
      <div className="profil-content">
        <div className="profil-content-block1">
          <div>
            <img src={Me} alt="me" />
          </div>
          <div>
            <p>
              Jeune homme de 30 ans ayant décidé, après avoir été sous-chef dans
              des restaurants bistronomique, de me reconvertir dans le domaine
              du développement Web et Mobile. la cuisine m’a appris à être
              soucieux du détail par son exigence, tout en restant efficace par
              son rythme de travail. La formation intensive du Reacteur m’a
              permis d’intégrer les concepts de la programmation Javascript et
              de confirmer mon désir de monter en compétences dans le domaine du
              développement au sein d’une entreprise.
            </p>
          </div>
        </div>
        <div className="profil-content-block2">
          {skillsIcon.map((data, index) => {
            return <Skills data={data} key={index} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Content;
