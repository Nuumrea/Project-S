import React from "react";

// Components

// Styling
import "./index.css";

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={data.pic} alt="background" />
      <div className="card-text">
        <div>
          <div className="card-title fs-subtitle">
            <span>{data.title}</span>
          </div>
          <div className="card-spec fs-text">
            <span>{data.spec}</span>
          </div>
        </div>
        <div>
          <div
            className="card-button fs-button"
            onClick={() => {
              data.setState(true);
            }}
          >
            <span>Voir plus</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
