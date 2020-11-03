import React from "react";

// Styling
import "./index.css";

// Components
import Forms from "../forms/index";

const Contact = () => {
  return (
    <section id="contact" className="contact-wrapper">
      <div>
        <div className="contact-question fs-subtitle">
          <span>Une question ou envie de travailler avec moi ?</span>
        </div>
        <Forms />
      </div>
    </section>
  );
};

export default Contact;
