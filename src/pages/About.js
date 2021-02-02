import React from "react";

import Button from "../components/Button";
import ScrollMagic from "scrollmagic";

import aboutImg from "../assets/img/aboutImg.png";
import aboutCycle from "../assets/img/aboutCycle.png";

const About = () => {
  const controller = new ScrollMagic.Controller();
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#empty",
  })
    // .addIndicators()
    .setClassToggle("#about, #empty, #made", "bg-change-black")
    .addTo(controller);

  return (
    <>
      <section id="about">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6">
              <h1>About GDSE</h1>
              <hr />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={aboutImg} alt="About Image" />
            </div>
          </div>
        </div>
      </section>
      {/* <img className="img-fluid" src={aboutCycle} alt="Cycle Image" /> */}

      <section id="empty"></section>

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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              </h2>
              <Button text="tour around" isDark={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
