import React from "react";

// Styling
import "./index.css";

// Components
import Title from "../../globalComponents/title/index";

const Contact = () => {
  let titleSection = "Contact";

  return (
    <div className="contact-wrapper">
      <Title title={titleSection} />
    </div>
  );
};

export default Contact;
