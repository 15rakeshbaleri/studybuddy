import React, { useState } from "react";
import logo from "../resource/Screenshot 2024-10-01 171920.png";
import axios from "axios";

function RightSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    const formData = { email, password };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/auth/login",
        formData
      );
      if (response.status === 200) {
        console.log("User logged in successfully", response.data);
      }
    } catch (error) {
      console.error("Login failed:", error.response);
      setErrorMessage(
        error.response?.data?.message || "Login failed, please try again."
      );
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <img className="mb-4" src={logo} alt="Logo" width="100" height="57" />
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <br />

        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <br />

        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}

        <button className="btn btn-primary w-100 py-2" type="submit">
          Login
        </button>
        <br />

        <a href="/signup">Create account</a>
      </form>
    </div>
  );
}

export default RightSection;
