import React from "react";
import Header from './components/Header';
import Button from './components/Button'

const App = () => {
  return <>
    <Header />
    <div id="hero">
      <div className="container">
        <h3>Ride the</h3>
        <h1>Electric<br></br>Revolution</h1>
        <Button text="Explore models" />
      </div>
    </div>

    <div id="about"></div>
  </>
};

export default App;