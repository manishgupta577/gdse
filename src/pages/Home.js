import React from "react";

import Header from "../components/Header";
import Button from "../components/Button";

import cycle from "../assets/img/cycle.png";
// import video from '../assets/img/video.mp4';

const Home = () => {
    return (
        <>
            <Header />
            <section id="hero">
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
        </>
    );
};

export default Home;
