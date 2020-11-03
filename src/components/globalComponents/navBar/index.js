import React from "react";

// Components
import SocialMedia from "../socialMedia/index";
import Menu from "../menu/index";

// Assets and Styling
import "./index.css";
import HomeWhite from "../../../assets/navBar/homeWhite.png";
import UserWhite from "../../../assets/navBar/userWhite.png";
import SettingsWhite from "../../../assets/navBar/settingsWhite.png";
import LetterWhite from "../../../assets/navBar/letterWhite.png";
import LayerWhite from "../../../assets/navBar/layerWhite.png";
import K from "../../../assets/navBar/k.png";
import Linkedin from "../../../assets/navBar/linkedin.png";
import Instagram from "../../../assets/navBar/instagram.png";
import Github from "../../../assets/navBar/github.png";

const NavBar = () => {
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

  const menuData = [
    {
      title: "Home",
      icon: HomeWhite,
      link: "/",
    },
    {
      title: "Profil",
      icon: UserWhite,
      link: "/profil",
    },
    {
      title: "Compétences",
      icon: SettingsWhite,
      link: "/skills",
    },
    {
      title: "Projets",
      icon: LayerWhite,
      link: "/project",
    },
    {
      title: "Contact",
      icon: LetterWhite,
      link: "/contact",
    },
  ];

  const arrayInfo = [];
  const handleMenu = (isMenuSelect, setIsMenuSelect, id) => {
    setIsMenuSelect(!isMenuSelect);
    let foundId = false;
    for (let i = 0; i < arrayInfo.length; i++) {
      if (arrayInfo[i].key === id) {
        foundId = true;
        let tmp = arrayInfo[i];
        tmp.state = !tmp.state;
        arrayInfo[i] = tmp;
      } else {
        let marker = arrayInfo[i];
        marker.func(false);
      }
    }
    if (!foundId) {
      arrayInfo.push({ key: id, state: isMenuSelect, func: setIsMenuSelect });
    }
  };

  return (
    <header className="navBar-wrapper bg-light-black">
      <div className="navBar-k bg-black">
        <div>
          <img src={K} alt="icon" />
        </div>
      </div>
      <div className="navBar-menu">
        <div className="navBar-menu-block1">
          {menuData.map((data, index) => {
            return (
              <Menu
                data={data}
                key={index}
                id={index}
                handleMenu={handleMenu}
              />
            );
          })}
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
