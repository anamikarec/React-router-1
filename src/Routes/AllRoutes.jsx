import React from 'react';
import { Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Login  from "../pages/Login";
import Services from "../pages/Services";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Route path="/about-us">
        <About />
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default AllRoutes;
