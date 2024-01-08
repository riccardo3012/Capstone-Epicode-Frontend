import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import "@fontsource/cinzel";
import "../App.css";

const TopBar = () => {
  const loc = useLocation();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleToggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div id="mainNavigation">
      <nav role="navigation">
        <div className="py-3 text-center border-bottom">
          <h1 style={{ fontFamily: "cinzel", color: "white", letterSpacing: "2px" }}>Moon Dispatcher</h1>
        </div>
      </nav>
      <div className="navbar-expand-md">
        <div className="navbar-dark text-center my-2">
          <button
            className="navbar-toggler w-75"
            type="button"
            onClick={handleToggleNav}
            aria-expanded={isNavOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
          </button>
        </div>
        <div className={`text-center mt-3 collapse navbar-collapse ${isNavOpen ? "show" : ""}`}>
          <ul className="navbar-nav mx-auto ">
            <li className="nav-item">
              <Link to={"/home"} className={loc.pathname === "/home" ? "selected" : ""}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/gallery"} className={loc.pathname === "/gallery" ? "selected" : ""}>
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className={loc.pathname === "/about" ? "selected" : ""}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/shop"} className={loc.pathname === "/shop" ? "selected" : ""}>
                Store
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className={loc.pathname === "/contact" ? "selected" : ""}>
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/diary"} className={loc.pathname === "/diary" ? "selected" : ""}>
                Diary
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
