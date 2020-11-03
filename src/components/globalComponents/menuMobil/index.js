import React from "react";

// Components
import Menu from "../menu/index";

// Assets and Styling
import "./index.css";
import HomeWhite from "../../../assets/navBar/homeWhite.png";
import UserWhite from "../../../assets/navBar/userWhite.png";
import SettingsWhite from "../../../assets/navBar/settingsWhite.png";
import LetterWhite from "../../../assets/navBar/letterWhite.png";
import LayerWhite from "../../../assets/navBar/layerWhite.png";

const MenuMobil = () => {
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
    <div className="menuMobil-wrapper bg-black">
      {menuData.map((data, index) => {
        return (
          <Menu data={data} key={index} id={index} handleMenu={handleMenu} />
        );
      })}
    </div>
  );
};

export default MenuMobil;
