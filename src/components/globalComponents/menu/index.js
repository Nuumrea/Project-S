import React, { useState } from "react";
import { Link } from "react-router-dom";
// Components

// Assets and Styling
import "./index.css";

const Menu = ({ data, handleMenu, id }) => {
  const [isMenuSelect, setIsMenuSelect] = useState(false);

  return (
    <Link
      to={data.link}
      className="menu-icon fs-menu"
      onClick={() => {
        handleMenu(isMenuSelect, setIsMenuSelect, id);
      }}
    >
      {isMenuSelect ? (
        <span>{data.title}</span>
      ) : (
        <img src={data.icon} alt="home" />
      )}
    </Link>
  );
};

export default Menu;
