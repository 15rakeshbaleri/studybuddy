import React from "react";
import { Link } from "react-router-dom";
import Style from "../App.module.css";

const Navbar = ({ onLoginClick }) => {
  return (
    <nav
      className={`${Style.navigationbar} navbar navbar-expand-lg`}
      aria-label="Navbar example"
    >
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/courses">
                courses
              </Link>
            </li>
            <li className="nav-item">
<<<<<<< HEAD
              <Link className="nav-link" to="/profie">
                profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/timer">
                Stop watch
=======
              <Link className="nav-link" to="/time">
                stop watch
>>>>>>> 5ef35ba (submit)
              </Link>
            </li>
          </ul>
          <button
            className={`${Style.button} btn btn-primary`}
            onClick={onLoginClick}
          >
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
