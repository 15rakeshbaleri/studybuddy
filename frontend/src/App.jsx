import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import First_login from "./pages/First_login";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../src/components/Navbar";
import Footer from "../src/pages/Footer";
import ImageCardList from "../src/pages/ImageCardList";
import Signup_page from "../src/pages/Signup_page";
import Footer_below from "./components/Footer_below";
const App = () => {
  const [showFooter, setShowFooter] = useState(false);
  const [showImageCardList, setShowImageCardList] = useState(false);

  const handleLoginClick = () => {
    setShowFooter(true);
  };

  const handleCourseClick = () => {
    setShowImageCardList(true);
  };

  return (
    <Router>
      <Navbar />

      <First_login />

      <Footer />
      <Signup_page />
      <ImageCardList />

      <Footer_below />
    </Router>
  );
};

export default App;
