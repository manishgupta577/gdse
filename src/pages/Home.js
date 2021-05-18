import React, { useState, useEffect } from "react";
import "../assets/css/Home.css";
import logoWhite from "../assets/img/logowhite.png";

// import Header from "../components/Header";
import Button from "../components/Button";
import Footer from "../components/Footer";

import heroInfo1 from "../assets/img/cycles/heroInfo1.png";
import heroInfo2 from "../assets/img/cycles/heroInfo2.png";
import heroInfo3 from "../assets/img/cycles/heroInfo3.png";
// import TextVice from "react-text-vice";
import BgText from "../components/BgText";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Header from "../components/Header";
import requestUrls from "../constants/requestUrls";
import axios from "axios";
import { useHistory } from "react-router";
import { HashLink } from "react-router-hash-link";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

const Home = (props) => {
  const [categories, setCategories] = useState();
  const [reRender, setReRender] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(`${requestUrls.base_url}${requestUrls.category_list}`)
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setCategories(res.data.payload.categories);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Header />
      <section id="home">
        <Swiper loop autoplay effect="fade" pagination={{ clickable: true }}>
          <SwiperSlide>
            <section
              id="home-hero"
              className="pan-background d-flex align-items-center home-hero-1"
            >
              <div className="container">
                <h1 className="white">
                  Award Winning <br /> <span className="red">E-Bike</span>
                  Manufacturer
                </h1>
                <h2 className="white">
                  30,000 Sq. Mt. of manufacturing facility, World class Anti
                  Dumping solution.
                </h2>
                <div className="d-block mt-5">
                  <HashLink to="/#home-types" smooth>
                    <Button
                      text="Products"
                      type="solid"
                      className="mr-3 my-3"
                    />
                  </HashLink>
                  <Button
                    text="Virtual tour"
                    isDark="dark"
                    type="border"
                    border="red"
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              id="home-hero"
              className="pan-background d-flex align-items-center home-hero-2"
            >
              <div className="container">
                <h1 className="white">
                  Award Winning <br /> <span className="green">E-Bike</span>
                  Manufacturer
                </h1>
                <h2 className="white">
                  30,000 Sq. Mt. of manufacturing facility, World class Anti
                  Dumping solution.
                </h2>
                <div className="d-block mt-5">
                  <HashLink to="/#home-types" smooth>
                    <Button
                      text="Products"
                      type="solid"
                      className="mr-3 my-3"
                    />
                  </HashLink>
                  <Button
                    text="Virtual tour"
                    isDark="dark"
                    type="border"
                    border="green"
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              id="home-hero"
              className="pan-background d-flex align-items-center home-hero-3"
            >
              <div className="container">
                <h1 className="white">
                  Award Winning <br /> <span className="orange">E-Bike</span>
                  Manufacturer
                </h1>
                <h2 className="white">
                  30,000 Sq. Mt. of manufacturing facility, World class Anti
                  Dumping solution.
                </h2>
                <div className="d-block mt-5">
                  <HashLink to="/#home-types" smooth>
                    <Button
                      text="Products"
                      type="solid"
                      className="mr-3 my-3"
                    />
                  </HashLink>
                  <Button
                    text="Virtual tour"
                    isDark="dark"
                    type="border"
                    border="orange"
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              id="home-hero"
              className="pan-background d-flex align-items-center home-hero-2"
            >
              <div className="container">
                <h1 className="white">
                  Award Winning <br /> <span className="green">E-Bike</span>
                  Manufacturer
                </h1>
                <h2 className="white">
                  30,000 Sq. Mt. of manufacturing facility, World class Anti
                  Dumping solution.
                </h2>
                <div className="d-block mt-5">
                  <HashLink to="/#home-types" smooth>
                    <Button
                      text="Products"
                      type="solid"
                      className="mr-3 my-3"
                    />
                  </HashLink>
                  <Button
                    text="Virtual tour"
                    isDark="dark"
                    type="border"
                    border="green"
                  />
                </div>
              </div>
            </section>
          </SwiperSlide>
          <SwiperSlide>
            <section
              id="home-hero"
              className="pan-background d-flex align-items-center home-hero-4"
            >
              <div className="container">
                <h1 className="white">
                  Award Winning <br /> <span className="orange">E-Bike</span>
                  Manufacturer
                </h1>
                <h2 className="white">
                  30,000 Sq. Mt. of manufacturing facility, World class Anti
                  Dumping solution.
                </h2>
                <div className="d-block mt-5">
                  <HashLink to="/#home-types" smooth>
                    <Button
                      text="Products"
                      type="solid"
                      className="mr-3 my-3"
                    />
                  </HashLink>
                  <Button
                    text="Virtual tour"
                    isDark="dark"
                    type="border"
                    border="orange"
                  />
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
              <HashLink to="/#home-types" smooth>
                <Button
                  text="View models"
                  type="border"
                  border="green"
                  className="mt-3"
                />
              </HashLink>
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
        <BgText text="No.1" color="red" />
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
              <HashLink to="/choose#choose-service" smooth>
                <Button
                  text="Know why"
                  type="border"
                  border="red"
                  className="mt-3"
                />
              </HashLink>
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
              <HashLink to="/choose#choose-save" smooth>
                <Button
                  text="Know how"
                  type="border"
                  border="orange"
                  className="mt-3"
                />
              </HashLink>
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
            {categories !== null &&
              categories !== undefined &&
              categories.map((category, index) => {
                return (
                  <SwiperSlide>
                    <div
                      className="home-types-box d-flex flex-column justify-content-between"
                      style={{
                        backgroundImage: `url(${category.image_url})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                      }}
                    >
                      <h2 className="white">{category.title}</h2>
                      <button
                        onClick={() => history.push(`/${category.slug}`)}
                        className="bg-transparent border-0 text-left w-100"
                      >
                        <Button text="Discover" type="solid" isDark="dark" />
                      </button>
                    </div>
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </div>
      </section>

      <section id="guide" className="pan-background">
        <div className="container">
          <h1 className="orange">
            <span className="green">Guide</span> to buy from
            <span className="red"> China</span>
          </h1>
          <p>
            Get your free E-Guide on how to avoid any errors and have a splendid
            experience buying E-Bikes from China.
          </p>
          <HashLink to="#footer" smooth>
            <Button
              text="Download Now"
              type="border"
              border="red"
              className="mt-3"
            />
          </HashLink>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
