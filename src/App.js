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

// Context
import { SizeContext } from "./Contexts";

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
  const [isNav, setIsNav] = useState(false);

  const tabletScroll = [675, 1330, 2030, 2710];
  const desktopScroll = [1000, 1900, 2800, 3790];

  useEffect(() => {
    const fetchSizeScreen = () => {
      if (window.innerWidth >= 768) {
        setIsSizeScreen(true);
      }
    };
    fetchSizeScreen();
  }, [isSizeScreen, setIsSizeScreen]);

  useEffect(() => {
    const handleTabNav = () => {
      if (window.scrollY >= tabletScroll[0]) {
        setIsNav(true);
      }
    };
    handleTabNav();
    window.addEventListener("scroll", handleTabNav);
  }, [tabletScroll, setIsNav]);

  useEffect(() => {
    const onScrollMenu = () => {
      if (window.innerWidth >= 768 && window.innerWidth < 1940) {
        if (window.scrollY < tabletScroll[0]) {
          setIsHomeSelect(true);
          setIsProfilSelect(false);
          setIsSkillsSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
        }
        if (
          window.scrollY >= tabletScroll[0] &&
          window.scrollY < tabletScroll[1]
        ) {
          setIsProfilSelect(true);
          setIsHomeSelect(false);
          setIsSkillsSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
        }
        if (
          window.scrollY >= tabletScroll[1] &&
          window.scrollY < tabletScroll[2]
        ) {
          setIsSkillsSelect(true);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
        }
        if (
          window.scrollY >= tabletScroll[2] &&
          window.scrollY < tabletScroll[3]
        ) {
          setIsProjectSelect(true);
          setIsSkillsSelect(false);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          setIsContactSelect(false);
        }
        if (window.scrollY > tabletScroll[3]) {
          setIsContactSelect(true);
          setIsProjectSelect(false);
          setIsSkillsSelect(false);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
        }
      } else if (window.innerWidth >= 1940) {
        if (window.scrollY < desktopScroll[0]) {
          setIsHomeSelect(true);
          setIsProfilSelect(false);
          setIsSkillsSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
        }
        if (
          window.scrollY >= desktopScroll[0] &&
          window.scrollY < desktopScroll[1]
        ) {
          setIsProfilSelect(true);
          setIsHomeSelect(false);
          setIsSkillsSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
        }
        if (
          window.scrollY >= desktopScroll[1] &&
          window.scrollY < desktopScroll[2]
        ) {
          setIsSkillsSelect(true);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          setIsProjectSelect(false);
          setIsContactSelect(false);
        }
        if (
          window.scrollY >= desktopScroll[2] &&
          window.scrollY < desktopScroll[3]
        ) {
          setIsProjectSelect(true);
          setIsSkillsSelect(false);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
          setIsContactSelect(false);
        }
        if (window.scrollY > desktopScroll[3]) {
          setIsContactSelect(true);
          setIsProjectSelect(false);
          setIsSkillsSelect(false);
          setIsProfilSelect(false);
          setIsHomeSelect(false);
        }
      }
    };
    onScrollMenu();
    window.addEventListener("scroll", onScrollMenu);
  }, [
    setIsHomeSelect,
    setIsProfilSelect,
    setIsSkillsSelect,
    setIsProjectSelect,
    setIsContactSelect,
    tabletScroll,
    desktopScroll,
  ]);

  const test = () => {
    console.log("test", window.scrollY);
  };
  window.addEventListener("scroll", test);

  test();
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
          isNav={isNav}
          setIsNav={setIsNav}
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
      <SizeContext.Provider value={isSizeScreen}>
        <Home />
      </SizeContext.Provider>
      <Profil />
      <Skills />
      <Project />
      <Contact />
      {isSizeScreen ? null : <Footer />}
    </>
  );
};

export default App;
