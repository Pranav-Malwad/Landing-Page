import React from "react";
import logo from "../assets/logo2.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Location</li>
      </ul>
      <button>Login</button>
    </nav>
  );
};

export default Navbar;
