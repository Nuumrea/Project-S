import React, { useState, useEffect } from "react";

// Components
import Forms from "../forms/index";

// Styling
import "./index.css";

const Contact = () => {
  const [isTitleContact, setIsTitleContact] = useState(false);
  const [isContentContact, setIsContentContact] = useState(false);

  useEffect(() => {
    const onScrollMenu = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1900) {
        if (window.scrollY >= 2710) {
          setIsTitleContact(true);
          setIsContentContact(true);
        }
      } else if (window.innerWidth >= 1900) {
        if (window.scrollY >= 3790) {
          setIsTitleContact(true);
          setIsContentContact(true);
        }
      }
    };
    onScrollMenu();
    window.addEventListener("scroll", onScrollMenu);
  }, [setIsTitleContact, setIsContentContact]);

  return (
    <section id="contact" className="contact-wrapper">
      <div>
        <div
          id={isTitleContact ? "slide-right" : "slide-false"}
          className="contact-title fs-title"
        >
          <div>
            <span>Contact</span>
          </div>
        </div>
        <div className="contact-question fs-subtitle">
          <span id={isTitleContact ? "contact1" : "contact1-false"}>Une</span>
          <span id={isTitleContact ? "contact2" : "contact2-false"}>
            {" "}
            question ?
          </span>
          <span id={isTitleContact ? "contact3" : "contact3-false"}>
            {" "}
            envie de
          </span>
          <span id={isTitleContact ? "contact4" : "contact4-false"}>
            {" "}
            travailler
          </span>
          <span id={isTitleContact ? "contact5" : "contact5-false"}>
            {" "}
            avec moi
          </span>
          <span id={isTitleContact ? "contact6" : "contact6-false"}> ?</span>
        </div>
        <Forms isContentContact={isContentContact} />
      </div>
    </section>
  );
};

export default Contact;
