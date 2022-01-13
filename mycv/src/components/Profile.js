import React, { Component } from "react";
import imProfile from "../imagen/imProfile/foto.jpg";

export default class Profile extends Component {
  render() {
    return (
      <div>
        <div className="avatar">
          <img
            className="circle responsive-img"
            src={imProfile}
            alt="Virginia H."
          ></img>
        </div>

        <div className="card light-blue darken-4 zdepth-0 hide-one-large-only">
          <div className="card-content center social">
            <h2 className="grey-tect text-lighten-3">
              <strong>Virginia H.</strong>
            </h2>
            <h5 className="grey-text text-lighten-1">Fullstak developer</h5>
            <a
              href="https://www.linkedin.com/in/virginia-herrera-herrera/"
              target="blank"
            >
              <i className="fab fa-linkedin-square fa-2x"></i>
            </a>
            <a href="https://github.com/Vir89" target="blank">
              <i className="fab fa-github-square fa-2x"></i>
            </a>
            {/*review icons*/}
          </div>
        </div>

        <div className="card light-blue darken-4 z-depth-8">
          <div className="card-content">
            <h6 className="white-text">
              <strong>Profile</strong>
            </h6>
            <hr />
            <p className="grey-text text-lighten-3 pt">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </div>
      </div>
    );
  }
}
