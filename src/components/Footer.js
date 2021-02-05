import React from "react";
import { Link } from "react-router-dom";

import logoWhite from "../assets/img/logowhite.png"
import twitter from "../assets/img/social/twitter.svg"
import linkedin from "../assets/img/social/linkedin.svg"
import facebook from "../assets/img/social/facebook.svg"



const Footer = () => {
    return (
        <>
            <section id="footer">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <img src={logoWhite} alt="Logo White" />
                            <div className="links">
                                <Link className="mr-4" to="/">Home</Link>
                                <Link className="mr-4" to="/products">Products</Link>
                                <Link className="mr-4" to="/about">About Us</Link>
                                <Link className="mr-4" to="/contact">Contact Us</Link>
                            </div>
                            <p>All Rights Reserved | 2021</p>
                        </div>
                        <div className="col-lg-4">
                            <div className="social">
                                <h1>Let's Connect</h1>
                                <object data={twitter} type="image/svg+xml"></object>
                                <object data={linkedin} type="image/svg+xml"></object>
                                <object data={facebook} type="image/svg+xml"></object>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>);
};

export default Footer;