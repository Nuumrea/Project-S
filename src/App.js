import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import NavBar from "./components/globalComponents/navBar/index";
import NavBarMobil from "./components/globalComponents/navBarMobil/index";
import MenuMobil from "./components/globalComponents/menuMobil/index";
import Home from "./components/home/content/index";
import Profil from "./components/profil/content/index";
import Skills from "./components/skills/content/index";
import Project from "./components/project/content/index";
import Contact from "./components/contact/content/index";

// import Styling and Assets
import "./App.css";

const App = () => {
  const [isMenuExtend, setIsMenuExtend] = useState(false);
  const [isSizeScreen, setIsSizeScreen] = useState(false);

  useEffect(() => {
    const fetchSizeScreen = () => {
      if (window.innerWidth >= 768) {
        setIsSizeScreen(true);
      }
    };
    fetchSizeScreen();
  }, [isSizeScreen, setIsSizeScreen]);

  return (
    <Router>
      {isSizeScreen ? (
        <NavBar />
      ) : (
        <>
          <NavBarMobil
            isMenuExtend={isMenuExtend}
            setIsMenuExtend={setIsMenuExtend}
          />
          {isMenuExtend ? <MenuMobil /> : null}
        </>
      )}
      <Switch>
        <Route path="/profil">
          <Profil />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/project">
          <Project />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
