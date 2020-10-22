import React from "react";

// Components
import SocialMedia from "../socialMedia/index";

// Styling and Assets
import "./index.css";
import Linkedin from "../../../assets/png/linkedin.png";
import Instagram from "../../../assets/png/instagram.png";

const Title = () => {
  const socialMedia = [
    {
      icon: Linkedin,
      link: "https://www.linkedin.com/in/kevin-parayre-915623184/",
    },
    {
      icon: Instagram,
      link: "https://github.com/Nuumrea",
    },
    {
      icon: Instagram,
      link: "https://www.instagram.com/kevin.parayre/",
    },
  ];
  return (
    <footer className="footer-wrapper">
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

export default Title;
