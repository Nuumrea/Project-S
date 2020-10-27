import React, { useState } from "react";

// Styling and Assets
import "./index.css";
import ArrowRight from "../../../assets/png/arrowRight.png";
import ArrowDown from "../../../assets/png/arrowDown.png";

// Components

const Button = ({ setIsProfil, setIsHome, setIsContact, setIsProject }) => {
  // State
  const [isButtonHover, setIsButtonHover] = useState(true);

  return (
    <div
      className="home-button"
      onMouseEnter={() => {
        setIsButtonHover(false);
      }}
      onMouseLeave={() => {
        setIsButtonHover(true);
      }}
      onClick={() => {
        document
          .getElementById("profil")
          .scrollIntoView({ behavior: "smooth" });
        setIsProfil(true);
        setIsHome(false);
        setIsContact(false);
        setIsProject(false);
      }}
    >
      <div>
        <span>Voir mon profil</span>
      </div>
      <div>
        {isButtonHover ? (
          <img src={ArrowRight} alt="arrow down Icon" />
        ) : (
          <img src={ArrowDown} alt="arrow down Icon" />
        )}
      </div>
    </div>
  );
};

export default Button;
