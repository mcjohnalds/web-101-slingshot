// @flow
import React from "react";
import { Switch, Redirect, Route } from "react-router";
import HTTPRoute from "./HTTPRoute";
import HTTPRequestsRoute from "./HTTPRequestsRoute";

const Main = () =>
  <Switch>
    <Redirect exact from="/" to="/http" />
    <Route path="/http" component={HTTPRoute} />
    <Route path="/http-requests" component={HTTPRequestsRoute} />
  </Switch>;

export default Main;
