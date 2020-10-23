import React from "react";

// Assets and Styling
import "./index.css";
import ArrowTop from "../../../assets/png/arrowTop.png";
// Components

const ButtonToTop = () => {
  return (
    <div
      className="buttonToTop-wrapper"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
    >
      <img src={ArrowTop} alt="Icon" />
    </div>
  );
};

export default ButtonToTop;
