import React from "react";

// Assets and Styling
import "./index.css";

// Components

const Content = ({ data }) => {
  return (
    <div className="nindo-wrapper">
      <div className="nindo-img">
        <img src={data.img} alt="icon" />
      </div>
      <div className="nindo-title">
        <span>{data.title}</span>
      </div>
      <div className="nindo-description">
        <p>{data.description}</p>
      </div>
    </div>
  );
};

export default Content;
