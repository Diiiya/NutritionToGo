import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.8.0";

import RestaurantResultsPage from "views/Pages/RestaurantResultsPage.js";
import RestaurantPage from "views/Pages/RestaurantPage.js";
import CustomerDetailsPage from "views/Pages/CustomerDetailsPage.js";
import DeliveryDetailsPage from "views/Pages/DeliveryDetailsPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>      
      <Route path="/restaurant-page/:id"  render={props => <RestaurantPage {...props} />} />
      <Route path="/customer-details-page" component={CustomerDetailsPage} />
      <Route path="/delivery-details-page" component={DeliveryDetailsPage} />
      <Route path="/" render={props => <RestaurantResultsPage {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
