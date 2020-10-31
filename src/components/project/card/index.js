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
          <div className="card-title fs-subtitle blue">
            <span>{data.title}</span>
          </div>
          <div className="card-spec fs-text blue">
            <span>{data.spec}</span>
          </div>
        </div>
        <div>
          <div
            className="card-button fs-button white bg-blue"
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
