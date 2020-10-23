import React, { useState } from "react";

// Styling and Assets
import "./index.css";
import ArrowRight from "../../../assets/png/arrowRight.png";
import ArrowDown from "../../../assets/png/arrowDown.png";

// Components

const Button = () => {
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
