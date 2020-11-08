import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Components

// Styling
import "./index.css";
import Close from "../../../assets/png/close.png";

const Modal = ({ data }) => {
  return (
    <div className="modal-wrapper">
      <div className="modal-container bg-medium-black">
        <Carousel
          className="modal-img-container"
          infiniteLoop={true}
          showStatus={false}
          showIndicators={false}
        >
          {data.pic.map((data, index) => {
            return <img className="modal-img" src={data} alt="background" />;
          })}
        </Carousel>
        <div className="modal-info-container">
          <div className="modal-info-title fs-subtitle">
            <span>{data.title}</span>
          </div>
          <div className="modal-info-description fs-text">
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
