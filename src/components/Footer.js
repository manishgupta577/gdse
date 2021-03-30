import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column flex-nowrap">
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
            <div className="col-lg-4 col-md-6">
              <h2 className="text-center text-capitalize white mb-4">
                Reach us out
              </h2>
              <form action="">
                <div className="form-row form-group">
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group mx-auto">
                    <Button text="Submit" type="border" border="orange" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="d-flex flex-column text-center">
                <h2 className="text-capitalize white mb-4">Let's connect</h2>
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
    </>
  );
};

export default Footer;
