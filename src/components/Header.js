import React from "react";
import logoBlack from "../assets/img/logoblack.png";
import Button from '../components/Button'
import hamburger from '../assets/img/hamburger.svg'

const Header = () => {
    // return (
    //     <div id="header">
    //         <div classNameName="container">
    //             <div className="header-container">
    //                 <img src={logo} className="img-fluid" alt="Logo"></img>
    //                 <div className="hamburger" onClick={e => console.log("Clicked")}>
    //                     <img src={hamburger} className="img-fluid" alt="Hamburger"></img>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <div id="navbar" className="navbar navbar-expand-lg navbar-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src={logoBlack} alt="Logo" /></a>
                <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto d-lg-flex align-items-center">
                        <li className="nav-item mt-2 ml-5">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item mt-2 ml-5">
                            <a className="nav-link" href="#">Products</a>
                        </li>
                        <li className="nav-item mt-2 ml-5">
                            <a className="nav-link" href="#">About Us</a>
                        </li>
                        <li className="nav-item mt-2 ml-5">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );

};

export default Header;
