import React from "react";
import { Controller, Scene } from "react-scrollmagic";

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

import aboutImg from "../assets/img/aboutImg.png";
import aboutCycle from "../assets/img/aboutCycle.png";

const About = () => {
  return (
    <>
      <Header />
      <Controller>
        <Scene triggerElement="#made" classToggle="bg-black">
          <section id="about">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6">
                  <h1>About GDSE</h1>
                  <hr />
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
                <div className="col-lg-6">
                  <img className="img-fluid" src={aboutImg} alt="About Image" />
                </div>
              </div>
            </div>
          </section>
        </Scene>
        <Scene classToggle="bg-black">
          <section id="made">
            <div className="container">
              <div className="row justify-content-center align-items-center">
                <div className="col-lg-6">
                  <img className="img-fluid" src={aboutImg} alt="About Image" />
                </div>
                <div className="col-lg-6">
                  <h1>How it’s Made?</h1>
                  <hr />
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do
                  </h2>
                  <Button text="tour around" isDark={true} />
                </div>
              </div>
            </div>
          </section>
        </Scene>
      </Controller>
      <Footer />
    </>
  );
};

export default About;
