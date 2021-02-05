import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Products from './pages/Products'
import Error from './pages/Error'


const App = () => {
  return (
    <Router>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </Router>
  )
};

export default App;