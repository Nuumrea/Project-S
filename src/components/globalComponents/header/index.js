import React from "react";

// Assets and Styling
import "./index.css";

// Components

const Header = () => {
  return (
    <div className="header-wrapper">
      <div
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Home</span>
      </div>
      <div
        onClick={() => {
          document
            .getElementById("profil")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Profil</span>
      </div>
      <div
        onClick={() => {
          document
            .getElementById("project")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Project</span>
      </div>
      <div
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span>Contact</span>
      </div>
    </div>
  );
};

export default Header;
