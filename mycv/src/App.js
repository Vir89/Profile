import React from "react";
import "./App.css";
import "materialize-css/dist/js/materialize.min.js";
import "materialize-css/dist/css/materialize.min.css";
import Home from "./components/Home";
/*import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Profile from "./components/Profile";*/
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="wrap-container">
      <div className="container">
        <Router>
          <Route exact path="/" component={Home} />
        </Router>
      </div>
    </div>
  );
}

export default App;
