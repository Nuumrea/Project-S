import React from "react";

// Assets and Styling
import "./index.css";

// Components
import Download from "../../globalComponents/download/index";

const ProfilContent = () => {
  return (
    <section id="profil" className="profil-wrapper">
      <div>
        <div className="profil-title fs-title">
          <div>
            <span>Profil</span>
          </div>
        </div>
        <div className="profil-subtitle fs-title pink">
          <span id="profil1">Qui</span>
          <span id="profil2"> suis</span>
          <span id="profil3">-</span>
          <span id="profil4">je</span>
          <span id="profil5"> ?</span>
        </div>
        <div className="profil-description fs-text">
          <p>
            Jeune homme de 30 ans ayant décidé, après avoir été sous-chef dans
            des restaurants bistronomique, de me reconvertir dans le domaine du
            développement Web et Mobile.
            <br />
            <br />
            la cuisine m’a appris à être soucieux du détail par son exigence,
            tout en restant efficace par son rythme de travail.
            <br />
            <br />
            La formation intensive du Reacteur m’a permis d’intégrer les
            concepts de la programmation Javascript et de confirmer mon désir de
            monter en compétences dans le domaine du développement au sein d’une
            entreprise.
          </p>
        </div>
        <Download />
      </div>
    </section>
  );
};

export default ProfilContent;
