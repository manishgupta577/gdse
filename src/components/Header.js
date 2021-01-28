import React from "react";
import logo from "../assets/img/logo.png";
import hamburger from '../assets/img/hamburger.svg'

const Header = () => {
    return (
        <div id="header">
            <div className="container">
                <div className="header-container">
                    <img src={logo} className="img-fluid"></img>
                    <div className="hamburger" onClick={e => console.log("Clicked")}>
                        <img src={hamburger} className="img-fluid"></img>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
