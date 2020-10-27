import React from "react";

// Styling
import "./index.css";

// Components
import Button from "../button/index";

const Content = ({ setIsProfil, setIsHome, setIsContact, setIsProject }) => {
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
        <Button
          setIsProfil={setIsProfil}
          setIsHome={setIsHome}
          setIsProject={setIsProject}
          setIsContact={setIsContact}
        />
      </div>
    </section>
  );
};

export default Content;
