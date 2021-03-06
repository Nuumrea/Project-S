import React from "react";

// Components
import SocialMedia from "../socialMedia/index";

// Context

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
  isNav,
  setIsNav,
}) => {
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
    <header
      className={isNav ? "navBar-wrapper bg-light-black" : "navBar-home"}
      id="displayNav"
    >
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
              <img src={HomeWhite} alt="home icon" />
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
              <img src={ProfilWhite} alt="profil icon" />
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
              <img src={SkillsWhite} alt="skills icon" />
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
              <img src={ProjectWhite} alt="project icon" />
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
              <img src={ContactWhite} alt="contact icon" />
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
