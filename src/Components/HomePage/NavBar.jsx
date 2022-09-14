import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#006d77" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand fw-bold" href="#home">
          Petwyse
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feature">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#pricing">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
