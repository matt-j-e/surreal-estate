import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="branding">
        <img
          className="logo"
          src="./surreal-logo.png"
          alt="Surreal Estate logo"
          width="90"
        />
        <h1 className="branding-name">Surreal Estate</h1>
      </div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-links-item">View Properties</li>
          <li className="navbar-links-item">Add a Property</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
