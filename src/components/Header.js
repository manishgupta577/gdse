import React from "react";
import logoWhite from "../assets/img/logowhite.png";
import logoBlack from "../assets/img/logoblack.png";
import { Link } from "react-router-dom";

const Header = (props) => {
  return (
    <div id="navbar" className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.theme === "black" ? (
              <img src={logoBlack} alt="Logo" />
            ) : (
              <img src={logoWhite} alt="Logo" />
            )}
          </a>
          <button
            className="navbar-toggler custom-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto d-lg-flex align-items-center">
              <li className="nav-item ml-5">
                <Link className={`nav-link ${props.theme}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link className={`nav-link ${props.theme}`} to="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item ml-5">
                <Link className={`nav-link ${props.theme}`} to="/about">
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
