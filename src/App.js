import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Choose from "./pages/Choose";
import ReactGA from "react-ga";
import ScrollToTop from "./components/ScrollToTop";

const TRACKING_ID = "UA-195955983-1";
ReactGA.initialize(TRACKING_ID);

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/choose" component={Choose} />
        <Route exact path="/blog" component={Blog} />
        <Route path="/blog/blog-post" component={BlogPost} />
        <Route exact path="/:category_slug" component={Products} />
        <Route exact path="/:category_slug/:product_slug" component={Product} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
};

export default App;
