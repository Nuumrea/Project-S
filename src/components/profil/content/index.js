import React from "react";

// Components
import Download from "../../globalComponents/download/index";

// Assets and Styling
import "./index.css";

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
            des restaurants bistronomiques, de me reconvertir dans le domaine du
            développement Web et Mobile.
            <br />
            <br />
            la cuisine m’a appris à être soucieux du détail par son exigence,
            tout en restant efficace par son rythme de travail.
            <br />
            <br />
            Suite à la formation du Reacteur, J'ai accompli un stage de 6 mois
            dans une start up à Station F. Je suis maintenant à la recherche
            d'un premier poste en tant que développeur front junior, tout en
            continuant de me former sur TypeScript et Redux.
          </p>
        </div>
        <Download />
      </div>
    </section>
  );
};

export default ProfilContent;
