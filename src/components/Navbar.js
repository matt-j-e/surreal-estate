import React from "react";
import { Link } from "react-router-dom";
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
        <h1 className="branding-name">Surreal<span>Estate</span></h1>
      </div>
      <nav className="navbar">
        <ul className="navbar-links">
          <li className="navbar-links-item">
            <Link to="/">View Properties</Link>
          </li>
          <li className="navbar-links-item">
            <Link to="/add-property">Add a Property</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
