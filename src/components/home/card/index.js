import React from "react";
import { Link } from "react-router-dom";

// Styling
import "./index.css";

const Card = ({ data }) => {
  return (
    <Link className="card-wrapper" to={data.link}>
      <div>
        <span>{data.title}</span>
      </div>
    </Link>
  );
};

export default Card;
