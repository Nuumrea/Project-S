import React from "react";

// Styling
import "./index.css";

// Components
import Forms from "../forms/index";

const Contact = () => {
  return (
    <section id="contact" className="contact-wrapper bg-blue">
      <div className="contact-title fs-title white">
        <span>Contact</span>
      </div>
      <div className="contact-question fs-text white">
        <span>Une question ou envie de travailler avec moi ?</span>
      </div>
      <Forms />
    </section>
  );
};

export default Contact;
