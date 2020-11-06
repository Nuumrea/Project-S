import React, { useState, useEffect } from "react";

// Components
import Nav from "./components/globalComponents/nav/index";
import NavMobil from "./components/globalComponents/navMobil/index";
import NavMobilExtention from "./components/globalComponents/navMobilExtention/index";
import Home from "./components/home/content/index";
import Profil from "./components/profil/content/index";
import Skills from "./components/skills/content/index";
import Project from "./components/project/content/index";
import Contact from "./components/contact/content/index";
import Footer from "./components/globalComponents/footer/index";

// import Styling and Assets
import "./App.css";

const App = () => {
  const [isMenuExtend, setIsMenuExtend] = useState(true);
  const [isSizeScreen, setIsSizeScreen] = useState(false);
  const [isHomeSelect, setIsHomeSelect] = useState(false);
  const [isProfilSelect, setIsProfilSelect] = useState(false);
  const [isSkillsSelect, setIsSkillsSelect] = useState(false);
  const [isProjectSelect, setIsProjectSelect] = useState(false);
  const [isContactSelect, setIsContactSelect] = useState(false);

  useEffect(() => {
    const fetchSizeScreen = () => {
      if (window.innerWidth >= 768) {
        setIsSizeScreen(true);
      }
    };
    fetchSizeScreen();
  }, [isSizeScreen, setIsSizeScreen]);

  return (
    <>
      {isSizeScreen ? (
        <Nav
          isHomeSelect={isHomeSelect}
          setIsHomeSelect={setIsHomeSelect}
          isProfilSelect={isProfilSelect}
          setIsProfilSelect={setIsProfilSelect}
          isSkillsSelect={isSkillsSelect}
          setIsSkillsSelect={setIsSkillsSelect}
          isProjectSelect={isProjectSelect}
          setIsProjectSelect={setIsProjectSelect}
          isContactSelect={isContactSelect}
          setIsContactSelect={setIsContactSelect}
        />
      ) : (
        <>
          <NavMobil
            isMenuExtend={isMenuExtend}
            setIsMenuExtend={setIsMenuExtend}
          />
          {isMenuExtend ? (
            <NavMobilExtention
              isHomeSelect={isHomeSelect}
              setIsHomeSelect={setIsHomeSelect}
              isProfilSelect={isProfilSelect}
              setIsProfilSelect={setIsProfilSelect}
              isSkillsSelect={isSkillsSelect}
              setIsSkillsSelect={setIsSkillsSelect}
              isProjectSelect={isProjectSelect}
              setIsProjectSelect={setIsProjectSelect}
              isContactSelect={isContactSelect}
              setIsContactSelect={setIsContactSelect}
            />
          ) : null}
        </>
      )}
      <Home isSizeScreen={isSizeScreen} />
      <Profil />
      <Skills />
      <Project />
      <Contact />
      {isSizeScreen ? null : <Footer />}
    </>
  );
};

export default App;
