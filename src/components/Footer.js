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
                        <div className="col-lg-4">
                            <div className="d-flex flex-column flex-nowrap">
                                <Link className="mb-2" to="/">Home</Link>
                                <Link className="mb-2" to="/products">Products</Link>
                                <Link className="mb-2" to="/about">About Us</Link>
                                <Link className="mb-2" to="/contact">Contact Us</Link>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h2 className="text-center text-capitalize white">Reach us out</h2>

                        </div>
                        <div className="col-lg-4">
                            <div className="d-flex flex-column text-center">
                                <h2 className="text-capitalize white">Let's connect</h2>
                                <a href="">info@gdsebike.com</a>
                                <a href="">0086-15975428800</a>
                            </div>
                        </div>

                        {/* <div className="col-lg-8">
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
                                <i class="fab fa-linkedin"></i>
                                <i class="fab fa-twitter"></i>
                                <i class="fab fa-facebook"></i>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>
        </>);
};

export default Footer;