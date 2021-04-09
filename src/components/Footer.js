import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import footerHalf from "../assets/img/designs/footerHalf.png";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <img
          src={footerHalf}
          alt="Footer half"
          className="footer-half d-lg-block d-none"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="d-flex flex-column flex-nowrap">
                <h2 className="text-left text-capitalize white mb-4">
                  Quick Links
                </h2>
                <Link className="mb-2" to="/">
                  Home
                </Link>
                <Link className="mb-2" to="/products">
                  Products
                </Link>
                <Link className="mb-2" to="/about">
                  About Us
                </Link>
                <Link className="mb-2" to="/contact">
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <h2 className="text-center text-capitalize white mb-4">
                Reach us out
              </h2>
              <form action="">
                <div className="form-row form-group">
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                    />
                  </div>
                  <div className="form-group mx-auto mt-3">
                    <Button
                      text="Submit"
                      type="border"
                      isDark="dark"
                      border="orange"
                    />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-6 mb-5">
              <div className="d-flex flex-column text-center">
                <h2 className="text-capitalize white mb-4">Let's connect</h2>
                <p className="white mb-0">Email</p>
                <a className="font-weight-bold mb-4" href="/">
                  info@gdsebike.com
                </a>
                <p className="white mb-0">Contact</p>
                <a href="/">0086-15975428800</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
