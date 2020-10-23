import React from "react";

// Components
import SocialMedia from "../socialMedia/index";
import ButtonToTop from "../buttonToTop/index.js";

// Styling and Assets
import "./index.css";
import Linkedin from "../../../assets/png/linkedin.png";
import Instagram from "../../../assets/png/instagram.png";
import Github from "../../../assets/png/github.png";

const Footer = () => {
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
    <footer className="footer-wrapper">
      <ButtonToTop />
      <div className="footer-icon-container">
        {socialMedia.map((data, index) => {
          return <SocialMedia data={data} key={index} />;
        })}
      </div>
      <div className="footer-text">
        <span>
          Kevin Parayre <span>©2020</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
