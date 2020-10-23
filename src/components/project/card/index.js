import React from "react";

// Styling
import "./index.css";
import LeKaba from "../../../assets/card/lekabaHome.png";

// Components

const Card = () => {
  return (
    <div className="card-container">
      <img className="card-img" src={LeKaba} alt="background" />
      <div className="card-text">
        <div>
          <div className="card-title blue">
            <span>Lekaba</span>
          </div>
          <div className="card-spec blue">
            <span>React JS</span>
          </div>
        </div>
        <div>
          <a className="card-link" href="https://www.lekaba.fr/">
            <span>Vers le site</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
