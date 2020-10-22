import React from "react";

// Styling and Assets
import "./index.css";

const SocialMedia = ({ data }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      rel="noreferrer noopener"
      className="footer-icon"
    >
      <img src={data.icon} alt="icon" />
    </a>
  );
};

export default SocialMedia;
