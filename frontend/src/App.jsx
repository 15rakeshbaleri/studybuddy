import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/pages/Footer";
import Footer_below from "./components/Footer_below";
import First_login from "./pages/First_login";
import Signup_page from "./pages/Signup_page";
import ImageCardList from "./pages/ImageCardList";
import CourseDetail from "./pages/CourseDetail";
<<<<<<< HEAD
import User_Profile from "./pages/User_Profile";
import Countdown from "./components/Countdown/Countdown";
import RightSection from "./pages/RightSection";

=======
import Countdown from "./components/time/Countdown";
>>>>>>> 5ef35ba (submit)
function App() {
  const [showFooter, setShowFooter] = useState(false);

  const handlesignupClick = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    try {
      const response = await fetch("http://localhost:8000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          confirmPassword,
        }),
      });
      if (response.status === 201) {
        console.log("User signed up successfully");
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  const handleLoginClick = async (e) => {
    e.preventDefault();
    const email = document.getElementById("floatingInput").value;
    const password = document.getElementById("floatingPassword").value;

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem("token", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setShowFooter(true);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <Router>
      <Navbar onLoginClick={handleLoginClick} />
      {showFooter && <Footer />}
      <Routes>
        {/* Public Routes */}
        <Route
          path="/"
          element={<First_login onLoginClick={handleLoginClick} />}
        />
<<<<<<< HEAD
        <Route path="/login" element={<RightSection />} />
        <Route
          path="/signup"
          element={<Signup_page onSignup={handlesignupClick} />}
        />
=======
        <Route path="/signup" element={<Signup_page />} />
        <Route path="/time" element={<Countdown />} />
        <Route path="/courses" element={<ImageCardList />} />
        <Route path="/courses" element={<ImageCardList />} />
        <Route path="/course/:id" element={<CourseDetail />} />{" "}
      </Routes>
>>>>>>> 5ef35ba (submit)

        {/* Protected Routes (can be conditionally rendered based on login state) */}
        <Route path="/courses" element={<ImageCardList />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/profile" element={<User_Profile />} />
        <Route path="/timer" element={<Countdown />} />
      </Routes>
      <Footer_below />
    </Router>
  );
}

export default App;
