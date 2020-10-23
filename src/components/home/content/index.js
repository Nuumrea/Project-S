import React from "react";

// Styling
import "./index.css";

// Components
import Button from "../button/index";

const Content = () => {
  return (
    <section id="home" className="home-wrapper">
      <div>
        <div>
          <span>
            Bonjour, je suis <span>Kévin Parayre</span>.
          </span>
        </div>
        <div>
          <span>Web développeur front-end.</span>
        </div>
      </div>
      <div>
        <Button />
      </div>
    </section>
  );
};

export default Content;
