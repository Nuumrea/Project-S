import React from "react";

// Components
import Home from "./components/home/content/index";
import Profil from "./components/profil/content/index";
import Project from "./components/project/content/index";
import Contact from "./components/contact/content/index";
import Footer from "./components/globalComponents/footer/index";

// import Styling and Assets
import "./App.css";

const App = () => {
  return (
    <>
      <Home />
      <Profil />
    </>
  );
};

export default App;
