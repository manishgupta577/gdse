import React from "react";
import "../assets/css/Home.css";
import logoWhite from "../assets/img/logowhite.png";

// import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";

import heroInfo1 from "../assets/img/cycles/heroInfo1.png";
import heroInfo2 from "../assets/img/cycles/heroInfo2.png";
import heroInfo3 from "../assets/img/cycles/heroInfo3.png";
import TextVice from "react-text-vice";
import BgText from "../components/BgText";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Home = () => {
    return (
        <>
            <section id="home">
                <Swiper loop autoplay effect="fade" pagination={{ clickable: true }}>
                    <SwiperSlide>
                        <section
                            id="home-hero"
                            className="pan-background d-flex align-items-center"
                        >
                            <div className="container">
                                <h1 className="white">
                                    Award Winning <br /> <span className="red">E-Bike</span> Manufacturer</h1>
                                <h2 className="white">
                                    12000 Sq. Ft. of manufacturing facility, World class Anti Dumping solution.</h2>
                                <div className="d-block mt-5">
                                    <Button text="Products" type="solid" className="mr-3" />
                                    <Button text="Virtual tour" isDark="dark" type="border" border="red" />
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section
                            id="home-hero"
                            className="pan-background d-flex align-items-center"
                        >
                            <div className="container">
                                <h1 className="white">
                                    Award Winning <br /> <span className="green">E-Bike</span> Manufacturer
                                </h1>
                                <h2 className="white">
                                    12000 Sq. Ft. of manufacturing facility, World class Anti
                                    Dumping solution.
                                </h2>
                                <div className="d-block mt-5">
                                    <Button text="Products" type="solid" className="mr-3" />
                                    <Button text="Virtual tour" isDark="dark" type="border" border="green" />
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                    <SwiperSlide>
                        <section
                            id="home-hero"
                            className="pan-background d-flex align-items-center"
                        >
                            <div className="container">
                                <h1 className="white">
                                    Award Winning <br /> <span className="orange">E-Bike</span> Manufacturer
                                </h1>
                                <h2 className="white">
                                    12000 Sq. Ft. of manufacturing facility, World class Anti
                                    Dumping solution.
                                </h2>
                                <div className="d-block mt-5">
                                    <Button text="Products" type="solid" className="mr-3" />
                                    <Button text="Virtual tour" isDark="dark" type="border" border="orange" />
                                </div>
                            </div>
                        </section>
                    </SwiperSlide>
                </Swiper>
            </section>


            <section id="home-info1">
                <BgText text="Trible" color="green" />
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <h5 className="green">Customize.</h5>
                            <h4>Get country specifice specs</h4>
                            <Button
                                text="View models"
                                type="border"
                                border="green"
                                className="mt-3"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="mx-auto">
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="home-info2">
                <BgText text="No .1" color="red" />
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <div className="mx-auto">
                                <img src={heroInfo2} alt="Cycle" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h5 className="red">World class.</h5>
                            <h4>After sale service</h4>
                            <Button
                                text="Know why"
                                type="border"
                                border="red"
                                className="mt-3"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section id="home-info3">
                <BgText text="Duty Free" color="orange" />
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-lg-6">
                            <h5 className="orange">Save big.</h5>
                            <h4>Anti dumping solution</h4>
                            <Button
                                text="Know how"
                                type="border"
                                border="orange"
                                className="mt-3"
                            />
                        </div>
                        <div className="col-lg-6">
                            <div className="mx-auto">
                                <img src={heroInfo3} alt="Cycle" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="home-types">
                <div className="container">
                    <div className="d-flex align-items-center flex-wrap mb-5">
                        <h1 className="white mr-3 mb-0">More with</h1>
                        <img src={logoWhite} alt="Logo" />
                    </div>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        autoplay
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                            },
                            992: {
                                slidesPerView: 3,
                            },
                        }}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <div className="home-types-box mountain-type d-flex flex-column justify-content-between">
                                <h2 className="white">Mountain bike</h2>
                                <Button text="Discover" type="solid" isDark="dark" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-types-box foldable-type d-flex flex-column justify-content-between">
                                <h2 className="white">Foldable bike</h2>
                                <Button text="Discover" type="solid" isDark="dark" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-types-box city-type d-flex flex-column justify-content-between">
                                <h2 className="white">City bike</h2>
                                <Button text="Discover" type="solid" isDark="dark" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="home-types-box delivery-type d-flex flex-column justify-content-between">
                                <h2 className="white">Delivery bike</h2>
                                <Button text="Discover" type="solid" isDark="dark" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Home;
