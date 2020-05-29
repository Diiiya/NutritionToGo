import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";

import RestaurantResultsPage from "views/Pages/RestaurantResultsPage.js";
import RestaurantPage from "views/Pages/RestaurantPage.js";
import CustomerDetailsPage from "views/Pages/CustomerDetailsPage.js";
import DeliveryDetailsPage from "views/Pages/DeliveryDetailsPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      
      <Route path="/landing-page" component={LandingPage} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/restaurant-results-page" render={props => <RestaurantResultsPage {...props} />} />
      <Route path="/restaurant-page/:id" render={props => <RestaurantPage {...props} />} />
      <Route path="/customer-details-page" component={CustomerDetailsPage} />
      <Route path="/delivery-details-page" component={DeliveryDetailsPage} />
      <Route path="/" component={Components} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
