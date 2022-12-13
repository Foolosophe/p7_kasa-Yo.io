import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/LOGO.png";
import "./header.css";

function Header() {
  return (
    <header className="header_container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo kasa" />
      </Link>
      <nav className="navbar">
        <div className="navli">
          <Link className="nav" to="/">
            Accueil
          </Link>
        </div>
        <div className="navli">
          <Link className="nav" to="/about">
            À propos
          </Link>
        </div>
      </nav>
    </header>
  );
}
export default Header;
