import React from "react";
import aboutCycle from "../assets/img/aboutCycle.png";
import Header from "../components/Header";


const Products = () => {
    return (
        <>
            <Header />
            <section id="products">
                <div id="bars" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#bars" data-slide-to="0" className="active"></li>
                        <li data-target="#bars" data-slide-to="1"></li>
                        <li data-target="#bars" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={aboutCycle} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>TnujNas</h5>
                                <p>13234</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={aboutCycle} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>TnujNas</h5>
                                <p>13234</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={aboutCycle} alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>TnujNas</h5>
                                <p>13234</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Products