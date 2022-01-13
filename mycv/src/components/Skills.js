import React, { Component } from "react";

export default class Skills extends Component {
  render() {
    return (
      <div className="card light-blue darken-4 z-depth-8">
        <div className="card-content">
          <h6 className="white-text">
            <strong>Skills</strong>
          </h6>
          <hr />
          <div className="row pt">
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">HTML</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">CSS</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">JAVASCRIPT</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">REACT.JS</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">NODE.JS</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">MONGODB</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "30%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">MYSQL</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "80%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">BOOTSTRAP</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
            <div className="col m6 s12">
              <p className="grey-text text-lighten-3">STYLED-COMPONENTS</p>
              <div className="progress white">
                <div
                  className="determinate grey"
                  style={{ width: "89%" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
