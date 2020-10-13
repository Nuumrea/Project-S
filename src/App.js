import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Containers
import Home from "./containers/Home";
import Profile from "./containers/Profile";
import Contact from "./containers/Contact";
import Project from "./containers/Project";

import Header from "./components/globalComponents/header/index";
import Footer from "./components/globalComponents/footer/index";

const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path="/profile">
            <Profile />
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
      <Footer />
    </>
  );
};

export default App;
