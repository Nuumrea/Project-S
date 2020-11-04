import React, { useEffect } from "react";

// Components

// Assets and Styling
import "./index.css";
import HomeWhite from "../../../assets/navBar/homeWhite.png";
import ProfilWhite from "../../../assets/navBar/userWhite.png";
import SkillsWhite from "../../../assets/navBar/settingsWhite.png";
import ContactWhite from "../../../assets/navBar/letterWhite.png";
import ProjectWhite from "../../../assets/navBar/layerWhite.png";

const MenuMobil = ({
  isHomeSelect,
  setIsHomeSelect,
  isProfilSelect,
  setIsProfilSelect,
  isSkillsSelect,
  setIsSkillsSelect,
  isProjectSelect,
  setIsProjectSelect,
  isContactSelect,
  setIsContactSelect,
}) => {
  useEffect(() => {
    const onScrollMenu = () => {
      if (window.scrollY >= 0 && window.scrollY < 689) {
        setIsHomeSelect(true);
        setIsProfilSelect(false);
        setIsSkillsSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 689 && window.scrollY < 1378) {
        setIsProfilSelect(true);
        setIsHomeSelect(false);
        setIsSkillsSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 1378 && window.scrollY < 2067) {
        setIsSkillsSelect(true);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 2067 && window.scrollY < 2257) {
        setIsProjectSelect(true);
        setIsSkillsSelect(false);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 2257) {
        setIsContactSelect(true);
        setIsProjectSelect(false);
        setIsSkillsSelect(false);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
      }
    };
    onScrollMenu();
    window.addEventListener("scroll", onScrollMenu);
  }, [
    setIsHomeSelect,
    setIsProfilSelect,
    setIsSkillsSelect,
    setIsProjectSelect,
    setIsContactSelect,
  ]);

  return (
    <div className="menuMobil-wrapper bg-black">
      <div
        className="menu-icon-mobil fs-menu"
        onClick={() => {
          setIsHomeSelect(true);
          setIsProfilSelect(false);
          setIsSkillsSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
          document.getElementById("home").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {isHomeSelect ? <span>Home</span> : <img src={HomeWhite} alt="home" />}
      </div>
      <div
        className="menu-icon-mobil fs-menu"
        onClick={() => {
          setIsProfilSelect(true);
          setIsHomeSelect(false);
          setIsSkillsSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
          document.getElementById("profil").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {isProfilSelect ? (
          <span>Profil</span>
        ) : (
          <img src={ProfilWhite} alt="profil" />
        )}
      </div>
      <div
        className="menu-icon-mobil fs-menu"
        onClick={() => {
          setIsSkillsSelect(true);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
          document.getElementById("skills").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {isSkillsSelect ? (
          <span>Compétences</span>
        ) : (
          <img src={SkillsWhite} alt="skills" />
        )}
      </div>
      <div
        className="menu-icon-mobil fs-menu"
        onClick={() => {
          setIsProjectSelect(true);
          setIsSkillsSelect(false);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          setIsContactSelect(false);
          document.getElementById("project").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {isProjectSelect ? (
          <span>Projets</span>
        ) : (
          <img src={ProjectWhite} alt="project" />
        )}
      </div>
      <div
        className="menu-icon-mobil fs-menu"
        onClick={() => {
          setIsContactSelect(true);
          setIsProjectSelect(false);
          setIsSkillsSelect(false);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          document.getElementById("contact").scrollIntoView({
            behavior: "smooth",
          });
        }}
      >
        {isContactSelect ? (
          <span>Contact</span>
        ) : (
          <img src={ContactWhite} alt="contact" />
        )}
      </div>
    </div>
  );
};

export default MenuMobil;
