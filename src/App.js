import React from "react";
import Header from './components/Header';
import Button from './components/Button'
import cycle from './assets/img/cycle.png'

const App = () => {
  return <>
    <Header />
    <section id="hero">
      <div className="container">
        <div className="hero-container">
          <div className="hero-text">
            <h3>Ride the</h3>
            <h1>Electric<br></br>Revolution</h1>
            <Button text="Explore models" />
          </div>
          <div className="hero-model">
            <img className="img-fluid" src={cycle} alt="" />
            <p>Drag.zoom.move</p>
          </div>
        </div>
      </div>
    </section>

    <div id="about"></div>
  </>
};

export default App;