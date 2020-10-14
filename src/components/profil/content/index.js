import React from "react";

// Styling
import "./index.css";
import MyCv from "../../../assets/pdf/KEVINPARAYRECV.pdf";
import Me from "../../../assets/pics/kevin.png";
// Components

const Content = () => {
  return (
    <div className="profil-wrapper">
      <div className="profil-title">
        <span>À propos de moi</span>
      </div>
      <div className="profil-content">
        <div className="profil-content-img">
          <img src={Me} alt="me" />
        </div>
        <div className="profil-content-description">
          <p>
            Jeune homme de 30 ans ayant décidé, après avoir été sous-chef dans
            des restaurants bistronomique, de me reconvertir dans le domaine du
            développement Web et Mobile. la cuisine m’a appris à être soucieux
            du détail par son exigence, tout en restant efficace par son rythme
            de travail. La formation intensive du Reacteur m’a permis d’intégrer
            les concepts de la programmation Javascript et de confirmer mon
            désir de monter en compétences dans le domaine du développement au
            sein d’une entreprise.
          </p>
        </div>
      </div>
      <div className="profil-content-dl">
        <a href={MyCv} download="KEVINPARAYRECV.pdf">
          Télécharger mon CV
        </a>
      </div>
      <div className="profil-title">
        <span>Compétences</span>
      </div>
    </div>
  );
};

export default Content;
