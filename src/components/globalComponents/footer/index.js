import React from "react";

// Components
import SocialMedia from "../socialMedia/index";
import ButtonToTop from "../buttonToTop/index.js";

// Styling and Assets
import "./index.css";
import Linkedin from "../../../assets/png/linkedin.png";
import Instagram from "../../../assets/png/instagram.png";
import Github from "../../../assets/png/github.png";

const Footer = ({ setIsProfil, setIsHome, setIsProject, setIsContact }) => {
  const socialMedia = [
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
    <footer className="footer-wrapper bg-blue">
      <ButtonToTop
        setIsProfil={setIsProfil}
        setIsHome={setIsHome}
        setIsProject={setIsProject}
        setIsContact={setIsContact}
      />
      <div className="footer-icon-container">
        {socialMedia.map((data, index) => {
          return <SocialMedia data={data} key={index} />;
        })}
      </div>
      <div className="footer-text fs-text">
        <span>
          Kevin Parayre <span>©2020</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
