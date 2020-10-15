import React from "react";

// Styling
import "./index.css";

// Components

const Title = ({ title }) => {
  return (
    <div className="profil-title">
      <span>{title}</span>
    </div>
  );
};

export default Title;
