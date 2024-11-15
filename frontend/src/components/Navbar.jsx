import React from "react";
import { Link } from "react-router-dom";
import Style from "../App.module.css";

const Navbar = ({ onCourseClick }) => {
  return (
    <nav
      className={`${Style.navigationbar} navbar navbar-expand-lg`}
      aria-label="Navbar example"
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={onCourseClick}>
                Courses
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
          <button className="btn btn-primary">Login</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
