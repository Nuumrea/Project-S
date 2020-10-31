import React, { useEffect } from "react";

// Assets and Styling
import "./index.css";

// Components

const Header = ({
  isHome,
  setIsHome,
  isProfil,
  setIsProfil,
  isProject,
  setIsProject,
  isContact,
  setIsContact,
}) => {
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 80) {
        setIsHome(true);
        setIsProfil(false);
        setIsProject(false);
        setIsContact(false);
      }
      if (window.scrollY >= 605) {
        setIsProfil(true);
        setIsHome(false);
        setIsProject(false);
        setIsContact(false);
      }
      if (window.scrollY >= 1559) {
        setIsProject(true);
        setIsHome(false);
        setIsProfil(false);
        setIsContact(false);
      }
      if (window.scrollY >= 2400) {
        setIsContact(true);
        setIsHome(false);
        setIsProfil(false);
        setIsProject(false);
      }
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
  }, [setIsHome, setIsProfil, setIsProject, setIsContact]);

  return (
    <header className="header-wrapper fs-button">
      <div
        className={isHome ? "pink" : "white"}
        onClick={() => {
          document
            .getElementById("home")
            .scrollIntoView({ behavior: "smooth" });
          setIsHome(true);
          setIsProfil(false);
          setIsProject(false);
          setIsContact(false);
        }}
      >
        <span>Home</span>
      </div>
      <div
        className={isProfil ? "pink" : "white"}
        onClick={() => {
          document
            .getElementById("profil")
            .scrollIntoView({ behavior: "smooth" });
          setIsProfil(true);
          setIsHome(false);
          setIsProject(false);
          setIsContact(false);
        }}
      >
        <span>Profil</span>
      </div>
      <div
        className={isProject ? "pink" : "white"}
        onClick={() => {
          document
            .getElementById("project")
            .scrollIntoView({ behavior: "smooth" });
          setIsProject(true);
          setIsHome(false);
          setIsProfil(false);
          setIsContact(false);
        }}
      >
        <span>Project</span>
      </div>
      <div
        className={isContact ? "pink" : "white"}
        onClick={() => {
          document
            .getElementById("contact")
            .scrollIntoView({ behavior: "smooth" });
          setIsContact(true);
          setIsHome(false);
          setIsProfil(false);
          setIsProject(false);
        }}
      >
        <span>Contact</span>
      </div>
    </header>
  );
};

export default Header;
