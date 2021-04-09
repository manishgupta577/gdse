import React from "react";
import BgText from "../components/BgText";
import Button from "../components/Button";
import chooseHero from "../assets/img/backgrounds/chooseHero.png";
import "../assets/css/Choose.css";

import logo1 from "../assets/img/certificates/logos/logo1.jpg";
import logo2 from "../assets/img/certificates/logos/logo2.jpg";
import logo3 from "../assets/img/certificates/logos/logo3.jpg";
import logo4 from "../assets/img/certificates/logos/logo4.jpg";

import cert1 from "../assets/img/certificates/cert1.jpg";
import cert2 from "../assets/img/certificates/cert2.jpg";
import cert3 from "../assets/img/certificates/cert3.jpg";
import cert4 from "../assets/img/certificates/cert4.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Choose() {
  return (
    <div>
      <Header theme="black" />
      <section
        id="choose-hero"
        className="pan-background d-flex align-items-center"
      >
        <BgText text="The Best" color="red" />
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6">
              <h5 className="red">Why</h5>
              <h4>Choose Us?</h4>
              <div className="d-block mt-5">
                <Button text="Products" type="solid" className="mr-3 mb-3" />
              </div>
            </div>
            <div className="col-md-6">
              <img src={chooseHero} alt="Cycle" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>

      <section id="certifications">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 my-3">
              <h5 className="green">Globally Recognized.</h5>
              <h4>All Required Certifications</h4>
              <Button
                text="Contact Us"
                type="border"
                border="green"
                className="mt-3"
              />
            </div>
            <div className="col-lg-6 my-3">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                loop
                autoplay
                navigation
              >
                <SwiperSlide>
                  <div className="container cert text-center">
                    <img src={cert1} alt="gdse" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container cert text-center">
                    <img src={cert2} alt="gdse" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container cert text-center">
                    <img src={cert3} alt="gdse" className="img-fluid" />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="container cert text-center">
                    <img src={cert4} alt="gdse" className="img-fluid" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="mt-5 d-flex certificates-logo align-items-center justify-content-center flex-wrap w-100">
                <img src={logo1} alt="Logo" className="img-fluid mx-3 my-2" />
                <img src={logo2} alt="Logo" className="img-fluid mx-3 my-2" />
                <img src={logo3} alt="Logo" className="img-fluid mx-3 my-2" />
                <img src={logo4} alt="Logo" className="img-fluid mx-3 my-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="choose-provide"
        className="pan-background d-flex align-items-center"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 my-3">
              <h1>We Provide</h1>
              <p>Country Specific specifications meeting the</p>
              <ul>
                <li>Needs</li>
                <li>Regulations</li>
                <li>Client Demands</li>
                <li>Customer Desires</li>
              </ul>
              <p>We do all this across how many countries?</p>
              <h2>Regular Shipments to 72+ Countries</h2>
            </div>
            <div className="col-md-6 my-3">
              <h5 className="green">CUSTOMIZE.</h5>
              <h4>Get Country Specific Specs</h4>
              <Button
                text="Contact Us"
                type="border"
                border="green"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="choose-service"
        className="pan-background d-flex align-items-center"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 my-3">
              <h1>We Offer</h1>
              <p>Complete support to our partners</p>
              <ul>
                <li>Spare Support</li>
                <li>Warranties and Guarantees</li>
                <li>Replacement</li>
                <li>Repairs</li>
                <li>Exchange</li>
              </ul>
              <p>How do we do this??</p>
              <h2>Action with-in 24 Hrs Guaranteed</h2>
            </div>
            <div className="col-md-6 my-3">
              <h5 className="orange">WORLD CLASS.</h5>
              <h4>AFTER SALE SERVICE</h4>
              <Button
                text="Contact Us"
                type="border"
                border="orange"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="choose-help"
        className="pan-background d-flex align-items-center"
      >
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-md-6 my-3">
              <h1>We Help</h1>
              <p>Our clients save the most on duties and custom taxes</p>
              <ul>
                <li>Shipment from Three Different countries</li>
                <li>Best tax solution guranteed</li>
                <li>Free counsultation on Customs duty savings</li>
                <li>Shipment Support</li>
              </ul>
              <p>How do we do this??</p>
              <h2>
                We have strategic partnerships with Manufacturing across three
                continents
              </h2>
            </div>
            <div className="col-md-6 my-3">
              <h5 className="red">WORLD CLASS.</h5>
              <h4>AFTER SALE SERVICE</h4>
              <Button
                text="Contact Us"
                type="border"
                border="red"
                className="mt-3"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Choose;
