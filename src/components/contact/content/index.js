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
          <span id="contact1">Une question</span>
          <span id="contact2"> ou</span>
          <span id="contact3"> envie de</span>
          <span id="contact4"> travailler</span>
          <span id="contact5"> avec moi</span>
          <span id="contact6"> ?</span>
        </div>
        <Forms />
      </div>
    </section>
  );
};

export default Contact;
