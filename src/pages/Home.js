import React from "react";

import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer"

import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import 'react-awesome-slider/dist/styles.css';

import cycle1 from "../assets/img/cycle1.png";
import _3dbtn from "../assets/img/3dbtn.svg";
import hex from "../assets/img/hex.svg";
import panel1 from "../assets/img/panel1.jpg";
// import video from '../assets/img/video.mp4';

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Home = () => {
    return (
        <>
            <Header />
            <section id="hero">
                <AutoplaySlider play={true} bullets={false} interval={6000} organicArrows={false} className="hero-slider">
                    <div className="hero-slider-child">
                        <div className="container">
                            <div className="text">
                                <h1>Award Winning <br /> <span className="red">E-Bike</span>  Manufacturer</h1>
                                <p>12000 Sq. Ft. of manufacturing facility, World class Anti Dumping solution.</p>
                                <div className="btns mt-5">
                                    <Button text="Products" />
                                    <Button text="Virtual tour" />
                                </div>
                            </div>
                        </div>
                        <div className="td-cta">
                            <img src={_3dbtn} alt="3dbtn" />
                            <h4>View in 3d</h4>
                        </div>
                    </div>
                </AutoplaySlider>
            </section>

            <section id="card1">
                <div className="bg-text">
                    <h1>Trible</h1>
                </div>
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <h3>Customise</h3>
                            <h1>Get country specific specs</h1>
                            <div className="btns">
                                <div className="hex-btn mt-5">
                                    <img src={hex} alt="hex" />
                                    <h4>View models</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <img src={cycle1} alt="cycle" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Home;
