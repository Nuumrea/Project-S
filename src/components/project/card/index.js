import React from "react";

// Styling
import "./index.css";

// Components

const Card = ({ data }) => {
  return (
    <div className="card-container">
      <img className="card-img" src={data.pic} alt="background" />
      <div className="card-text">
        <div>
          <div className="card-title blue">
            <span>{data.title}</span>
          </div>
          <div className="card-spec blue">
            <span>{data.spec}</span>
          </div>
        </div>
        <div>
          <div
            className="card-link"
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
