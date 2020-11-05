import React from "react";

// Styling
import "./index.css";
import Linkedin from "../../../assets/navBar/linkedin.png";
import Instagram from "../../../assets/navBar/instagram.png";
import Github from "../../../assets/navBar/github.png";

// Components
import SocialMedia from "../../globalComponents/socialMedia/index";

const Footer = () => {
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
    <footer id="footer" className="footer-wrapper bg-light-black">
      <div>
        {socialMediaData.map((data, index) => {
          return <SocialMedia data={data} key={index} />;
        })}
      </div>
      <div className="fs-text">
        <span>
          Kévin Parayre <span className="pink">©2020</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
