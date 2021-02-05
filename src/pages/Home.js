import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer"

import cycle from "../assets/img/cycle.png";
import panel1 from "../assets/img/panel1.jpg";
// import video from '../assets/img/video.mp4';

const Home = () => {
    return (
        <>
            <Header />
            {/* <section id="hero">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col">
              <h4>Ride the</h4>
              <h3>Electric Revolution</h3>
              <img className="img-fluid" src={cycle} alt="Cycle" />
              <p>Tanuj</p>
              <Button text="Explore models" />
            </div>
          </div>
        </div>
      </section> */}
            <Controller>
                <Scene triggerHook="onLeave" duration="300%" pin>
                    <Timeline wrapper={<div id="pinContainer" />}>
                        <section id="hero" className="panel">
                            <div className="container-fluid">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col">
                                        <h4>Ride the</h4>
                                        <h3>Electric Revolution</h3>
                                        <img className="img-fluid" src={cycle} alt="Cycle" />
                                        <p>Tanuj</p>
                                        <Button text="Explore models" />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <Tween from={{ x: "-100%" }} to={{ x: "0%" }}>
                            <section className="panel black panel-text">
                                <div className="row no-gutters align-items-center justify-content-center full-height">
                                    <div className="col-md-6">
                                        <center>
                                            <div className="w-50">
                                                <h1>Precision spares</h1>
                                                <p>Our reputation is built on the durability of the type of quality materials we use in the e-bike. We use precision machineries and tools to carve out some of the most beautiful design available in the industry today.</p>
                                            </div>
                                        </center>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="panel-bg panel-bg-1"></div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                        <Tween from={{ x: "100%" }} to={{ x: "0%" }}>
                            <section className="panel black panel-text">
                                <div className="row no-gutters align-items-center justify-content-center full-height">
                                    <div className="col-md-6">
                                        <center>
                                            <div className="w-50">
                                                <h1>Precision spares</h1>
                                                <p>Our reputation is built on the durability of the type of quality materials we use in the e-bike. We use precision machineries and tools to carve out some of the most beautiful design available in the industry today.</p>
                                            </div>
                                        </center>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="panel-bg panel-bg-2"></div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                        <Tween from={{ y: "-100%" }} to={{ y: "0%" }}>
                            <section className="panel black panel-text">
                                <div className="row no-gutters align-items-center justify-content-center full-height">
                                    <div className="col-md-6">
                                        <center>
                                            <div className="w-50">
                                                <h1>Precision spares</h1>
                                                <p>Our reputation is built on the durability of the type of quality materials we use in the e-bike. We use precision machineries and tools to carve out some of the most beautiful design available in the industry today.</p>
                                            </div>
                                        </center>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="panel-bg panel-bg-3"></div>
                                    </div>
                                </div>
                            </section>
                        </Tween>
                    </Timeline>
                </Scene>
            </Controller>

            <Footer />
        </>
    );
};

export default Home;
