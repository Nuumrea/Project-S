import React from "react";

// Assets and Styling
import "./index.css";

// Components

const Content = ({ data }) => {
  return (
    <div className="profil-content-skills">
      <img src={data.icon} alt="icon" />
    </div>
  );
};

export default Content;
