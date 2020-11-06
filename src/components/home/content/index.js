import React from "react";
import Lottie from "react-lottie";
import ParticlesBg from "particles-bg";

// Styling
import "./index.css";
import ScrollDown from "../../../assets/animation/scrollDown.json";

// Components

const HomeContent = ({ isSizeScreen }) => {
  const scrollOption = {
    loop: true,
    autoplay: true,
    animationData: ScrollDown,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <section id="home" className="home-wrapper">
      {isSizeScreen ? (
        <ParticlesBg type="cobweb" color="#ffbdbd" num="80" bg={true} />
      ) : (
        <ParticlesBg type="cobweb" color="#ffbdbd" num="20" bg={true} />
      )}
      <div className="home-block1 fs-title">
        <span id="home1">Bonjour,</span>
        <span id="home2"> je suis</span>
        <span id="home3"> Kévin Parayre.</span>
        <br />
        <span id="home4">Web développeur</span>
        <span id="home5"> front-end.</span>
      </div>
      <div className="home-block2">
        <Lottie options={scrollOption} height={50} width={50} />
      </div>
    </section>
  );
};

export default HomeContent;
