import React from "react";

function Education() {
  return (
    <div>
      <div className="card z-depth-0">
        <div className="card-content">
          <h6>
            <strong>
              <i class="fas fa-graduation-cap"></i>
            </strong>
          </h6>
          <hr />
          <div className="row mt">
            <div className="col s12">
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong>Bootcamp fullstack developer</strong>
                  <span>2021-2021</span>
                </h6>
                <p className="pt">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </blockquote>
            </div>
          </div>
          <div className="row mt">
            {/*revisar cómo quedaría mejor*/}
            <div className="col s12">
              <blockquote>
                <h6 className="no-pad mt-bottom">
                  <strong>PF II aplicaciones multiplataforma</strong>
                  <span>2021-2021</span>
                </h6>
                <p className="pt">
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum."
                </p>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Education;
