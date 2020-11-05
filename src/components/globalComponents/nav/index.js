import React, { useEffect } from "react";

// Components
import SocialMedia from "../socialMedia/index";

// Assets and Styling
import "./index.css";
import HomeWhite from "../../../assets/navBar/homeWhite.png";
import ProfilWhite from "../../../assets/navBar/userWhite.png";
import SkillsWhite from "../../../assets/navBar/settingsWhite.png";
import ContactWhite from "../../../assets/navBar/letterWhite.png";
import ProjectWhite from "../../../assets/navBar/layerWhite.png";
import K from "../../../assets/navBar/k.png";
import Linkedin from "../../../assets/navBar/linkedin.png";
import Instagram from "../../../assets/navBar/instagram.png";
import Github from "../../../assets/navBar/github.png";

const NavBar = ({
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
      if (window.scrollY >= 0 && window.scrollY < 676) {
        setIsHomeSelect(true);
        setIsProfilSelect(false);
        setIsSkillsSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 676 && window.scrollY < 1365) {
        setIsProfilSelect(true);
        setIsHomeSelect(false);
        setIsSkillsSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 1365 && window.scrollY < 2054) {
        setIsSkillsSelect(true);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
        setIsProjectSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 2054 && window.scrollY < 2743) {
        setIsProjectSelect(true);
        setIsSkillsSelect(false);
        setIsProfilSelect(false);
        setIsHomeSelect(false);
        setIsContactSelect(false);
      }
      if (window.scrollY >= 2743) {
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

  const socialMediaData = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/kevin-parayre-915623184/",
    },
    {
      icon: Github,
      link: "https://github.com/Nuumrea",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/kevin.parayre/",
    },
  ];

  return (
    <header className="navBar-wrapper bg-light-black">
      <div className="navBar-k bg-black">
        <div>
          <img src={K} alt="icon" />
        </div>
      </div>
      <div className="navBar-menu">
        <div className="navBar-menu-block1">
          <div
            className="menu-icon fs-menu"
            onClick={() => {
              document.getElementById("home").scrollIntoView({
                behavior: "smooth",
              });
            }}
          >
            {isHomeSelect ? (
              <span>Home</span>
            ) : (
              <img src={HomeWhite} alt="home" />
            )}
          </div>
          <div
            className="menu-icon fs-menu"
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
            className="menu-icon fs-menu"
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
            className="menu-icon fs-menu"
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
            className="menu-icon fs-menu"
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
        <div className="navBar-menu-block2">
          {socialMediaData.map((data, index) => {
            return <SocialMedia data={data} key={index} />;
          })}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
