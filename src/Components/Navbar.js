import React from "react";

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className={`navbar-brand text-${props.mode === "dark" ? "light" : "dark"}`} href="/">
            MultiTasks
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className={`nav-link text-${props.mode === "dark" ? "light" : "dark"}`} aria-current="page" href="/">
                  TextUtils
                </a>
              </li>
              <li className="nav-item">
                <a className={`nav-link text-${props.mode === "dark" ? "light" : "dark"}`} href="/">
                  About
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className= {`nav-link text-${props.mode === "dark" ? "light" : "dark"}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                  Enable Dark Mode
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
