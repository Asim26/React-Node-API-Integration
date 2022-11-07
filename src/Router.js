import React from "react";
import NavBar from "./components/navBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home";
import AllRecords from "./components/allRecords";
import ContactUs from "./components/contactUs";

function AppRouter() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/contact-us">
          <ContactUs />
        </Route>
        <Route path="/all-records">
          <AllRecords />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default AppRouter;
