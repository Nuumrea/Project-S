import React from "react";

// Styling
import "../App.css";

// Components
import Content from "../components/home/content/index";

const Home = () => {
  const cardInfo = [
    { title: "Profile", link: "/profile" },
    { title: "Project", link: "/project" },
    { title: "Contact", link: "/contact" },
  ];
  return (
    <>
      <Content dataCard={cardInfo} />
    </>
  );
};

export default Home;
