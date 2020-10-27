import React from "react";

// Styling
import "./index.css";
import Close from "../../../assets/png/close.png";

// Components

const Modal = ({ data }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-container">
        <div className="modal-img-container">
          <img src={data.pic[0]} alt="background" />
        </div>
        <div className="modal-info-container">
          <div className="modal-info-title blue">
            <span>{data.title}</span>
          </div>
          <div className="modal-info-description blue">
            <span>{data.description}</span>
          </div>
          <div className="modal-button-container">
            <div className="modal-button">
              <a href={data.link} target="_blank" rel="noreferrer noopener">
                Voir le site
              </a>
            </div>
            <div
              className="modal-close"
              onClick={() => {
                data.setState(false);
              }}
            >
              <img src={Close} alt="icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
