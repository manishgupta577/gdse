import React from 'react'
import '../assets/css/About.css'
import BgText from '../components/BgText'
import Button from '../components/Button'

import aboutText from '../assets/img/backgrounds/aboutText.jpg'

function About() {
    return (
        <div>
            <section id="about-hero" className="pan-background d-flex align-items-center">
                <BgText text="About Us" color="red" />
                <div className="container">
                    <h5 className="red">Introduction about</h5>
                    <h4>GDSE company</h4>
                    <Button text="Products" type="solid" className="mt-3" />
                </div>
            </section>

            <section id="about-info">
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        <div className="col-lg-4 col-md-4 col-12">
                            <h1 className="white">500</h1>
                            <h2 className="white">Thousand</h2>
                            <h3 className="white">Pcs Annual Sale</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h1 className="white">97.88</h1>
                            <h2 className="white">Percent</h2>
                            <h3 className="white">Quick Response Rate</h3>
                        </div>
                        <div className="col-lg-4 col-md-4 col-12">
                            <h2 className="white">Top</h2>
                            <h1 className="white">3</h1>
                            <h2 className="white">Seller</h2>
                            <h3 className="white">Last 5 Years</h3>
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-text">
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <h1>About Us</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptatum quaerat doloremque hic non, laudantium inventore. Sapiente vel veniam quidem?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit, voluptatum officia consequatur facere perspiciatis qui veritatis amet ipsa autem fugiat est nisi beatae dolor? Nostrum consequuntur veniam dolores totam?</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus dignissimos excepturi esse, totam voluptatem ipsam! Minima qui similique incidunt voluptatum?</p>
                            <Button text="Virtual Tour" border="green" type="border" />
                        </div>
                        <div className="col-lg-6">
                            <img src={aboutText} dark="false" alt="Image" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="about-team">
                <div className="container">
                    <h1>Meet N Greet</h1>
                    <div className="row justify-content-center">
                        <div className="col-lg-6">

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About
