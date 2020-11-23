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
  let scrollPosition = Math.round(window.scrollY);
  useEffect(() => {
    const onScrollMenuMobil = () => {
      if (scrollPosition >= 0 && scrollPosition < 676) {
        setIsHomeSelect(true);
        setIsProfilSelect(false);
        setIsSkillsSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (scrollPosition >= 676 && scrollPosition < 1365) {
        setIsProfilSelect(true);
        setIsHomeSelect(false);
        setIsSkillsSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (scrollPosition >= 1365 && scrollPosition < 1977) {
        setIsSkillsSelect(true);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (scrollPosition >= 1977 && scrollPosition < 2743) {
        setIsProjectSelect(true);
        setIsSkillsSelect(false);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
        setIsContactSelect(false);
      }
      if (scrollPosition >= 2743) {
        setIsContactSelect(true);
        setIsProjectSelect(false);
        setIsSkillsSelect(false);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
      }
    };
    onScrollMenuMobil();
    window.addEventListener("scroll", onScrollMenuMobil);
  }, [
    setIsHomeSelect,
    setIsProfilSelect,
    setIsSkillsSelect,
    setIsProjectSelect,
    setIsContactSelect,
    scrollPosition,
  ]);

  return (
    <div className="menuMobil-wrapper bg-black">
      <div
        className="menu-icon-mobil fs-menu"
        onClick={() => {
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
