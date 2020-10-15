import React from "react";

// Styling
import "./index.css";

// Components
import Title from "../../globalComponents/title/index";

const Content = () => {
  let titleSection = "Project";

  return (
    <div className="project-wrapper">
      <Title title={titleSection} />
    </div>
  );
};

export default Content;
