import React from "react";

// Styling
import "./index.css";

// Components

const Contact = () => {
  return (
    <forms className="forms-wrapper">
      <div>
        <input type="text" name="name" placeholder="Nom" required />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div>
        <textarea name="message" type="text" placeholder="message"></textarea>
      </div>
      <div className="form-submit">
        <div>
          <input type="button" value="Envoyer" />
        </div>
      </div>
    </forms>
  );
};

export default Contact;
