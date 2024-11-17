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

function App() {
  const [showFooter, setShowFooter] = useState(false);
  const [Showsignup, setShowsignup] = useState(false);

  const handleLoginClick = () => {
    console.log("clicked login");
    setShowsignup(false);
    setShowFooter(true);
  };
  const handlesignupClick = () => {
    console.log("clicked signup");
    setShowFooter(false);
    setShowsignup(true);
  };

  return (
    <Router>
      <Navbar onLoginClick={handleLoginClick} />
      {showFooter && <Footer />}
      {Showsignup && <Signup_page />}
      <Routes>
        <Route
          path="/"
          element={
            <First_login
              onLoginClick={handleLoginClick}
              onSignup={handlesignupClick}
            />
          }
        />
        <Route
          path="/login"
          element={<First_login onLoginClick={handleLoginClick} />}
        />
        <Route path="/signup" element={<Signup_page />} />
        <Route path="/courses" element={<ImageCardList />} />
        <Route path="/course/:id" element={<CourseDetail />} />{" "}
      </Routes>

      <Footer_below />
    </Router>
  );
}

export default App;
