import React from "react";
import Home from "../../components/Home";
import About from "../../components/About";
import Register from "../../components/Register";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

function Homepage() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Register />
      <Footer />
    </div>
  );
}

export default Homepage;