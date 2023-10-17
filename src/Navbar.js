import React from "react";
import "./Navbar.css"
function Navbar() {
  return (
      <div className="top-nav">
        <nav className="navbar">
          <a href=" ">FaceSwapPro</a>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#register"><button>Register</button></a>
        </nav>
      </div>
  );
}

export default Navbar;
