import React from 'react'
import '../assets/css/About.css'
import BgText from '../components/BgText'
import Button from '../components/Button'

import redPoly from "../assets/img/designs/aboutPolyRed.svg";
import orangePoly from "../assets/img/designs/aboutPolyOrange.svg";
import greenPoly from "../assets/img/designs/aboutPolyGreen.svg";
import adityaOza from '../assets/img/team/adityaOza.jpg'

import aboutText from '../assets/img/backgrounds/aboutText.jpg'
import Footer from '../components/Footer';

function About() {
    return (
        <div>
            <section id="about-hero" className="pan-background d-flex align-items-center">
                <BgText text="About" color="red" />
                <div className="container">
                    <h5 className="red">Introduction about</h5>
                    <h4>GDSE company</h4>
                    <Button text="Products" type="solid" className="mt-3" />
                </div>
            </section>

            <section id="about-info">
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="my-4 col-lg-4 col-md-4 col-12">
                            <img src={redPoly} alt="Polygon" className="img-fluid" />
                            <div className="inside-text">
                                <h1 className="white">500</h1>
                                <h2 className="white">Thousand</h2>
                                <h3 className="white">Pcs Annual Sale</h3>
                            </div>
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-12">
                            <img src={orangePoly} alt="Polygon" className="img-fluid" />
                            <div className="inside-text">
                                <h1 className="white">97.88</h1>
                                <h2 className="white">Percent</h2>
                                <h3 className="white">Quick Response Rate</h3>
                            </div>
                        </div>
                        <div className="my-4 col-lg-4 col-md-4 col-12">
                            <img src={greenPoly} alt="Polygon" className="img-fluid" />
                            <div className="inside-text">
                                <h2 className="white">Top</h2>
                                <h1 className="white">3</h1>
                                <h2 className="white">Seller</h2>
                                <h3 className="white">Last 5 Years</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-text">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6 my-4">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum quaerat doloremque hic non, laudantium inventore. Sapiente vel veniam quidem?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit, voluptatum officia consequatur facere perspiciatis qui veritatis amet ipsa autem fugiat est nisi beatae dolor? Nostrum consequuntur veniam dolores totam?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos excepturi esse, totam voluptatem ipsam! Minima qui similique incidunt voluptatum?</p>
                            <Button text="Virtual Tour" border="green" type="border" />
                        </div>
                        <div className="col-md-6 my-4">
                            <img src={aboutText} dark="false" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-team">
                <div className="container">
                    <h1 className="mb-5 font-weight-normal">Meet N Greet</h1>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={adityaOza} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Aditya Oza</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={adityaOza} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Aditya Oza</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={adityaOza} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Aditya Oza</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={adityaOza} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Aditya Oza</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={adityaOza} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Aditya Oza</h2>
                            <p>Creative Designer</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default About
