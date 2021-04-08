import React, { useState, useEffect } from "react";
import BgText from "../components/BgText";
import logoWhite from "../assets/img/logowhite.png";
import heroInfo1 from "../assets/img/cycles/heroInfo1.png";
import triUp from "../assets/img/designs/triUp.svg";
import triDown from "../assets/img/designs/triDown.svg";
import Button from "../components/Button";

import "../assets/css/Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, EffectFade } from "swiper/core";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/effect-fade/effect-fade.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router";
import axios from "axios";
import requestUrls from "../constants/requestUrls";

SwiperCore.use([Pagination, Autoplay, EffectFade]);

function Products(props) {
  const [categories, setCategories] = useState();
  const [products, setProducts] = useState();
  const [reRender, setReRender] = useState(true);
  const history = useHistory();
  console.log(props);

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);

  function getProducts() {
    axios
      .get(
        `${requestUrls.base_url}category/${props.match.params.category_slug}/product/list`
      )
      .then((res) => {
        // console.log(res);
        if (res.status === 200) {
          setProducts(res.data.payload.products);
          setReRender(!reRender);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getCategories() {
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
  }

  return (
    <div>
      <Header theme="black" />
      <section
        id="products-hero"
        className="pan-background d-flex align-items-center"
      >
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
          <h2 className="mb-5">Bikes in this Category</h2>
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
            {products != undefined &&
              products != null &&
              products.map((product, index) => {
                return (
                  <SwiperSlide>
                    <div className="products-top-box py-4 px-4 d-flex flex-column justify-content-between">
                      <img src={triUp} alt="TriUp" className="triUp" />
                      <img src={triDown} alt="TriDown" className="triDown" />
                      <img
                        src={product.image_url}
                        alt="Cycle"
                        className="img-fluid"
                      />
                      <div className="d-flex flex-column justify-content-center">
                        <h5 className="text-center">{product.name}</h5>
                        <button
                          onClick={() =>
                            history.push(`${props.match.url}/${product.slug}`)
                          }
                          className="bg-transparent border-0 mx-auto mt-4"
                        >
                          <Button text="Discover" type="solid" />
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
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
            {categories != null &&
              categories != undefined &&
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

      <Footer />
    </div>
  );
}

export default Products;
