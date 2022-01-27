import React from "react";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import About from "./About";
import Contact from "./Contact";

function Home() {
  return (
    <section>
      <div className="row">
        <div className="col s12 m4 l4 light-blue darken-4 sameHeihgt-child">
          <Profile />
          <Contact />
          <Skills />
        </div>
        <div className="col s12 m8 l8 white sameHeihgt-child">
          <About />
          <Education />
          <Experience />
          <Portfolio />
        </div>
      </div>
    </section>
  );
}
export default Home;
