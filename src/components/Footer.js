import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import footerHalf from "../assets/img/designs/footerHalf.png";
import Modal from "react-modal";
import $ from "jquery";
import requestUrls from "../constants/requestUrls";
import { useFormik } from "formik";
import axios from "axios";

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

  const formik_order = useFormik({
    initialValues: {
      name: "",
      company_name: "",
      email: "",
      product_name: "",
      phone: "",
      country: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));

      axios
        .post(`${requestUrls.base_url}${requestUrls.order}`, values)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            formik_order.resetForm();
            let email_values = {
              subject: "A new order request is recieved.",
              message: `<h2>A new Order request has been recieved from ${values.name} at GDSE Website</h2><h2>Order Details</h2><table><tbody><tr><td>Name</td><td>${values.name}</td></tr><tr><td>Company Name</td><td>${values.company_name}</td></tr><tr><td>Email</td><td>${values.email}</td></tr><tr><td>Product Name</td><td>${values.product_name}</td</tr><tr><td>Phone Number</td><td>${values.phone}</td></tr><tr><td>Country</td><td>${values.country}</td></tr></tbody></table>`,
              recipient_list: [`${values.email}`, "jhemant539@gmail.com"],
            };
            // console.log(email_values);
            // console.log(values);
            axios
              .post(
                `${requestUrls.base_url}${requestUrls.send_mail}`,
                email_values
              )
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  alert(res.data.message);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  const formik_lead = useFormik({
    initialValues: {
      name: "",
      company_name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      // alert(JSON.stringify(values, null, 2));
      axios
        .post(`${requestUrls.base_url}${requestUrls.lead}`, values)
        .then((res) => {
          // console.log(res);
          if (res.status === 200) {
            alert(res.data.message);
            formik_lead.resetForm();
            formik_order.resetForm();
            let email_values = {
              subject: "A new lead is recieved.",
              message: `<h1>A new lead has been recieved from ${values.name} at GDSE Website</h1><h2>Order Details</h2><table><tbody><tr><td>Name</td><td>${values.name}</td></tr><tr><td>Company Name</td><td>${values.company_name}</td></tr><tr><td>Email</td><td>${values.email}</td></tr><tr><td>Phone Number</td><td>${values.phone}</td></tr></tbody></table>`,
              recipient_list: ["tech.gdse@gmail"],
            };
            // console.log(email_values);
            // console.log(values);
            axios
              .post(
                `${requestUrls.base_url}${requestUrls.send_mail}`,
                email_values
              )
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  alert(res.data.message);
                }
              })
              .catch((err) => {
                console.log(err);
              });
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });
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
            <form onSubmit={formik_order.handleSubmit} className="w-100">
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    name="name"
                    id="name"
                    onChange={formik_order.handleChange}
                    value={formik_order.values.name}
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    name="email"
                    id="email"
                    onChange={formik_order.handleChange}
                    value={formik_order.values.email}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Country"
                    name="country"
                    id="country"
                    onChange={formik_order.handleChange}
                    value={formik_order.values.country}
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact Number"
                    name="phone"
                    id="phone"
                    onChange={formik_order.handleChange}
                    value={formik_order.values.phone}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Company Name"
                    name="company_name"
                    id="company_name"
                    onChange={formik_order.handleChange}
                    value={formik_order.values.company_name}
                  />
                </div>
                <div className="form-group col-12 col-md-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Intrested in Model"
                    name="product_name"
                    id="product_name"
                    onChange={formik_order.handleChange}
                    value={formik_order.values.product_name}
                  />
                </div>
              </div>
              <div className="form-group d-flex justify-content-center mt-4">
                <button
                  className="bg-transparent border-0 mx-auto w-100"
                  type="submit"
                >
                  <Button text="submit" type="solid" />
                </button>
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
              <form onSubmit={formik_lead.handleSubmit}>
                <div className="form-row form-group">
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      id="name"
                      onChange={formik_lead.handleChange}
                      value={formik_lead.values.name}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                      name="phone"
                      id="phone"
                      onChange={formik_lead.handleChange}
                      value={formik_lead.values.phone}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      id="email"
                      onChange={formik_lead.handleChange}
                      value={formik_lead.values.email}
                    />
                  </div>
                  <div className="col-lg-6 col-sm-6 mb-3">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Company"
                      name="company_name"
                      id="company_name"
                      onChange={formik_lead.handleChange}
                      value={formik_lead.values.company_name}
                    />
                  </div>
                  <div className="form-group mx-auto mt-3">
                    <button
                      className="bg-transparent border-0 mx-auto w-100"
                      type="submit"
                    >
                      <Button
                        text="Submit"
                        type="border"
                        isDark="dark"
                        border="orange"
                      />
                    </button>
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
