import React, { useState } from "react";

// Styling
import "./index.css";

// Components

const Contact = () => {
  const [handleName, setHandleName] = useState("");
  const [handleEmail, setHandleEmail] = useState("");
  const [handleFeedback, setHandleFeedback] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const handleNameChange = (event) => {
    const value = event.target.value;
    setHandleName(value);
  };
  const handleEmailChange = (event) => {
    const value = event.target.value;
    setHandleEmail(value);
  };
  const handleFeedbackChange = (event) => {
    const value = event.target.value;
    setHandleFeedback(value);
  };

  return (
    <form className="forms-wrapper" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          placeholder="Nom"
          value={handleName}
          onChange={handleNameChange}
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={handleEmail}
          onChange={handleEmailChange}
        />
      </div>
      <div>
        <textarea
          name="message"
          type="text"
          placeholder="message"
          value={handleFeedback}
          onChange={handleFeedbackChange}
          required
        ></textarea>
      </div>
      <div className="form-submit">
        <div>
          <input type="button" value="Envoyer" onClick={handleSubmit} />
        </div>
      </div>
    </form>
  );
};

export default Contact;
