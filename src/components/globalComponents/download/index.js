import React from "react";

// Assets and Styling
import "./index.css";
import MyCv from "../../../assets/pdf/KEVINPARAYRECV.pdf";

// Components

const Download = () => {
  return (
    <div className="profil-content-dl">
      <a href={MyCv} download="KEVINPARAYRECV.pdf">
        Télécharger mon CV
      </a>
    </div>
  );
};

export default Download;
