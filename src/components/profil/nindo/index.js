import React from "react";

// Assets and Styling
import "./index.css";

// Components

const Content = ({ data }) => {
  return (
    <div className="nindo-wrapper">
      <div className="nindo-img bg-pink">
        <img src={data.img} alt="icon" />
      </div>
      <div className="nindo-title fs-subtitle blue">
        <span>{data.title}</span>
      </div>
      <div className="nindo-description fs-text blue">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Content;
