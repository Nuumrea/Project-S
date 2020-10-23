import React from "react";

// Styling
import "./index.css";

// Components
import Title from "../../globalComponents/title/index";
import Card from "../card/index";

const Content = () => {
  let titleSection = "Project";

  return (
    <section id="project" className="project-wrapper">
      <Title title={titleSection} />
      <div className="project-card-container">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
};

export default Content;
