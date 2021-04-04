import React from "react";
import Button from "../components/Button";
import "../assets/css/Product.css";
import BgText from "../components/BgText";
import heroInfo1 from "../assets/img/cycles/heroInfo1.png";
import logoWhite from "../assets/img/logowhite.png"
import triUp from "../assets/img/designs/triUp.svg";
import triDown from "../assets/img/designs/triDown.svg";
import blackPoly from '../assets/img/designs/productBlackPoly.svg'

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Header from '../components/Header';
import Footer from '../components/Footer';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Product() {
    return (
        <div>
            <Header theme="black" />
            <section
                id="productho-hero"
                className="pan-background d-flex align-items-center"
            >
                <BgText text="Trible" color="green" />
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h5 className="green">Comfort</h5>
                            <h4>Trible</h4>
                            <div className="d-block mt-5">
                                <Button text="Products" type="solid" className="mr-3 mb-3" />
                                <Button text="Virtual tour" type="border" border="green" className="mb-3" />
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="info-poly">
                <div className="container">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-2 col-md-3 col-6 my-4">
                            <div className="outside-box">
                                <img src={blackPoly} alt="Poly" className="img-fluid" />
                                <div className="inside-text">
                                    <h2 className="text-uppercase">6061</h2>
                                </div>
                            </div>
                            <h2 className="mt-3">ALUMINIUM ALLOY</h2>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 my-4">
                            <div className="outside-box">
                                <img src={blackPoly} alt="Poly" className="img-fluid" />
                                <div className="inside-text">
                                    <h2 className="text-uppercase">7 Speed</h2>
                                </div>
                            </div>
                            <h2 className="mt-3">SHEMANO Derailleur</h2>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 my-4">
                            <div className="outside-box">
                                <img src={blackPoly} alt="Poly" className="img-fluid" />
                                <div className="inside-text">
                                    <h2 className="text-uppercase">250 Watt</h2>
                                </div>
                            </div>
                            <h2 className="mt-3">MOTOR</h2>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 my-4">
                            <div className="outside-box">
                                <img src={blackPoly} alt="Poly" className="img-fluid" />
                                <div className="inside-text">
                                    <h2 className="text-uppercase">36 Volts</h2>
                                </div>
                            </div>
                            <h2 className="mt-3">BATTERY</h2>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 my-4">
                            <div className="outside-box">
                                <img src={blackPoly} alt="Poly" className="img-fluid" />
                                <div className="inside-text">
                                    <h2 className="text-uppercase">21 Kg</h2>
                                </div>
                            </div>
                            <h2 className="mt-3">WEIGHT</h2>
                        </div>
                        <div className="col-lg-2 col-md-3 col-6 my-4">
                            <div className="outside-box">
                                <img src={blackPoly} alt="Poly" className="img-fluid" />
                                <div className="inside-text">
                                    <h2 className="text-uppercase">LCD Screen</h2>
                                </div>
                            </div>
                            <h2 className="mt-3">DISPLAY</h2>
                        </div>
                    </div>
                </div>
            </section>

            <section id="info-text" className="pan-background">
                <div className="container">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
          </p>
                    <Button
                        text="Download Now"
                        type="border"
                        border="red"
                        className="mt-3"
                    />
                </div>
            </section>

            <section id="products-top">
                <div className="container">
                    <h2 className="mb-5">Similar in this category</h2>
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
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-center">
                                <img src={triUp} alt="TriUp" className="triUp" />
                                <img src={triDown} alt="TriDown" className="triDown" />
                                <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                                <h5 className="text-center">Trible 2</h5>

                                <Button text="Discover" type="solid" className="mx-auto mt-4" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
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
        </div>
    );
}

export default Product;
