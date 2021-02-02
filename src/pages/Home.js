import React from 'react'
import Header from '../components/Header';
import Button from '../components/Button'
import cycle from '../assets/img/cycle.png'
// import video from '../assets/img/video.mp4';

const Home = () => {
    return (
        <div>
            <section id="hero">
                <div className="container-fluid" style={{ textAlign: "center" }}>
                    <h4>Ride the</h4>
                    <h3>Electric Revolution</h3>
                    <img className="img-fluid" src={cycle} alt="Cycle" />
                    <p>Drag.zoom.move</p>
                    <div>
                        <Button text="Explore models" />
                    </div>
                </div>
            </section>
            {/* 
            <video width="100%" autoPlay loop muted>
                <source src={video} type='video/mp4' />
            </video> */}
        </div>
    );
}

export default Home;