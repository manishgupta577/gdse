import React from 'react'
import '../assets/css/About.css'
import BgText from '../components/BgText'
import Button from '../components/Button'

import redPoly from "../assets/img/designs/aboutPolyRed.svg";
import orangePoly from "../assets/img/designs/aboutPolyOrange.svg";
import greenPoly from "../assets/img/designs/aboutPolyGreen.svg";

import lilyLee from '../assets/img/team/lilyLee.jpg'
import ivyHuang from '../assets/img/team/ivyHuang.jpg'
import rajibGangopadhyay from '../assets/img/team/rajibGangopadhyay.jpg'
import kikoRu from '../assets/img/team/kikoRu.jpg'
import cindyWu from '../assets/img/team/cindyWu.jpg'
import apurvGore from '../assets/img/team/apurvGore.jpg'


import aboutText from '../assets/img/backgrounds/aboutText.jpg'
import aboutFactory from '../assets/img/backgrounds/aboutFactory.jpg'
import Footer from '../components/Footer';
import Header from '../components/Header';

import photo1 from '../assets/img/about/photo1.jpg'
import photo2 from '../assets/img/about/photo2.jpg'
import photo3 from '../assets/img/about/photo3.jpg'
import photo4 from '../assets/img/about/photo4.jpg'
import photo5 from '../assets/img/about/photo5.jpg'
import photo6 from '../assets/img/about/photo6.jpg'
import photo7 from '../assets/img/about/photo7.jpg'

function About() {
    return (
        <div>
            <Header theme="black" />
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
                            <p>GDSeBike has been in existence for a decade, It began with three founders passionate about EV industry wanted to bring the best product to the world.</p>
                            <p>We Soon saw good success, that we believe was a result of serving some great clients and extreme hard work of our team.</p>
                            <p>We felt the need to establish one of the biggest eBike factories of the world in Guangdong province, It helped us to scale up drastically and we started offering  OEM & ODM service.</p>
                            <p>We soon became absolutely specialized in manufacturing medium to high-end</p>
                            <ul>
                                <li>Mountain Ebike</li>
                                <li>City Ebike</li>
                                <li>Folding Ebike</li>
                                <li>Delivery Ebike</li>
                                <li>Mountain bike</li>
                                <li>Road bike</li>
                                <li>Folding bike</li>
                            </ul>
                        </div>
                        <div className="col-md-6 my-4">
                            <img src={aboutText} dark="false" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 my-4">
                            <img src={aboutFactory} dark="false" alt="Image" className="img-fluid" />
                        </div>
                        <div className="col-md-6 my-4">
                            <h1>Our Factory</h1>
                            <p>We have full-automatic wheel assembly equipment for 16 sets, with the production line over 150 meters.</p>
                            <p>We have highly automater and precise testing equipment for Frame Accuracy Testing.</p>
                            <p>We perform Platform Frame Vibration Test for Front Fork Accuracy Testing along with Platform Front Fork Fatigue Test using our high end Machineries.</p>
                            <p>Our state of the art Precision salt spray testing machine never fails to give faulty results.</p>
                            <p>We have Rockwell hardness tests and Dynamometer Controller Comprehensive Testing Instrument for Electric Vehicle Parts along with  Electric cardboard Breakage Resistance tests.</p>
                            <p>We never get a chance to be less proud of our sensional R&D team, highly professional sales team, extremely experienced production team, super strong technology support team, along with the precise and strick quality control team.</p>
                            <p>Our products has been passed EN15194, RoHS, ISO4210, LVD, EMC certificates. We are very proud to tell you, the annual sales in 2020 will exceed 80,000 pcs electric bike and 400,000 pcs normal bicycle, 30% of our market is in China mainland, and 70% of our market is in Europe, USA, Russia, Middle East, Southeast Asia, South America, North Africa, etc.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="feature">
                <h3 className="mb-5">Trade Shows</h3>
                <div className="marquee">
                    <div className="track">
                        <div className="content">
                            <img src={photo1} alt="Image" className="mx-3" />
                            <img src={photo2} alt="Image" className="mx-3" />
                            <img src={photo3} alt="Image" className="mx-3" />
                            <img src={photo4} alt="Image" className="mx-3" />
                            <img src={photo5} alt="Image" className="mx-3" />
                            <img src={photo6} alt="Image" className="mx-3" />
                            <img src={photo7} alt="Image" className="mx-3" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-team">
                <div className="container">
                    <h1 className="mb-5 font-weight-normal text-center">Meet N Greet</h1>
                    <div className="row justify-content-center text-center">
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={lilyLee} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Lily Lee</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={ivyHuang} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Ivy Huang</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={rajibGangopadhyay} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Rajib Gangopadhyay</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={kikoRu} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Kiko Ru</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={cindyWu} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Cindy Wu</h2>
                            <p>Creative Designer</p>
                        </div>
                        <div className="col-md-4 col-sm-6 mb-4">
                            <img src={apurvGore} alt="Team" className="img-fluid" />
                            <h2 className="mt-3">Cindy Wu</h2>
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
