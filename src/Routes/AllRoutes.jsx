import React from 'react';
import { Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";
import ContactUs from "../pages/ContantUs";
import Login  from "../pages/Login";
import Service from "../pages/Service";

function AllRoutes() {
  return (
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <ContactUs />
      </Route>
      <Route path="/about-us">
        <AboutUs />
      </Route>
      <Route path="/services">
        <Service />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </div>
  );
}

export default AllRoutes;
