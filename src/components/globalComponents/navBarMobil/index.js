import React from "react";

// Components

// Assets and Styling
import "./index.css";
import K from "../../../assets/navBar/k.png";
import MenuIcon from "../../../assets/navBar/menu.png";

const NavBarMobil = ({ isMenuExtend, setIsMenuExtend }) => {
  return (
    <header className="navMobil-wrapper bg-light-black">
      <div className="navMobil-k bg-black">
        <div>
          <img src={K} alt="icon" />
        </div>
      </div>
      <div className="navMobil-menu">
        <div
          onClick={() => {
            setIsMenuExtend(!isMenuExtend);
          }}
        >
          <img src={MenuIcon} alt="icon" />
        </div>
      </div>
    </header>
  );
};

export default NavBarMobil;
