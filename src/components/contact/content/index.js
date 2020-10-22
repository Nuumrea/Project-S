import React from "react";

// Styling
import "./index.css";

// Components
import Forms from "../forms/index";

const Contact = () => {
  return (
    <div className="contact-wrapper">
      <div className="contact-title">
        <span>Contact</span>
      </div>
      <div className="contact-question white">
        <span>Une question ou envie de travailler avec moi ?</span>
      </div>
      <Forms />
    </div>
  );
};

export default Contact;
