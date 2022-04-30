import React from "react";
import logo from "./images/logo.png";
const Navbar = () => {
  return (
    <>
      <section id="nav-bar">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#slider">
              <img src={logo} alt="logo" />
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
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ">
                <li className="nav-item">
                  <a className="nav-link" href="#slider">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="gallery.html">
                    GALLERY
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT US
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#services">
                    SERVICES
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#team">
                    OUR TEAM
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#testimonials">
                    TESTIMONIALS
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link " href="#contact">
                    CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
