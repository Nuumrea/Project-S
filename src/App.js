import React, { useState } from "react";

// Components
import Home from "./components/home/content/index";
import Header from "./components/globalComponents/header/index";
import Profil from "./components/profil/content/index";
import Project from "./components/project/content/index";
import Contact from "./components/contact/content/index";
import Footer from "./components/globalComponents/footer/index";

// import Styling and Assets
import "./App.css";

const App = () => {
  const [isHome, setIsHome] = useState(false);
  const [isProfil, setIsProfil] = useState(false);
  const [isProject, setIsProject] = useState(false);
  const [isContact, setIsContact] = useState(false);
  return (
    <>
      <Home
        setIsProfil={setIsProfil}
        setIsHome={setIsHome}
        setIsProject={setIsProject}
        setIsContact={setIsContact}
      />
      <Header
        isHome={isHome}
        setIsHome={setIsHome}
        isProfil={isProfil}
        setIsProfil={setIsProfil}
        isProject={isProject}
        setIsProject={setIsProject}
        isContact={isContact}
        setIsContact={setIsContact}
      />
      <Profil />
      <Project />
      <Contact />
      <Footer
        setIsProfil={setIsProfil}
        setIsHome={setIsHome}
        setIsProject={setIsProject}
        setIsContact={setIsContact}
      />
    </>
  );
};

export default App;
