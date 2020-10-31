import React from "react";

// Styling
import "./index.css";

// Components

const Title = ({ title }) => {
  return (
    <div className="profil-title fs-title blue">
      <span>{title}</span>
    </div>
  );
};

export default Title;
