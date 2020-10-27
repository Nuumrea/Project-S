import React from "react";

// Assets and Styling
import "./index.css";
import ArrowTop from "../../../assets/png/arrowTop.png";
// Components

const ButtonToTop = ({
  setIsProfil,
  setIsHome,
  setIsProject,
  setIsContact,
}) => {
  return (
    <div
      className="buttonToTop-wrapper"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setIsHome(false);
        setIsProfil(false);
        setIsContact(false);
        setIsProject(false);
      }}
    >
      <img src={ArrowTop} alt="Icon" />
    </div>
  );
};

export default ButtonToTop;
