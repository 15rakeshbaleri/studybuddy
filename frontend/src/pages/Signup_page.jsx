import React, { useState } from "react";
import axios from "axios";
import styles from "./SignupPage.module.css";
import LeftSection from "./LeftSection";
function SignupPage() {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/signup",
        formData
      );

      if (response.status === 201) {
        console.log("User signed up successfully", response.data);
      }
    } catch (error) {
      setErrorMessage(
        error.response?.data?.error || "An unexpected error occurred."
      );
    }
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div className={`card w-75 ${styles.card}`}>
        <div className="row g-0">
          <div className={`col-md-6 ${styles.leftSection}`}>
            <LeftSection />
          </div>
          <div className="col-md-6 p-5">
            <div className={styles.signupForm}>
              <h2>Sign Up</h2>
              {errorMessage && <p className="text-danger">{errorMessage}</p>}
              <form onSubmit={handleSubmit} className={styles.inputfield}>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="name">Full Name</label>
                </div>

                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="username">Username</label>
                </div>

                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="email">Email Address</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="password">Password</label>
                </div>

                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword" // Updated id to match backend
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
