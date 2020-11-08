import React from "react";

// Components

// Assets and Styling
import "./index.css";
import MyCv from "../../../assets/pdf/KEVINPARAYRECV.pdf";

const Download = () => {
  return (
    <div className="profil-content-dl fs-text">
      <a href={MyCv} download="KEVINPARAYRECV.pdf">
        Télécharger mon CV
      </a>
    </div>
  );
};

export default Download;
