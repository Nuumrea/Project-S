import React from "react";

// Styling
import "./index.css";

// Components
import Card from "../card/index";

const Content = ({ dataCard }) => {
  return (
    <div className="home-content-wrapper">
      {dataCard.map((data, index) => {
        return <Card data={data} key={index} />;
      })}
    </div>
  );
};

export default Content;
