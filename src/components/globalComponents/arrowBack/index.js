import React from "react";
import { Link } from "react-router-dom";

// Styling
import Arrow from "../../../assets/png/left-arrow.png";
import "./index.css";

const ArrowBack = () => {
  return (
        <Link className="arrow-back" to="/">
          <img src={Arrow} alt="arrow back"/>
        </Link>
  );
};

export default ArrowBack;
