import React from 'react'
import BgText from '../components/BgText'
import logoWhite from "../assets/img/logowhite.png"
import heroInfo1 from "../assets/img/cycles/heroInfo1.png";
import triUp from "../assets/img/designs/triUp.svg";
import triDown from "../assets/img/designs/triDown.svg";
import Button from '../components/Button';

import "../assets/css/Products.css"

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Header from '../components/Header';
import Footer from '../components/Footer';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Products() {
    return (
        <div>
            <Header />
            <section id="products-hero" className="pan-background d-flex align-items-center">
                <BgText text="Explore" color="green" />
                <div className="container">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6">
                            <h5 className="green">Explore</h5>
                            <h4>Models</h4>
                            <Button text="Products" type="solid" className="mt-3" />
                        </div>
                        <div className="col-md-6">
                            <img src={heroInfo1} alt="Cycle" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </section>

            <section id="products-top">
                <div className="container">
                    <h1 className="mb-5">Top Selling</h1>
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
    )
}

export default Products
