import React, { useEffect, useState } from "react";

// Components
import Download from "../../globalComponents/download/index";

// Context

// Assets and Styling
import "./index.css";

const ProfilContent = () => {
  const [isTitleProfil, setIsTitleProfil] = useState(false);

  useEffect(() => {
    const onScrollMenu = () => {
      if (window.scrollY >= 676 && window.scrollY < 1365) {
        setIsTitleProfil(true);
      }
    };
    onScrollMenu();
    window.addEventListener("scroll", onScrollMenu);
  }, [setIsTitleProfil]);

  return (
    <section id="profil" className="profil-wrapper">
      <div>
        <div
          id={isTitleProfil ? "slide-right" : "slide-false"}
          className="profil-title fs-title"
        >
          <div>
            <span>Profil</span>
          </div>
        </div>
        <div className="profil-subtitle fs-title pink">
          <span id={isTitleProfil ? "profil1" : "profil-false"}>Qui</span>
          <span id={isTitleProfil ? "profil2" : "profil-false"}> suis</span>
          <span id={isTitleProfil ? "profil3" : "profil-false"}>-</span>
          <span id={isTitleProfil ? "profil4" : "profil-false"}>je</span>
          <span id={isTitleProfil ? "profil5" : "profil-false"}> ?</span>
        </div>
        <div
          id={isTitleProfil ? "slide-bottom" : "slide-false"}
          className="profil-description fs-text"
        >
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
            <br />
            <br />
          </p>
          <Download />
        </div>
      </div>
    </section>
  );
};

export default ProfilContent;
