import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import footerHalf from "../assets/img/designs/footerHalf.png";
import Modal from "react-modal";
import $ from "jquery";

const Footer = () => {
  useEffect(() => {
    $("html").bind("mouseleave", function () {
      openModal();
      $("html").unbind("mouseleave");
    });
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      outline: "none",
      minWidth: "20rem",
      height: "80%",
      maxHeight: "40rem",
      minHeight: "20rem",
      width: "80%",
      maxWidth: "40rem",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <section
          id="quote-modal"
          style={{ position: "relative" }}
          className="h-100 w-100"
        >
          <div
            onClick={closeModal}
            className="close-btn d-flex align-items-center justify-content-center"
          >
            <i class="fas fa-times"></i>
          </div>
          <div className="container d-flex align-items-center justify-content-center h-100 flex-column w-100">
            <h1 className="text-center mb-3">
              Get a <span className="red">Quote</span>
            </h1>
            <form action="" className="w-100">
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact Number"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Intrested in Model"
                  />
                </div>
              </div>
              <div className="form-group d-flex justify-content-center mt-4">
                <Button text="submit" type="solid" />
              </div>
            </form>
          </div>
        </section>
      </Modal>

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
