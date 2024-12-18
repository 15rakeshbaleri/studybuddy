import React from "react";
import styles from "./First_login.module.css"; // Import the CSS module
import logo from "../resource/Screenshot 2024-10-01 171920.png";
import das from "../resource/dashboard.png";
import tec from "../resource/teacher.jpeg";
import test from "../resource/test_div.jpeg";
function First_login() {
  return (
    <>
      <div className={styles.innerContainer}>
        <img
          className={styles.logo}
          src={logo}
          alt="Logo"
          width="150"
          height="70"
        />
        <h1>STUDDY BUDDY</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            STUDDY BUDDY helps students succeed by providing study materials,
            tools, and resources. Join our community for accessible notes, video
            tutorials, and productivity tools to enhance your learning journey.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 gap-3"
              onClick={onLoginClick}
            >
              Login
            </button>
            <button
              type="button"
              className="btn btn-secondary btn-lg px-4"
              onClick={onSignupClick}
            >
              Signup
            </button>
          </div>
        </div>
      </div>

      <div className={styles.cards}>
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              src={das}
              alt="Thumbnail"
              width="100%"
              height="225"
            />
            <div className="card-body">
              <p className="card-text">
                Create an account or log in to access your courses.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a href="">learn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              src={das}
              alt="Thumbnail"
              width="100%"
              height="225"
            />
            <div className="card-body">
              <p className="card-text">
                Browse available courses, explore content, and start learning
                today.
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a href="">learn</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              src={das}
              alt="Thumbnail"
              width="100%"
              height="225"
            />
            <div className="card-body">
              <p className="card-text">
                View detailed course information, track progress, and watch
                videos." Let me know if you'd like any changes!
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <a href="">learn</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.additionalsection}>
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={das}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">
              Unlock Knowledge: Start Your Learning Journey
            </h1>
            <p className="lead">
              Log in to access personalized courses, explore various topics,
              track your progress, watch instructional videos, and start
              learning with detailed course overviews, progress tracking, and
              interactive features for an enriched experience." Let me know if
              you'd like further modifications or specific details for each
              section!
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default First_login;
